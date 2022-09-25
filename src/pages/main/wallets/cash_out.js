import React from 'react';
import { Container, Avatar } from '../../../components/bi-react-library/src';
import { P,Page, Space, H1, Scroll,TextInputBox, Button} from '../../../helpers/elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Fonts,Colors } from '../../../helpers/constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Card} from '../../../helpers/components'
import Feather from 'react-native-vector-icons/Feather';


export const CashOut = (props) => (
    <Page backgroundColor={Colors.appWhite} barColor={Colors.black}>
        <Space height="10%"/>
        <Container paddingHorizontal={5} direction="row"
            verticalAlignment="center"
        >
            <TouchableOpacity
                onPress={()=>props.navigation.goBack()}
            >
                <Feather name="chevron-left" size={Fonts.semiMedium} color={Colors.primary}/>
            </TouchableOpacity>
            <Space width="30%"/>
            <H1 size={Fonts.semiMedium}>Cash Out</H1>
        </Container>
        <Container flex={1} paddingHorizontal={5} marginTop={4}>
            <Scroll>
                <Container>
                    <Container marginTop={4}>
                        <P size={Fonts.small} color={Colors.primary}>Enter Account Name</P>
                        <TextInputBox 
                            backgroundColor={Colors.appWhite}
                            borderWidth={0.8}
                            borderColor={Colors.primary}
                            color={Colors.primary}
                            width={80}
                            size={Fonts.small}
                            borderBottomWidth={0.8}
                            borderRadius={10}
                            leftIcon="user"
                        />
                    </Container>
                    <Container marginTop={4}>
                        <P size={Fonts.small} color={Colors.primary}>Enter Account Number</P>
                        <TextInputBox 
                            backgroundColor={Colors.appWhite}
                            borderBottomWidth={0.8}
                            borderColor={Colors.primary}
                            color={Colors.primary}
                            width={80}
                            size={Fonts.small}
                            leftIcon="exclamation-circle"
                            borderWidth={0.8}
                            borderRadius={10}
                        />
                    </Container>
                    <Container marginTop={4} 
                        direction="row"
                        horizontalAlignment="space-between"
                    >
                        <Container>
                            <P size={Fonts.small} color={Colors.primary}>Select Bank</P>
                            <TextInputBox 
                                backgroundColor={Colors.appWhite}
                                borderBottomWidth={0.8}
                                borderColor={Colors.primary}
                                color={Colors.primary}
                                width={30}
                                size={Fonts.small}
                                leftIcon="suitcase"
                                borderWidth={0.8}
                                borderRadius={10}
                            />
                        </Container>
                        <Container>
                            <P size={Fonts.small} color={Colors.primary}>Enter Amount</P>
                            <TextInputBox 
                                backgroundColor={Colors.appWhite}
                                borderBottomWidth={0.8}
                                borderColor={Colors.primary}
                                color={Colors.primary}
                                width={30}
                                size={Fonts.small}
                                leftIcon="dollar"
                                borderWidth={0.8}
                                borderRadius={10}
                            />
                    </Container>
                    </Container>
                   <Container horizontalAlignment="center" marginTop={8}>
                    <Button 
                            text="Cash Out"
                        />
                   </Container>
                </Container>
            </Scroll>
        </Container>
    </Page>
);