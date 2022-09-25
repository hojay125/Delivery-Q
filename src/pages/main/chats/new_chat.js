import React from 'react';
import {Container, Avatar} from '../../../components/bi-react-library/src';
import {
  P,
  Page,
  Space,
  H1,
  Scroll,
  TextInputBox,
} from '../../../helpers/elements';
import Feather from 'react-native-vector-icons/Feather';
import {Fonts, Colors, RF} from '../../../helpers/constants';
import {TouchableOpacity, FlatList} from 'react-native-gesture-handler';
import {ScrollView} from 'react-native';
import {Card} from '../../../helpers/components';

export const NewChat = (props) => {
  const data = [
    {
      id: 1,
      avatar:
        'https://i.pinimg.com/474x/f5/a2/ba/f5a2ba129ca38b5a2555ba95769031b0.jpg',
      message: 'Are you sure he said?',
      is_me: false,
      time: '10:45pm',
    },
    {
      id: 2,
      avatar:
        'https://i.pinimg.com/474x/f5/a2/ba/f5a2ba129ca38b5a2555ba95769031b0.jpg',
      message:
        "Let's wait and see how it goes. Let's wait and see how it goes. Let's wait and see how it goes",
      is_me: false,
      time: '10:47pm',
    },
    {
      id: 3,
      avatar:
        'https://media.istockphoto.com/photos/young-black-beauty-with-afro-hairstyle-picture-id459368695?k=6&m=459368695&s=612x612&w=0&h=gWmkCckwvXrwv4IFTd8Km0CRRI3H4HGL6B-1g9sMTTU=',
      message: 'What are you doing?',
      name: 'Dami Lol',
      is_me: true,
      time: '10:48pm',
    },
    {
      id: 4,
      avatar:
        'https://media.istockphoto.com/photos/young-black-beauty-with-afro-hairstyle-picture-id459368695?k=6&m=459368695&s=612x612&w=0&h=gWmkCckwvXrwv4IFTd8Km0CRRI3H4HGL6B-1g9sMTTU=',
      message: 'What are you doing?',
      name: 'Dami Lol',
      is_me: true,
      time: '10:48pm',
    },
    {
      id: 5,
      avatar:
        'https://i.pinimg.com/474x/f5/a2/ba/f5a2ba129ca38b5a2555ba95769031b0.jpg',
      message:
        "Let's wait and see how it goes. Let's wait and see how it goes. Let's wait and see how it goes",
      is_me: false,
      time: '10:47pm',
    },
    {
      id: 6,
      avatar:
        'https://media.istockphoto.com/photos/young-black-beauty-with-afro-hairstyle-picture-id459368695?k=6&m=459368695&s=612x612&w=0&h=gWmkCckwvXrwv4IFTd8Km0CRRI3H4HGL6B-1g9sMTTU=',
      message: 'What are you doing?',
      name: 'Dami Lol',
      is_me: true,
      time: '10:48pm',
    },
    {
      id: 7,
      avatar:
        'https://media.istockphoto.com/photos/young-black-beauty-with-afro-hairstyle-picture-id459368695?k=6&m=459368695&s=612x612&w=0&h=gWmkCckwvXrwv4IFTd8Km0CRRI3H4HGL6B-1g9sMTTU=',
      message: 'No?',
      name: 'Dami Lol',
      is_me: true,
      time: '10:48pm',
    },
  ];
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
            size={RF(Fonts.semiMedium)}
            color={Colors.primary}
          />
        </TouchableOpacity>
        <Space width="15%" />
        <H1 size={RF(Fonts.semiMedium)}>Oyindamola Damilola</H1>
        <Space width="15%" />
        <TouchableOpacity>
          <Feather
            name="search"
            size={RF(Fonts.semiMedium)}
            color={Colors.primary}
          />
        </TouchableOpacity>
      </Container>
      <Container flex={1} paddingHorizontal={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Container marginTop={4}>
            <FlatList
              data={data}
              renderItem={({item, index}) => {
                return (
                  <Container marginBottom={index + 1 === data.length ? 10 : 0}>
                    {!item.is_me ? (
                      <Container>
                        {index === 0 || (index > 0 && data[index - 1].is_me) ? (
                          <Avatar url={item.avatar} size={10} />
                        ) : null}
                        <Container
                          backgroundColor={Colors.appPink}
                          marginTop={1.5}
                          paddingHorizontal={2}
                          paddingVertical={2}
                          widthPercent="60%"
                          marginLeft={10}
                          borderRadius={10}>
                          <P>{item.message}</P>
                        </Container>
                      </Container>
                    ) : (
                      <Container horizontalAlignment="flex-end">
                        {index === 0 ||
                        (index > 0 && !data[index - 1].is_me) ? (
                          <Avatar url={item.avatar} size={10} />
                        ) : null}
                        <Container
                          backgroundColor={Colors.appPink}
                          marginTop={1.5}
                          paddingHorizontal={2}
                          paddingVertical={2}
                          widthPercent="60%"
                          marginLeft={10}
                          borderRadius={10}>
                          <P>{item.message}</P>
                        </Container>
                      </Container>
                    )}
                  </Container>
                );
              }}
              showsVerticalScrollIndicator={false}
            />
          </Container>
        </ScrollView>
        <Container direction="row" marginBottom={2} verticalAlignment="center">
          <TouchableOpacity>
            <Feather
              name="paperclip"
              color={Colors.primary}
              size={Fonts.semiMedium}
            />
          </TouchableOpacity>
          <TextInputBox
            placeholder="Type message"
            width={70}
            backgroundColor={Colors.appWhite}
          />
          <Space width="2%" />
          <TouchableOpacity>
            <Feather
              name="send"
              color={Colors.primary}
              size={Fonts.semiMedium}
            />
          </TouchableOpacity>
          <Space width="2%" />
          <TouchableOpacity>
            <Feather
              name="smile"
              color={Colors.primary}
              size={Fonts.semiMedium}
            />
          </TouchableOpacity>
        </Container>
      </Container>
    </Page>
  );
};
