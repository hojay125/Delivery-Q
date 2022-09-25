import React, {useEffect} from 'react';
import {Image} from 'react-native';
import {
  Container,
  ImageWrap,
  SizedBox,
} from '../../components/bi-react-library/src/index';
import {Images} from '../../helpers/images';
import {Colors, Fonts} from '../../helpers/constants';
import {P, Space, H1} from '../../helpers/elements';
import {useStoreActions} from 'easy-peasy';
import {RouteContext} from '../../helpers/route_context';

export const Splash = (props) => {
  const {setCurrentState} = React.useContext(RouteContext);
  init = () => {
    setCurrentState('onboarding');
  };
  useEffect(() => {
    setTimeout(() => init(), 550);
  }, []);
  return (
    <Container
      flex={1}
      horizontalAlignment="center"
      verticalAlignment="center"
      backgroundColor={Colors.whiteBase}>
      <ImageWrap source={Images.Logo} height={16} fit="contain" />
      <Space height="2%" />
      <P size={Fonts.medium}>Shopper's app</P>
    </Container>
  );
};

export default Splash;
