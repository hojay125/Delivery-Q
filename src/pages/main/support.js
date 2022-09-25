import React from 'react';
import { Container,ImageWrap } from '../../components/bi-react-library/src';
import { P,Page, Space, H1, Scroll,TextInputBox,Button} from '../../helpers/elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Fonts,Colors } from '../../helpers/constants';
import {Images} from '../../helpers/images';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Card} from '../../helpers/components'
import Feather from 'react-native-vector-icons/Feather';


export const Support = (props) => {
    return(
    <Page backgroundColor={Colors.appWhite} barColor={Colors.black}>
        <Space height="10%"/>
        <Container paddingHorizontal={5} 
            direction="row"
            verticalAlignment="center"
        >
            <TouchableOpacity
                onPress={()=>props.navigation.openDrawer()}
            >
                <FontAwesome name="th-large" size={Fonts.semiMedium} color={Colors.primary}/>
            </TouchableOpacity>
            <Space width="30%"/>
            <H1 size={Fonts.semiMedium}>Support</H1>
        </Container>
        <Container flex={1} paddingHorizontal={5}>
            <Space height="10%"/>
            <Scroll>
                <ImageWrap 
                    source={Images.Support}
                    height={30}
                    fit="contain"
                />
                <Container marginTop={4}>
                   <P>Describe the issue you are facing</P>
                   <Space height={5} />
                    <TextInputBox 
                        backgroundColor={Colors.appWhite}
                        borderColor={Colors.primary}
                        borderWidth={0.8}
                        borderBottomWidth={0.8}
                        borderRadius={10}
                        height={20}
                        width={80}
                        multiline={true}
                        leftIcon="exclamation-circle"
                    />
               </Container>
               <Container marginTop={4}>
                   <P>Enter phone number</P>
                   <Space height={5} />
                    <TextInputBox 
                        backgroundColor={Colors.appWhite}
                        borderColor={Colors.primary}
                        borderWidth={0.8}
                        borderBottomWidth={0.8}
                        borderRadius={10}
                        leftIcon="phone"
                        width={80}
                    />
               </Container>
               <Container marginTop={4} horizontalAlignment="center">
                    <Button 
                        text="Send message"
                    />
               </Container>
            </Scroll>
        </Container>
    </Page>
)};