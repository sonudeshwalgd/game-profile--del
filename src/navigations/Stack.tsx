import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Main from '../screen/unauthenticated/Main';

export type RootStackParamList = {
  Main: undefined;
};
const Stack = createStackNavigator<RootStackParamList>();

export function StackContainerUnauthorized() {
  return (
    <>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Main">
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
    </>
  );
}
