import React from 'react';
import {Container} from '../../../components/bi-react-library/src';
import {P, Page, Space, H1, Scroll} from '../../../helpers/elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Fonts, Colors} from '../../../helpers/constants';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {HomeTabScreen} from '../../../helpers/tabs';

export const Home = (props) => (
  <Page backgroundColor={Colors.appWhite} barColor={Colors.black}>
    <Space height="10%" />
    <Container paddingHorizontal={5}>
      <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
        <FontAwesome
          name="th-large"
          size={Fonts.semiMedium}
          color={Colors.primary}
        />
        <Space height="10%" />
        <H1 size={Fonts.semiMedium}>Gig</H1>
      </TouchableOpacity>
    </Container>
    <Container flex={1} paddingHorizontal={5}>
      <HomeTabScreen />
    </Container>
  </Page>
);
