import React from 'react';
import {
  Container,
  Avatar,
  ImageWrap,
} from '../../../components/bi-react-library/src';
import {
  P,
  Page,
  Space,
  H1,
  Scroll,
  TextInputBox,
  Button,
} from '../../../helpers/elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Fonts, Colors, RF} from '../../../helpers/constants';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Card} from '../../../helpers/components';
import Feather from 'react-native-vector-icons/Feather';
import {Images} from '../../../helpers/images';

export const Referrals = (props) => {
  return (
    <Page backgroundColor={Colors.appWhite} barColor={Colors.black}>
      <Space height="10%" />
      <Container
        paddingHorizontal={5}
        direction="row"
        verticalAlignment="center">
        <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
          <FontAwesome
            name="th-large"
            size={Fonts.semiMedium}
            color={Colors.primary}
          />
        </TouchableOpacity>
        <Space width="30%" />
        <H1 size={Fonts.semiMedium}>Referral</H1>
      </Container>
      <Container flex={1} paddingHorizontal={5}>
        <Space height="10%" />
        <Scroll>
          <ImageWrap source={Images.Referrals} height={30} fit="contain" />
          <Container horizontalAlignment="center" marginTop={4}>
            <Container widthPercent="70%">
              <H1 size={Fonts.semiMedium} textAlign="center">
                Refer to your friends and get up to free $150
              </H1>
            </Container>
          </Container>
          <Container marginTop={4}>
            <P>Your referral code</P>
            <Space height={5} />
            <TextInputBox
              backgroundColor={Colors.appWhite}
              borderColor={Colors.primary}
              borderWidth={0.8}
              borderBottomWidth={0.8}
              borderRadius={10}
              width={80}
              leftIcon="exclamation-circle"
            />
          </Container>
          <Container marginTop={4} horizontalAlignment="center">
            <Button text="Share Link" />
            <Space height={10} />
            <TouchableOpacity
              onPress={() => props.navigation.navigate('ReferralDetails')}>
              <Container
                direction="row"
                verticalAlignment="center"
                horizontalAlignment="center">
                <P> Referral Details</P>
                <Feather
                  name="chevron-right"
                  color={Colors.primary}
                  size={RF(Fonts.semiMedium)}
                />
              </Container>
            </TouchableOpacity>
          </Container>
        </Scroll>
      </Container>
    </Page>
  );
};
