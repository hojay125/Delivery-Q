import React from 'react';
import {Container, Avatar} from '../../../components/bi-react-library/src';
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
import {Fonts, Colors} from '../../../helpers/constants';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Card} from '../../../helpers/components';
import Feather from 'react-native-vector-icons/Feather';

export const EditProfile = (props) => (
  <Page backgroundColor={Colors.appWhite} barColor={Colors.black}>
    <Space height="10%" />
    <Container paddingHorizontal={5} direction="row" verticalAlignment="center">
      <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <Feather
          name="chevron-left"
          size={Fonts.semiMedium}
          color={Colors.primary}
        />
      </TouchableOpacity>
      <Space width="30%" />
      <H1 size={Fonts.semiMedium}>Edit Profile</H1>
    </Container>
    <Container flex={1} paddingHorizontal={5} marginTop={4}>
      <Scroll>
        <Container horizontalAlignment="center">
          <TouchableOpacity>
            <Container horizontalAlignment="center" marginBottom={1}>
              <Avatar
                url={
                  'https://media.istockphoto.com/photos/young-black-beauty-with-afro-hairstyle-picture-id459368695?k=6&m=459368695&s=612x612&w=0&h=gWmkCckwvXrwv4IFTd8Km0CRRI3H4HGL6B-1g9sMTTU='
                }
                size={20}
              />
            </Container>
            <P>Change profile image</P>
          </TouchableOpacity>
        </Container>
        <Container>
          <Container marginTop={4}>
            <P size={Fonts.small} color={Colors.primary}>
              First Name
            </P>
            <TextInputBox
              backgroundColor={Colors.appWhite}
              borderBottomWidth={0.8}
              borderColor={Colors.primary}
              color={Colors.primary}
              width={80}
              size={Fonts.small}
              leftIcon="user"
            />
          </Container>
          <Container marginTop={4}>
            <P size={Fonts.small} color={Colors.primary}>
              Last Name
            </P>
            <TextInputBox
              backgroundColor={Colors.appWhite}
              borderBottomWidth={0.8}
              borderColor={Colors.primary}
              color={Colors.primary}
              width={80}
              size={Fonts.small}
              leftIcon="user"
            />
          </Container>
          <Container marginTop={4}>
            <P size={Fonts.small} color={Colors.primary}>
              Phone Number
            </P>
            <TextInputBox
              backgroundColor={Colors.appWhite}
              borderBottomWidth={0.8}
              borderColor={Colors.primary}
              color={Colors.primary}
              width={80}
              size={Fonts.small}
              leftIcon="phone"
            />
          </Container>
          <Container marginTop={4}>
            <P size={Fonts.small} color={Colors.primary}>
              Membership ID
            </P>
            <TextInputBox
              backgroundColor={Colors.appWhite}
              borderBottomWidth={0.8}
              borderColor={Colors.primary}
              color={Colors.primary}
              width={80}
              size={Fonts.small}
              leftIcon="exclamation-circle"
            />
          </Container>
          <Container horizontalAlignment="center" marginTop={4}>
            <Button text="Save Changes" />
          </Container>
        </Container>
      </Scroll>
    </Container>
  </Page>
);
