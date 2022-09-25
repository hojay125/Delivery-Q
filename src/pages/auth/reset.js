import React, {useState} from 'react';
import {Text, StatusBar, View, StyleSheet, Linking} from 'react-native';
import {
  H1,
  Page,
  Space,
  P,
  H2,
  TextInputBox,
  Button,
  Scroll,
} from '../../helpers/elements';
import {
  Container,
  ImageWrap,
  ScrollArea,
  TouchWrap,
  InputWrap,
} from '../../components/bi-react-library/src';
import {Colors} from '../../helpers/constants';
import {Images} from '../../helpers/images';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import {Fonts} from '../../helpers/constants';
import Feather from 'react-native-vector-icons/Feather';
import {Success} from '../../helpers/components';

const Reset = (props) => {
  const [success, setSuccess] = useState(false);
  return (
    <Page
      backgroundColor={Colors.white}
      barIconColor={success ? 'dark' : 'light'}>
      {!success ? (
        <>
          <Container
            paddingTop={10}
            paddingHorizontal={15}
            backgroundColor={Colors.primary}
            borderBottomLeftRadius={30}
            borderBottomRightRadius={30}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <Feather
                name="chevron-left"
                color={Colors.white}
                size={Fonts.medium}
              />
            </TouchableOpacity>
            <ImageWrap source={Images.Logo1} height={15} fit="contain" />
            <P color={Colors.white} textAlign="center" size={Fonts.small}>
              Can't remember your password, enter your email address. A reset
              link will be sent to you
            </P>
            <Space height="15%" />
          </Container>
          <Container flex={1}>
            <Scroll>
              <Container paddingHorizontal={10}>
                <Space height="5%" />
                <P>RESET PASSWORD</P>
                <Container marginTop={6} marginBottom={5}>
                  <P size={Fonts.small} color={Colors.primary}>
                    Email Address
                  </P>
                  <TextInputBox
                    backgroundColor={Colors.white}
                    borderBottomWidth={0.8}
                    borderColor={Colors.primary}
                    color={Colors.primary}
                    width={70}
                    size={Fonts.small}
                    leftIcon="envelope"
                  />
                </Container>
                <Container marginBottom={5}>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate('Login')}>
                    <P color={Colors.primary} size={Fonts.small}>
                      Remember Password? Go back to login
                    </P>
                  </TouchableOpacity>
                </Container>
                <Container horizontalAlignment="center">
                  <Button text="Submit" onPress={() => setSuccess(true)} />
                </Container>
              </Container>
            </Scroll>
          </Container>
        </>
      ) : (
        <Success
          image={Images.Newmsg}
          title="EMAIL SENT"
          body="Follow a password recovery instructions. We have just sent to your email address"
          buttonTxt="Continue"
          buttonPage="Verify"
          setSuccess={setSuccess}
        />
      )}
    </Page>
  );
};

export default Reset;
