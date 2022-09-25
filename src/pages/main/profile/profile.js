import React from 'react';
import {Container, Avatar} from '../../../components/bi-react-library/src';
import {P, Page, Space, H1, Scroll} from '../../../helpers/elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Fonts, Colors} from '../../../helpers/constants';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Card} from '../../../helpers/components';
import Feather from 'react-native-vector-icons/Feather';
export const Profile = (props) => (
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
        <H1 size={Fonts.semiMedium}>Profile</H1>
      </TouchableOpacity>
    </Container>
    <Container flex={1} paddingHorizontal={5}>
      <Scroll>
        <Card>
          <Container verticalAlignment="center">
            <Avatar
              url={
                'https://media.istockphoto.com/photos/young-black-beauty-with-afro-hairstyle-picture-id459368695?k=6&m=459368695&s=612x612&w=0&h=gWmkCckwvXrwv4IFTd8Km0CRRI3H4HGL6B-1g9sMTTU='
              }
              size={15}
            />
          </Container>
          <Space width="10%" />
          <Container>
            <H1>Oyinlola Damilola</H1>
            <P>oyindamola@gmail.com</P>
            <P>+1 (234) 7089 5674</P>
            <P>2345678oyin</P>
          </Container>
        </Card>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('EditProfile')}>
          <Card horizontalAlignment="space-between" marginTop={4}>
            <P>Edit Profile</P>
            <Feather
              name="chevron-right"
              color={Colors.primary}
              size={Fonts.semiMedium}
            />
          </Card>
        </TouchableOpacity>
        <TouchableOpacity>
          <Card horizontalAlignment="space-between" marginTop={4}>
            <P>Payment Details</P>
            <Feather
              name="chevron-right"
              color={Colors.primary}
              size={Fonts.semiMedium}
            />
          </Card>
        </TouchableOpacity>
        <TouchableOpacity>
          <Card horizontalAlignment="space-between" marginTop={4}>
            <P>Delivery Catchment Area</P>
            <Feather
              name="chevron-right"
              color={Colors.primary}
              size={Fonts.semiMedium}
            />
          </Card>
        </TouchableOpacity>
      </Scroll>
    </Container>
  </Page>
);
