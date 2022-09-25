import React from 'react';
import { Container, Avatar } from '../../components/bi-react-library/src';
import { P,Page, Space, H1, Scroll} from '../../helpers/elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Fonts,Colors } from '../../helpers/constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Card} from '../../helpers/components'
import Feather from 'react-native-vector-icons/Feather';


export const Legal = (props) => {
    const p_tags = [
        "Privacy is not a new concept. Humans have always desired privacy in their social as well as private lives. But the idea of privacy as a human right is a relatively modern phenomenon",
        "Around the world, laws and regulations have been developed for the protection of data related to government, education, health, children, consumers, financial institutions, etc.",
        
       "This data is critical to the person it belongs to. Data privacy and security binds individuals and industries together and runs complex systems in our society. From credit card numbers and social security numbers to email addresses and phone numbers, our sensitive, personally identifiable information is important. This sort of information in unreliable hands can potentially have far-reaching consequences.",
    ]
    return(
    <Page backgroundColor={Colors.appWhite} barColor={Colors.black}>
        <Space height="10%"/>
        <Container paddingHorizontal={5} direction="row" 
            verticalAlignment="center"
            widthPercent="100%"
        >
            <TouchableOpacity
                onPress={()=>props.navigation.openDrawer()}
            >
                <FontAwesome name="th-large" size={Fonts.semiMedium} color={Colors.primary}/>
            </TouchableOpacity>
            <Space width="30%"/>
            <H1 size={Fonts.semiMedium}>Legal</H1>
        </Container>
        <Container flex={1} paddingHorizontal={5}>
            <Space height="10%"/>
            <Scroll>
                {
                    p_tags.map((item,index)=>(<P>{item}</P>))
                }
            </Scroll>
        </Container>
    </Page>
)};