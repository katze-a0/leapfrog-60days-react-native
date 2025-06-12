import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import DetailsScreen from './Screens/DetailsScreen';
import AnalyticsScreen from './Screens/info/AnalyticsScreen';
import SavingsScreen from './Screens/info/SavingsScreen';
import IncomeScreen from './Screens/info/IncomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" options={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Analytics"
          component={AnalyticsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Savings"
          component={SavingsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Income"
          component={IncomeScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
