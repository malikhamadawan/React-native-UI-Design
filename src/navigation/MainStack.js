import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Dashboard} from '../screen/Dashboard/Dashboard';
import {CurseScreen} from '../screen/CurseScreen/CurseScreen';

const Stack = createNativeStackNavigator();

function MainStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Curse" component={CurseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStack;
