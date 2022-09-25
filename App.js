import React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/pages/auth/login';
import Splash from './src/pages/auth/splash';
import Onboarding from './src/pages/auth/onboarding';
import {StoreProvider, useStoreState} from 'easy-peasy';
import {AppStore} from './src/helpers/store';
import {RouteContext} from './src/helpers/route_context';
import Reset from './src/pages/auth/reset';
import Verify from './src/pages/auth/verify';
import ChangePwd from './src/pages/auth/change_pwd';
import Availability from './src/pages/available/availability';
import HealthCheck from './src/pages/available/health';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Home} from './src/pages/main/home/home';
import {Chats} from './src/pages/main/chats/chats';
import {Wallet} from './src/pages/main/wallets/wallets';
import {BottomTabMenu } from './src/helpers/menus';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {ViewOrder} from './src/pages/main/view_order';
import {ShoppingList} from './src/pages/main/shopping_list/shopping_list';
import {DrawerMenu} from './src/helpers/menus'
import {Profile} from './src/pages/main/profile/profile';
import { EditProfile } from './src/pages/main/profile/edit_details';
import { Legal } from './src/pages/main/legal';
import { Support } from './src/pages/main/support';
import { Referrals } from './src/pages/main/referrals/referrals';
import {ReferralDetails} from './src/pages/main/referrals/referral_details';
import {NewChat} from './src/pages/main/chats/new_chat';
import {Earnings} from './src/pages/main/wallets/earnings';
import { OrderHistory } from './src/pages/main/wallets/order_history';
import { OrderSummary } from './src/pages/main/wallets/order_summary';
import { CashOut } from './src/pages/main/wallets/cash_out';

const App = () => {
  const Stack = createStackNavigator();  
  const AuthStack = () => (
    <Stack.Navigator headerMode={null}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Reset" component={Reset} />
      <Stack.Screen name="Verify" component={Verify} />
      <Stack.Screen name="ChangePwd" component={ChangePwd} />
    </Stack.Navigator>
  );


  const BottomTab = createBottomTabNavigator();

  const BottomTabScreen = () => (
    <BottomTab.Navigator tabBar={props=><BottomTabMenu {...props} />}>
      <BottomTab.Screen name="Home" component={Home} />
      <BottomTab.Screen name="Chat" component={Chats} />
      <BottomTab.Screen name="Wallet" component={Wallet} />
    </BottomTab.Navigator>
  );

  const DrawerTab = createDrawerNavigator();
  const DrawerTabScreen = () => (
    <DrawerTab.Navigator drawerContent={(props)=><DrawerMenu {...props} />}>
      <Stack.Screen name="Home" component={BottomTabScreen}/>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Availability" component={Availability}/>
      <Stack.Screen name="Support" component={Support} />
      <Stack.Screen name="Legal" component={Legal} />
      <Stack.Screen name="Referrals" component={Referrals} />
    </DrawerTab.Navigator>
  )

  const Available = () => (
    <Stack.Navigator headerMode={null}>
      <Stack.Screen name="Availability" component={Availability}/>
      <Stack.Screen name="HealthCheck" component={HealthCheck} />
    </Stack.Navigator>
  )

  const Main = () => (
    <Stack.Navigator headerMode={null}>
      <Stack.Screen name="Home" component={DrawerTabScreen}/>
      <Stack.Screen name="ShoppingList" component={ShoppingList} />
      <Stack.Screen name="ViewOrder" component={ViewOrder}/>
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="ReferralDetails" component={ReferralDetails} />
      <Stack.Screen name="NewChat" component={NewChat} />
      <Stack.Screen name="Earnings" component={Earnings} />
      <Stack.Screen name="OrderHistory" component={OrderHistory} />
      <Stack.Screen name="OrderSummary" component={OrderSummary} />
      <Stack.Screen name="CashOut" component={CashOut} />
    </Stack.Navigator>
  )
  const [currentState, setCurrentState] = React.useState(React.useContext(RouteContext).initState);
  return(
    <StoreProvider store={AppStore}>
      <RouteContext.Provider value={{currentState,setCurrentState}}>
        <NavigationContainer>
          {
            currentState === "splash" ? (
              <Splash />
            ) : currentState === "onboarding"  ? (
              <Onboarding />
            )  : currentState === "login" ? (
              <AuthStack />
            ) : currentState === "available" ? (
              <Available />
            ) : (
              <Main />
            )
          }
        </NavigationContainer>
      </RouteContext.Provider>
    </StoreProvider>
  )
}

export default App;