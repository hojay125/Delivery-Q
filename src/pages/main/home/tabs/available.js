import React from 'react';
import {Container} from '../../../../components/bi-react-library/src';
import {P, Card, H1, Space, Button} from '../../../../helpers/elements';
import {Colors, Fonts} from '../../../../helpers/constants';

import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {ColumnCard, ItemCard} from '../../../../helpers/components';
export const Available = () => {
  return (
    <Container backgroundColor={Colors.appWhite} flex={1}>
      <FlatList
        data={[...'123456789']}
        renderItem={({item, index}) => <ItemCard index={index} />}
        refreshing={true}
        onRefresh={true}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};
