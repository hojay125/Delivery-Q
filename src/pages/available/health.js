import React, {useState, useContext} from 'react';
import {Text, StatusBar, View, StyleSheet, Linking} from 'react-native';
import {H1, Page, Space, P, Scroll, Button} from '../../helpers/elements';
import {Container} from '../../components/bi-react-library/src';
import {Colors} from '../../helpers/constants';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Fonts} from '../../helpers/constants';
import Feather from 'react-native-vector-icons/Feather';
import {ColumnCard} from '../../helpers/components';
import RadioGroup, {Radio} from 'react-native-radio-input';
import {RouteContext} from '../../helpers/route_context';

const HealthCheck = (props) => {
  const getChecked = (value) => {
    // value = our checked value
    console.log(value);
  };
  const {setCurrentState} = React.useContext(RouteContext);
  return (
    <Page backgroundColor={Colors.appWhite} barIconColor="dark">
      <Space height="10%" />
      <Container direction="row" paddingHorizontal={5}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Container verticalAlignment="center" marginTop={0.5}>
            <Feather
              name="chevron-left"
              size={Fonts.medium}
              color={Colors.primary}
            />
          </Container>
        </TouchableOpacity>
        <Space width="20%" />
        <H1 textAlign="center" size={Fonts.semiMedium}>
          Health Check
        </H1>
      </Container>
      <Container flex={1}>
        <Scroll>
          <Container
            horizontalAlignment="center"
            marginTop={4}
            marginBottom={5}>
            <Container widthPercent="70%">
              <P>
                Answer the following questions to help DQ protect you and our
                customers.{' '}
              </P>
            </Container>
          </Container>
          <Container paddingHorizontal={8}>
            <ColumnCard>
              <P textAlign="center">
                Do you have any of the following symptoms?
              </P>
              <Container direction="row" marginTop={3}>
                {['Fever', 'Cough', 'Shortness of breath'].map(
                  (item, index) => (
                    <Container
                      backgroundColor={Colors.white}
                      borderRadius={20}
                      paddingLeft={3}
                      paddingRight={3}
                      paddingTop={1.2}
                      paddingBottom={1.2}
                      key={index}
                      marginRight={5}>
                      <P size={Fonts.semiSmall}>{item}</P>
                    </Container>
                  ),
                )}
              </Container>
              <RadioGroup
                getChecked={getChecked}
                RadioGroupStyle={{
                  flexDirection: 'row',
                  marginTop: 20,
                  justifyContent: 'center',
                }}
                coreStyle={{fontSize: 12, color: Colors.primary}}>
                <Radio label={'Yes'} value={'yes'} />
                <Space width="10%" />
                <Radio label={'No'} value={'no'} />
              </RadioGroup>
            </ColumnCard>

            <ColumnCard>
              <P textAlign="center">
                Have you traveled out or come in contact with anyone who
                recently traveled out of the country?
              </P>
              <RadioGroup
                getChecked={getChecked}
                RadioGroupStyle={{
                  flexDirection: 'row',
                  marginTop: 20,
                  justifyContent: 'center',
                }}
                coreStyle={{fontSize: 12, color: Colors.primary}}>
                <Radio label={'Yes'} value={'yes'} />
                <Space width="10%" />
                <Radio label={'No'} value={'no'} />
              </RadioGroup>
            </ColumnCard>
          </Container>
          <Container horizontalAlignment="center" marginTop={4}>
            <Button text="Submit" onPress={() => setCurrentState('main')} />
          </Container>
        </Scroll>
      </Container>
    </Page>
  );
};

export default HealthCheck;
