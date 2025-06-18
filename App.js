<<<<<<< HEAD
import React, {useEffect, useState} from 'react';
=======
import React from 'react';
>>>>>>> 549d4bc3353444a650e663d07d2044e18c6beabd
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import DetailsScreen from './Screens/DetailsScreen';
import AnalyticsScreen from './Screens/info/AnalyticsScreen';
import SavingsScreen from './Screens/info/SavingsScreen';
import IncomeScreen from './Screens/info/IncomeScreen';
<<<<<<< HEAD
import SignUpScreen from './Screens/SignUpScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {onAuthStateChanged} from 'firebase/auth';
import {View, Text, Button} from 'react-native';
import {auth} from './auth/firebaseConfig';

const Stack = createStackNavigator();

const App = () => {
  const [user, setUser] = useState(null);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const subscriber = onAuthStateChanged(auth, user => {
      setUser(user);
      if (initializing) {
        setInitializing(false);
      }
    });

    // Unsubscribe from events when no longer needed
    return subscriber;
  }, []);

  if (initializing) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Loading app...</Text>
      </View>
    );
  }

=======

const Stack = createNativeStackNavigator();

const App = () => {
>>>>>>> 549d4bc3353444a650e663d07d2044e18c6beabd
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" options={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
<<<<<<< HEAD

        <>
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
          <Stack.Screen
            name="SignUp"
            component={SignUpScreen}
            options={{headerShown: false}}
          />
        </>
=======
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
>>>>>>> 549d4bc3353444a650e663d07d2044e18c6beabd
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
<<<<<<< HEAD

// export default function App() {
// const [user, setUser] = useState(null);
// const [initializing, setInitializing] = useState(true);

// useEffect(() => {
//   const subscriber = onAuthStateChanged(auth, user => {
//     setUser(user);
//     if (initializing) {
//       setInitializing(false);
//     }
//   });

//   // Unsubscribe from events when no longer needed
//   return subscriber;
// }, []);

// if (initializing) {
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>Loading app...</Text>
//     </View>
//   );
// }

// return (
//   <NavigationContainer>
//     <Stack.Navigator screenOptions={{headerShown: false}}>
//       {user ? (
//         <Stack.Screen name="Home" component={HomeScreen} />
//       ) : (
//         <>
//           <Stack.Screen name="Login" component={LoginScreen} />
//           <Stack.Screen name="Register" component={RegisterScreen} />
//         </>
//       )}
//     </Stack.Navigator>
//   </NavigationContainer>
// );
// }
=======
>>>>>>> 549d4bc3353444a650e663d07d2044e18c6beabd
