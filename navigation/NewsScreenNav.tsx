import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import NewsScreen from '../screens/newsScreen/NewsScreen';
import { DrawerNavigationProp } from '@react-navigation/drawer/lib/typescript/src/types';
import NewsDetails from '../screens/newsDetails/NewsDetails';

const Stack = createStackNavigator();

const NewsScreenNav = (props: DrawerNavigationProp<{}>) => (
  <Stack.Navigator>
    <Stack.Screen
      name="News"
      component={() => <NewsScreen {...props} />}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Details"
      component={NewsDetails}
    />
  </Stack.Navigator>
)

export default NewsScreenNav