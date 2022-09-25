import React, {useEffect} from 'react';
import {Image} from 'react-native';
import {
  Container,
  ImageWrap,
  SizedBox,
  Avatar,
} from '@burgeon8interactive/bi-react-library';
import {Images} from '../../helpers/images';
import {Colors, Fonts} from '../../helpers/constants';
import {P, Space, H1, Button} from '../../helpers/elements';
import Swiper from 'react-native-swiper';
import {Rounded} from '../../components/bi-react-library/src';
import {RouteContext} from '../../helpers/route_context';
import {ScrollView} from 'react-native-gesture-handler';

export const Onboarding = ({navigation}) => {
  const swiper = React.useRef(null);
  const {setCurrentState} = React.useContext(RouteContext);
  const slides = [
    {
      image: Images.Logo,
      name: "Shopper's app",
      body: 'Welcome to the DQ Community',
      button_text: 'Get started',
    },
    {
      image: Images.Onboard1,
      title: 'Run Gig, Earn Money',
      body: 'Able to view earnings & payout details schedules, displayed per week, per day.',
      button_text: 'Skip',
    },
    {
      image: Images.Onboard2,
      title: 'Real-Time Chat Support',
      body: 'Chat and send pictures, images and audio messges to customers in real time',
      button_text: 'Skip',
    },
    {
      image: Images.Onboard3,
      title: 'Easy Navigation Process',
      body: 'Minimal and readable map interface to easily navigate to store',
      button_text: 'Login',
    },
  ];
  return (
    <ScrollView>
      <Swiper
        loop={false}
        dot={<Avatar size={0} />}
        activeDot={<Avatar size={0} />}>
        {slides.map((item, index) => (
          <Container
            flex={1}
            horizontalAlignment="center"
            verticalAlignment="center"
            backgroundColor={Colors.whiteBase}
            paddingHorizontal={10}
            key={index}>
            <Space height="10%" />
            <ImageWrap source={item.image} height={40} fit="contain" />
            <Space height="2%" />
            {item.name && (
              <>
                <P size={Fonts.medium}>{item.name}</P>
                <Space height="6%" />
              </>
            )}
            {item.title && (
              <>
                <H1 size={Fonts.medium}>{item.title}</H1>
                <Space height="2%" />
              </>
            )}
            <Container paddingHorizontal={5}>
              {item.body && (
                <P textAlign="center" size={Fonts.small}>
                  {item.body}
                </P>
              )}
              <Container
                marginTop={5}
                horizontalAlignment="center"
                direction="row">
                {[...'1234'].map((progres, id) => (
                  <Container
                    verticalAlignment="center"
                    marginRight={3}
                    key={id}>
                    {index === id ? (
                      <Container
                        backgroundColor={Colors.primaryLight}
                        height={1.5}
                        width={4}
                        borderRadius={20}
                      />
                    ) : (
                      <Rounded backgroundColor={Colors.offWhite} size={2} />
                    )}
                    <Space width="3%" />
                  </Container>
                ))}
              </Container>
              <Space height="13%" />
              {item.button_text && (
                <Container horizontalAlignment="center">
                  <Button
                    text={item.button_text}
                    onPress={() => setCurrentState('login')}
                  />
                </Container>
              )}
            </Container>
          </Container>
        ))}
      </Swiper>
    </ScrollView>
  );
};

export default Onboarding;
