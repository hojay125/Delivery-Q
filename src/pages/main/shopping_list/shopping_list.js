import React from 'react';
import { Container } from '../../../components/bi-react-library/src';
import { Page, Space,H1,P, Scroll } from '../../../helpers/elements';
import {TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { Fonts,Colors } from '../../../helpers/constants';
import { ShoppingListTab } from '../../../helpers/tabs';

export const ShoppingList = (props) => {
    return(
        <Page>
            <Space height="10%"/>
           <Container paddingHorizontal={5} verticalAlignment="center">
                <TouchableOpacity onPress={()=>props.navigation.navigate("Home")}>
                    <Container verticalAlignment="center" marginTop={0.5}>
                        <Feather name="chevron-left" size={Fonts.medium} color={Colors.primary} />
                    </Container>
                </TouchableOpacity>
                <Container direction="row" marginTop={4}
                    horizontalAlignment="space-between"
                >
                    <H1>Jessica's Order</H1>
                    <Container widthPercent="40%">
                        <P>Total items : 5</P>
                        <P>Amount : <H1 size={Fonts.small}>$34.50</H1></P>
                    </Container>
                </Container>
           </Container>
           <Container flex={1} paddingHorizontal={5} marginTop={4}>
                <ShoppingListTab />
           </Container>
        </Page>
    )
}