import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import DetailsScreen from './Screens/DetailsScreen';
import AnalyticsScreen from './Screens/info/AnalyticsScreen';
import SavingsScreen from './Screens/info/SavingsScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Analytics" component={AnalyticsScreen} />
        <Stack.Screen name="Savings" component={SavingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
