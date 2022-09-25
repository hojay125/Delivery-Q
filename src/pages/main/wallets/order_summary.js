import React from 'react';
import { P,Page,Space,H1,Scroll } from '../../../helpers/elements';
import { Container,Avatar} from '../../../components/bi-react-library/src';
import {Colors,Fonts,RF} from '../../../helpers/constants';
import {TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {ItemCard} from '../../../helpers/components';

export const OrderSummary = (props) => {
    const data = [
        {
            label1 : "Order ID",
            value1 : "Order No : 6423783",
            label2 : "No of Items",
            value2 : "5 items (6Units)"
        },
        {
            label1 : "Target Location",
            value1 : "900 Metropilitan Ave",
            label2 : "Distance to Store",
            value2 : "4.3 miles"
        },
        {
            label1 : "Distance to Customer",
            value1 : "4.3 miles",
            label2 : "Time Taken",
            value2 : "4.9 hours"
        },
        {
            label1 : "Estimated Pay",
            value1 : "$15 - $19",
            label2 : "Tip Pay",
            value2 : "$5 - $8"
        },
        {
            label1 : "Gig Pay",
            value1 : "$15 - $19",
            label2 : "Date",
            value2 : "March 10, 2021"
        },
        {
            label1 : "Customer Name",
            value1 : "Jesicca A.",
            label2 : "Contact No",
            value2 : "+(234) 890 7865"
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
                <H1 size={Fonts.semiMedium} color={Colors.primary}>Order Summary</H1>
            </Container>
            <Space height="3%"/>
            <Container flex={1}
                backgroundColor={Colors.appWhite}
                paddingHorizontal={5}
            >
                <Scroll>
                    <Container marginTop={4}>
                        {
                            data.map((item,index)=>(
                                <Container 
                                    direction="row"
                                    horizontalAlignment="space-between"
                                    paddingVertical={5}
                                    borderColor={Colors.appLineColor}
                                    borderBottomWidth={1}
                                    key={index}
                                >
                                    <Container widthPercent="50%">
                                        <H1 size={Fonts.small}>{item.label1}</H1>
                                        <P>{item.value1}</P>
                                    </Container>
                                    <Container widthPercent="40%">
                                        <H1 size={Fonts.small}>{item.label2}</H1>
                                        <P>{item.value2}</P>
                                    </Container>
                                </Container>
                            ))
                        }
                    </Container>
                </Scroll>
            </Container>
        </Page>
    )
}