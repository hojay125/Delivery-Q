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
import {Fonts, Colors} from '../../../helpers/constants';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';

export const ReferralDetails = (props) => {
  return (
    <Page backgroundColor={Colors.appWhite} barColor={Colors.black}>
      <Space height="10%" />
      <Container
        paddingHorizontal={5}
        direction="row"
        verticalAlignment="center">
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Feather
            name="chevron-left"
            size={Fonts.semiMedium}
            color={Colors.primary}
          />
        </TouchableOpacity>
        <Space width="30%" />
        <H1 size={Fonts.semiMedium}>Referral Details</H1>
      </Container>
      <Container flex={1} paddingHorizontal={5}>
        <Space height="10%" />
        <Scroll>
          {[
            {
              name: 'Earned Rewards',
              value: '$10.000',
            },
            {
              name: 'Total Earned Rewards',
              value: '$50.000',
            },
            {
              name: 'Referred Users',
              value: '20.000',
            },
            {
              name: 'Earned per Referral',
              value: '20.000',
            },
            {
              name: 'Date of referral',
              value: '20 Nov, 2020',
            },
            {
              name: 'Payout Date for referral',
              value: '20 Nov, 2020',
            },
          ].map((item, index) => {
            return (
              <Container direction="row" marginBottom={2} key={index}>
                <Container widthPercent="60%" marginRight={1}>
                  <P numberOfLines={1}>{item.name}</P>
                </Container>
                <P textAlign="right">{item.value}</P>
              </Container>
            );
          })}
        </Scroll>
      </Container>
    </Page>
  );
};
