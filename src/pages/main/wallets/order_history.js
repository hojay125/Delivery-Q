import React from 'react';
import { P,Page,Space,H1,Scroll } from '../../../helpers/elements';
import { Container,Avatar} from '../../../components/bi-react-library/src';
import {Colors,Fonts,RF} from '../../../helpers/constants';
import {TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {ItemCard} from '../../../helpers/components'

export const OrderHistory = (props) => {
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
                <H1 size={Fonts.semiMedium} color={Colors.primary}>Nov 4</H1>
            </Container>
            
            <Container flex={1}
                backgroundColor={Colors.appWhite}
                borderTopLeftRadius={30}
                borderTopRightRadius={30}
                paddingHorizontal={5}
            >
                <Container marginTop={4}>
                    <P>Order History</P>
                    <ItemCard navigate_to="OrderSummary" />
                </Container>
            </Container>
        </Page>
    )
}