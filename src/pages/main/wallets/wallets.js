import React from 'react';
import { P,Page,Space,H1,Scroll } from '../../../helpers/elements';
import { Container } from '../../../components/bi-react-library/src';
import {Colors,Fonts,RF} from '../../../helpers/constants';
import {TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {Card} from '../../../helpers/components'
import { FlatList } from 'react-native-gesture-handler';
import moment from 'moment';

export const Wallet = (props) => {
    const data = [
        {
            name : "This Week",
            range : `${moment().startOf("week").format("MMM DD")} - ${moment().endOf("week").format("MMM DD")}`,
            earning : "$200.00"
        },
        {
            name : "Past Week",
            range : `${moment().subtract(1,'week').startOf("week").format("MMM DD")} - ${moment().subtract(1,'week').endOf("week").format("MMM DD")}`,
            earning : "$10,000.00"
        }
    ]
    return(
        <Page 
            backgroundColor={Colors.primary}
        >
            <Space height="10%"/>
            <Container 
                paddingHorizontal={5} 
                direction="row"
                verticalAlignment="center"
            >
                <TouchableOpacity
                    onPress={()=>props.navigation.openDrawer()}
                >
                    <FontAwesome name="th-large" size={Fonts.semiMedium} color={Colors.appWhite}/>
                </TouchableOpacity>
                <Space width="30%"/>
                <TouchableOpacity>
                    <H1 size={Fonts.semiMedium} color={Colors.appWhite}>Earnings</H1>
                </TouchableOpacity>
                <Space width="20%"/>
                <TouchableOpacity onPress={()=> props.navigation.navigate("CashOut")}>
                    <P color={Colors.appWhite}>Cash Out</P>
                </TouchableOpacity>
            </Container>
            <Container horizontalAlignment="center" marginTop={4}>
                <H1 color={Colors.appWhite} size={Fonts.semiBig}>$100,000.00</H1>
                <P color={Colors.appWhite}>Wallet Balance</P>
            </Container>
            <Space height="10%"/>
            <Container flex={1}
                backgroundColor={Colors.appWhite}
                borderTopLeftRadius={30}
                borderTopRightRadius={30}
                paddingHorizontal={5}
            >
                <Container marginTop={4}>
                    <H1 size={Fonts.small}>Earnings</H1>
                    <Space height={10} />
                    <FlatList 
                        data={data}
                        renderItem={({item,index})=>(
                            <TouchableOpacity
                                onPress={()=>props.navigation.navigate("Earnings")}
                            >
                                <Card 
                                    horizontalAlignment="space-evenly"
                                    verticalAlignment="center"
                                    key={index}
                                >
                                    <Container>
                                        <H1 size={Fonts.small}>{item.name}</H1>
                                        <P>{item.range}</P>
                                    </Container>
                                    <P>{item.earning}</P>
                                    <Feather 
                                        name="chevron-right"
                                        color={Colors.primary}
                                        size={RF(Fonts.semiMedium)}
                                    />
                                </Card>
                            </TouchableOpacity>
                        )}

                    />
                </Container>
            </Container>
        </Page>
    )
}