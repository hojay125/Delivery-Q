import React from 'react';
import { P,Page,Space,H1,Scroll } from '../../../helpers/elements';
import { Container,Avatar} from '../../../components/bi-react-library/src';
import {Colors,Fonts,RF} from '../../../helpers/constants';
import {TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {Card} from '../../../helpers/components'
import { FlatList } from 'react-native-gesture-handler';
import moment from 'moment';

export const Earnings = (props) => {
    const data = [
        {
            month : "Nov 4",
            quantity : 1,
            is_referral : false,
            amount : 2000000
        },
        {
            month : "Nov 5",
            quantity : 10,
            is_referral : false,
            amount : 600000
        },
        {
            month : "Nov 6",
            quantity : 1,
            is_referral : true,
            amount : 2000000
        },
        {
            month : "Nov 4",
            quantity : 1,
            is_referral : false,
            amount : 2000000
        },
        {
            month : "Nov 5",
            quantity : 10,
            is_referral : false,
            amount : 600000
        },
        {
            month : "Nov 6",
            quantity : 1,
            is_referral : true,
            amount : 2000000
        }
    ]
    return(
        <Page 
            backgroundColor={Colors.appWhite}
            barIconColor="dark"
        >
            <Space height="10%"/>
            <Container 
                paddingHorizontal={5} 
                direction="row"
                verticalAlignment="center"
            >
                <TouchableOpacity
                    onPress={()=>props.navigation.goBack()}
                >
                    <Feather name="chevron-left" size={RF(Fonts.semiMedium)} color={Colors.primary}/>
                </TouchableOpacity>
                <Space width="30%"/>
                <H1 size={Fonts.semiMedium} color={Colors.primary}>This Week</H1>
            </Container>
            
            <Container flex={1}
                backgroundColor={Colors.appWhite}
                borderTopLeftRadius={30}
                borderTopRightRadius={30}
                paddingHorizontal={5}
            >
                <Container marginTop={4}>
                    <FlatList 
                        data={data}
                        renderItem={({item,index})=>(
                            <TouchableOpacity key={index}
                                onPress={()=>props.navigation.navigate("OrderHistory")}
                            >
                                <Card 
                                    verticalAlignment="center"
                                    horizontalAlignment="space-between"
                                >
                                    <Container direction="row"
                                        verticalAlignment="center"
                                    >
                                        <Avatar 
                                            url="https://media.istockphoto.com/photos/young-black-beauty-with-afro-hairstyle-picture-id459368695?k=6&m=459368695&s=612x612&w=0&h=gWmkCckwvXrwv4IFTd8Km0CRRI3H4HGL6B-1g9sMTTU="
                                        />
                                        <Space width="8%" />
                                        <Container>
                                            <P>{item.month}</P>
                                            {
                                                item.is_referral ? (
                                                    <P size={Fonts.semiSmall}>Referral Program</P>
                                                ) : null
                                            }
                                            <P>{item.quantity} order</P>
                                        </Container>
                                    </Container>
                                    <P>${item.amount}</P>
                                </Card>
                            </TouchableOpacity>
                        )}
                        showsVerticalScrollIndicator={false}
                    />
                </Container>
            </Container>
        </Page>
    )
}