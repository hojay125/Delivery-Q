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
} from '../../helpers/elements';
import {
  Container,
  ImageWrap,
  ScrollArea,
  TouchWrap,
  InputWrap,
} from '../../components/bi-react-library/src';
import {Images} from '../../helpers/images';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import {Fonts, Colors} from '../../helpers/constants';
import Feather from 'react-native-vector-icons/Feather';
import {Success} from '../../helpers/components';

const ChangePwd = (props) => {
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
                size={Fonts.small}
              />
            </TouchableOpacity>
            <ImageWrap source={Images.Logo1} height={15} fit="contain" />
            <P color={Colors.white} textAlign="center" size={Fonts.small}>
              OTP verification successful
            </P>
            <Space height="15%" />
          </Container>
          <Container flex={1}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Container paddingHorizontal={10} height={65}>
                <Space height="5%" />
                <P>CREATE NEW PASSWORD</P>
                <Container marginTop={4}>
                  <P size={Fonts.small} color={Colors.primary}>
                    Create Password
                  </P>
                  <TextInputBox
                    backgroundColor={Colors.white}
                    borderBottomWidth={0.8}
                    borderColor={Colors.primary}
                    color={Colors.primary}
                    width={70}
                    size={Fonts.small}
                    leftIcon="lock"
                    rightIcon={true}
                    secure={true}
                  />
                </Container>
                <Container marginTop={4}>
                  <P size={Fonts.small} color={Colors.primary}>
                    Confirm Password
                  </P>
                  <TextInputBox
                    backgroundColor={Colors.white}
                    borderBottomWidth={0.8}
                    borderColor={Colors.primary}
                    width={70}
                    secure={true}
                    color={Colors.primary}
                    leftIcon="lock"
                    size={Fonts.small}
                    rightIcon={true}
                  />
                </Container>
                <Container horizontalAlignment="center" marginTop={4}>
                  <Button
                    text="Change Password"
                    onPress={() => setSuccess(true)}
                  />
                </Container>
              </Container>
            </ScrollView>
          </Container>
        </>
      ) : (
        <Success
          image={Images.Success}
          title="PASSWORD RESET SUCCESSFULLY"
          body="Your password has been updated!
                        click on the login button to continue"
          buttonTxt="Login"
          buttonPage="Login"
          setSuccess={setSuccess}
        />
      )}
    </Page>
  );
};

export default ChangePwd;
