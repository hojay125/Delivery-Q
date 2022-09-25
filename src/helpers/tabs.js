import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TwoMenuTab,ThreeMenuTab } from './menus';
import { Available } from '../pages/main/home/tabs/available';
import { Active } from '../pages/main/home/tabs/active';
import {Shopping} from '../pages/main/shopping_list/tabs/shopping_list';
import {Purchased} from '../pages/main/shopping_list/tabs/purchased';
import {InReview} from '../pages/main/shopping_list/tabs/in_review';


const HomeTab = createMaterialTopTabNavigator();
export const HomeTabScreen = () => (
    <HomeTab.Navigator tabBar={(props)=><TwoMenuTab {...props}/>}>
        <HomeTab.Screen name="Available" component={Available}/>
        <HomeTab.Screen name="Active" component={Active}/>
    </HomeTab.Navigator>
)

const ShoppingTab= createMaterialTopTabNavigator();
export const ShoppingListTab = () => (
    <ShoppingTab.Navigator  tabBar={(props)=><ThreeMenuTab {...props} />}>
        <ShoppingTab.Screen name="Shopping_List" component={Shopping} />
        <ShoppingTab.Screen name="Purchased" component={Purchased} />
        <ShoppingTab.Screen name="In_Review" component={InReview} />
    </ShoppingTab.Navigator>
)