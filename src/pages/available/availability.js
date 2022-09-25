import React, {useState, useContext} from 'react';
import {Text, StatusBar, View, StyleSheet, Linking} from 'react-native';
import {
  H1,
  Page,
  Space,
  P,
  H2,
  TextInputBox,
  Button,
  Scroll,
} from '../../helpers/elements';
import {Container} from '../../components/bi-react-library/src';
import {Colors} from '../../helpers/constants';
import {Images} from '../../helpers/images';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Fonts} from '../../helpers/constants';
import {
  AvailabilityList,
  SetAvailability,
  PickAvailableDay,
  AvailabilityItemList,
} from '../../helpers/components';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {RouteContext} from '../../helpers/route_context';

const Availability = (props) => {
  const {currentState} = useContext(RouteContext);
  const [page, setPage] = useState('availables');
  const [week, setWeek] = useState(false);
  return (
    <Page backgroundColor={Colors.appWhite} barIconColor="dark">
      <Space height="10%" />
      <Container direction="row" paddingHorizontal={5}>
        <TouchableOpacity
          onPress={() => {
            page === 'select_week'
              ? setPage('availables')
              : page === 'pick_available_days'
              ? setPage('select_week')
              : page === 'available_items'
              ? setPage('pick_available_days')
              : currentState === 'main'
              ? props.navigation.openDrawer()
              : null;
          }}>
          <Container verticalAlignment="center" marginTop={0.5}>
            {currentState === 'main' ? (
              <FontAwesome
                name="th-large"
                size={Fonts.semiMedium}
                color={Colors.primary}
              />
            ) : (
              <Feather
                name="chevron-left"
                size={Fonts.medium}
                color={Colors.primary}
              />
            )}
          </Container>
        </TouchableOpacity>
        <Space width="20%" />
        <H1 textAlign="center" size={Fonts.semiMedium}>
          Set availability & location
        </H1>
      </Container>
      <Container flex={1}>
        <Scroll>
          {page === 'availables' ? (
            <AvailabilityList setPage={setPage} />
          ) : page === 'select_week' ? (
            <SetAvailability setPage={setPage} setWeek={setWeek} />
          ) : page === 'available_items' ? (
            <AvailabilityItemList setPage={setPage} />
          ) : (
            <PickAvailableDay setPage={setPage} />
          )}
        </Scroll>
      </Container>
    </Page>
  );
};

export default Availability;
