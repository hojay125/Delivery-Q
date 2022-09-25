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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Fonts, Colors} from '../../../helpers/constants';
import {TouchableOpacity, FlatList} from 'react-native-gesture-handler';
import {HomeTabScreen} from '../../../helpers/tabs';
import {Card} from '../../../helpers/components';

export const Chats = (props) => {
  const data = [
    {
      name: 'Davies White',
      comment: 'Where are you?',
      avatar:
        'https://media.istockphoto.com/photos/young-black-beauty-with-afro-hairstyle-picture-id459368695?k=6&m=459368695&s=612x612&w=0&h=gWmkCckwvXrwv4IFTd8Km0CRRI3H4HGL6B-1g9sMTTU=',
      time: '2:00am',
    },
    {
      name: 'Michael Jordan',
      comment: 'Can anyone hear me?',
      avatar:
        'https://i.pinimg.com/474x/f5/a2/ba/f5a2ba129ca38b5a2555ba95769031b0.jpg',
      time: '10:00am',
    },
    {
      name: 'Wale Kosoko',
      comment: 'This is nice. Lets do it again.',
      avatar:
        'https://media.istockphoto.com/photos/young-black-beauty-with-afro-hairstyle-picture-id459368695?k=6&m=459368695&s=612x612&w=0&h=gWmkCckwvXrwv4IFTd8Km0CRRI3H4HGL6B-1g9sMTTU=',
      time: '2:00pm',
    },
    {
      name: 'Davies White',
      comment: 'Where are you?',
      avatar:
        'https://media.istockphoto.com/photos/young-black-beauty-with-afro-hairstyle-picture-id459368695?k=6&m=459368695&s=612x612&w=0&h=gWmkCckwvXrwv4IFTd8Km0CRRI3H4HGL6B-1g9sMTTU=',
      time: '2:00am',
    },
    {
      name: 'Michael Jordan',
      comment: 'Can anyone hear me?',
      avatar:
        'https://media.istockphoto.com/photos/young-black-beauty-with-afro-hairstyle-picture-id459368695?k=6&m=459368695&s=612x612&w=0&h=gWmkCckwvXrwv4IFTd8Km0CRRI3H4HGL6B-1g9sMTTU=',
      time: '10:00am',
    },
    {
      name: 'Wale Kosoko',
      comment: 'This is nice. Lets do it again.',
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBaTuvNFKe1RN0sxgxVRdveqnVhefO6odoSw&usqp=CAU',
      time: '2:00pm',
    },
  ];
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
        <H1 size={Fonts.semiMedium}>Chat</H1>
      </Container>
      <Container flex={1} paddingHorizontal={5}>
        <Card paddingHorizontal={3} marginTop={4}>
          <TextInputBox
            leftIcon="search"
            backgroundColor={Colors.appWhite}
            width={70}
            placeholder="Search for messages"
            height={5}
          />
        </Card>
        <Container marginTop={4}>
          <FlatList
            data={data}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  onPress={() => props.navigation.navigate('NewChat')}
                  key={index}
                  style={{marginBottom: index + 1 === data.length ? 20 : 0}}>
                  <Card>
                    <Avatar url={item.avatar} />
                    <Space width="5%" />
                    <Container widthPercent="50%" verticalAlignment="center">
                      <H1 size={Fonts.small} numberOfLines={1}>
                        {item.name}
                      </H1>
                      <P numberOfLines={1}>{item.comment}</P>
                    </Container>
                    <Space width="10%" />
                    <P>{item.time}</P>
                  </Card>
                </TouchableOpacity>
              );
            }}
            showsVerticalScrollIndicator={false}
          />
        </Container>
      </Container>
    </Page>
  );
};
