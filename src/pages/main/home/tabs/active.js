import React from 'react';
import {Container} from '../../../../components/bi-react-library/src';
import {P} from '../../../../helpers/elements';
import {Colors} from '../../../../helpers/constants';
import {FlatList} from 'react-native-gesture-handler';
import {ItemCard} from '../../../../helpers/components';

export const Active = () => {
  return (
    <Container backgroundColor={Colors.appWhite}>
      <FlatList
        data={[...'1234556456']}
        renderItem={({item, index}) => (
          <ItemCard index={index} is_active_tab={true} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};
