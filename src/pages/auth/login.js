import React, {useState} from 'react';
import {
  Text,
  StatusBar,
  View,
  StyleSheet,
  Linking,
  ScrollView,
} from 'react-native';
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
  TouchWrap,
  InputWrap,
} from '../../components/bi-react-library/src';
import {Colors} from '../../helpers/constants';
import {Images} from '../../helpers/images';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Fonts} from '../../helpers/constants';
import {RouteContext} from '../../helpers/route_context';

const Login = (props) => {
  const [is_login, setLogin] = useState(true);
  const {setCurrentState} = React.useContext(RouteContext);
  return (
    <Page backgroundColor={Colors.appWhite}>
      <Container
        paddingTop={10}
        paddingHorizontal={15}
        backgroundColor={Colors.primary}
        borderBottomLeftRadius={30}
        borderBottomRightRadius={30}>
        <ImageWrap source={Images.Logo1} height={15} fit="contain" />
        <P color={Colors.white} textAlign="center" size={Fonts.small}>
          Login with the membership ID sent to your email address and create a
          password
        </P>
        <Space height="15%" />
        <Container direction="row" horizontalAlignment="space-between">
          <TouchableOpacity onPress={() => setLogin(true)}>
            <P color={Colors.white} textAlign="right" size={Fonts.small}>
              Login
            </P>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setLogin(false)}>
            <P color={Colors.white} textAlign="right" size={Fonts.small}>
              Create Account
            </P>
          </TouchableOpacity>
        </Container>
      </Container>
      <Container flex={1}>
        {is_login ? (
          <Scroll>
            <Container paddingHorizontal={10}>
              <Container marginTop={4}>
                <P size={Fonts.small} color={Colors.primary}>
                  Membership ID
                </P>
                <TextInputBox
                  backgroundColor={Colors.appWhite}
                  borderBottomWidth={0.8}
                  borderColor={Colors.primary}
                  color={Colors.primary}
                  width={70}
                  size={Fonts.small}
                  leftIcon="exclamation-circle"
                />
              </Container>
              <Container marginTop={4}>
                <P size={Fonts.small} color={Colors.primary}>
                  Create Password
                </P>
                <TextInputBox
                  backgroundColor={Colors.appWhite}
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
              <Container marginBottom={5}>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate('Reset')}>
                  <P color={Colors.primary} size={Fonts.small}>
                    Forgot Password?
                  </P>
                </TouchableOpacity>
              </Container>
              <Container horizontalAlignment="center">
                <Button
                  text="Login"
                  onPress={() => setCurrentState('available')}
                />
              </Container>
              <Space height="10%" />
            </Container>
          </Scroll>
        ) : (
          <Container flex={1} verticalAlignment="center" paddingHorizontal={10}>
            <P>
              To create an account you have to visit the shoppers web page.
              click on the link below to create account.
            </P>
            <Space height="10%" />
            <TouchableOpacity
              onPress={() =>
                Linking.openURL('https://deliveryq.com/shopperonboarding')
              }>
              <P>deliveryq.com/shopperonboarding</P>
            </TouchableOpacity>
          </Container>
        )}
      </Container>
    </Page>
  );
};

export default Login;
