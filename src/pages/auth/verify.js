import React, {useState} from 'react';
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
import {Colors} from '../../helpers/constants';
import {Images} from '../../helpers/images';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import {Fonts} from '../../helpers/constants';
import Feather from 'react-native-vector-icons/Feather';

const Verify = (props) => {
  return (
    <Page backgroundColor={Colors.white}>
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
          Verification Code
        </P>
        <Space height="15%" />
      </Container>
      <Container flex={1}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Container paddingHorizontal={10} height={65}>
            <Space height="5%" />
            <P>
              Check your email address and enter the verification code sent to
              you
            </P>
            <Container
              marginTop={6}
              marginBottom={5}
              direction="row"
              horizontalAlignment="space-evenly"
              paddingHorizontal={10}
              marginLeft={3}>
              {[...'1234'].map((item, index) => {
                return (
                  <Container marginRight={10}>
                    <TextInputBox
                      key={index}
                      backgroundColor={Colors.white}
                      borderWidth={0.8}
                      borderBottomWidth={0.8}
                      borderLeftWidth={0.8}
                      borderColor={Colors.primary}
                      color={Colors.primary}
                      width={15}
                      size={Fonts.small}
                      borderRadius={5}
                      textAlign="center"
                      keyboardType="numeric"
                    />
                  </Container>
                );
              })}
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
              <Button
                text="Verify"
                onPress={() => props.navigation.navigate('ChangePwd')}
              />
            </Container>
            <Space height="10%" />
          </Container>
        </ScrollView>
      </Container>
    </Page>
  );
};

export default Verify;
