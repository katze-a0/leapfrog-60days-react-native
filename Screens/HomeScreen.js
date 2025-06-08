// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   SafeAreaView,
//   KeyboardAvoidingView,
//   Platform,
//   ScrollView,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import {styles} from './../styles.js';

// const HomeScreen = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);

//   const navigation = useNavigation();
//   const handleLogin = () => {
//     // <DetailScreen />;
//     // console.log('Login pressed', {username, password});
//     navigation.navigate('Details');
//   };

//   const handleSocialLogin = provider => {
//     console.log(`${provider} login pressed`);
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <KeyboardAvoidingView
//         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//         style={styles.container}>
//         <ScrollView contentContainerStyle={styles.scrollContainer}>
//           <View style={styles.headerSection}>
//             <Text style={styles.welcomeTitle}>Welcome back!</Text>
//             <Text style={styles.subtitle}>
//               Simplify your workflow {'\n'}
//               with <Text style={styles.appName}>Expense Tracker</Text>. Get
//               started for free.
//             </Text>
//           </View>

//           <View style={styles.formSection}>
//             <View style={styles.inputContainer}>
//               <TextInput
//                 style={styles.input}
//                 placeholder="Username"
//                 placeholderTextColor="#999"
//                 value={username}
//                 onChangeText={setUsername}
//                 autoCapitalize="none"
//                 autoCorrect={false}
//               />
//             </View>

//             {/* Password Input */}
//             <View style={styles.inputContainer}>
//               <TextInput
//                 style={[styles.input, styles.passwordInput]}
//                 placeholder="Password"
//                 placeholderTextColor="#999"
//                 value={password}
//                 onChangeText={setPassword}
//                 secureTextEntry={!showPassword}
//                 autoCapitalize="none"
//                 autoCorrect={false}
//               />
//               <TouchableOpacity
//                 style={styles.eyeIcon}
//                 onPress={() => setShowPassword(!showPassword)}>
//                 <Icon
//                   name={showPassword ? 'eye-off' : 'eye'}
//                   size={20}
//                   color="#666"
//                 />
//               </TouchableOpacity>
//             </View>

//             {/* Forgot Password */}
//             <TouchableOpacity style={styles.forgotPasswordContainer}>
//               <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
//             </TouchableOpacity>

//             {/* Login Button */}
//             <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
//               <Text style={styles.loginButtonText}>Login</Text>
//             </TouchableOpacity>

//             {/* Divider */}
//             <View style={styles.dividerContainer}>
//               <View style={styles.dividerLine} />
//               <Text style={styles.dividerText}>or continue with</Text>
//               <View style={styles.dividerLine} />
//             </View>

//             {/* Social Login Buttons */}
//             <View style={styles.socialButtonsContainer}>
//               <TouchableOpacity
//                 style={styles.socialButton}
//                 onPress={() => handleSocialLogin('Google')}>
//                 <Icon name="logo-google" size={24} color="white" />
//               </TouchableOpacity>

//               <TouchableOpacity
//                 style={styles.socialButton}
//                 onPress={() => handleSocialLogin('Apple')}>
//                 <Icon name="logo-apple" size={24} color="white" />
//               </TouchableOpacity>

//               <TouchableOpacity
//                 style={styles.socialButton}
//                 onPress={() => handleSocialLogin('Facebook')}>
//                 <Icon name="logo-facebook" size={24} color="white" />
//               </TouchableOpacity>
//             </View>
//           </View>
//         </ScrollView>
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// };

// export default HomeScreen;

// screens/HomeScreen.js
// import React from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
// } from 'react-native';
// import homecss from '../styles/homecss';

// const HomeScreen = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.welcomeText}>Welcome to Home Screen</Text>

//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => navigation.navigate('Details')}
//       >
//         <Text style={styles.buttonText}>Go to Details Screen</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f0f0f0',
//   },
//   welcomeText: {
//     fontSize: 20,
//     marginBottom: 30,
//     color: '#333',
//   },
//   button: {
//     backgroundColor: '#007bff',
//     paddingHorizontal: 30,
//     paddingVertical: 15,
//     borderRadius: 8,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default HomeScreen;

// screens/HomeScreen.js
// import React from 'react';
// import {View, Text, TouchableOpacity} from 'react-native';
// import homecss from '../styles/Homecss';

// const HomeScreen = ({navigation}) => {
//   return (
//     <View style={homecss.container}>
//       <Text style={homecss.welcomeText}>Welcome to Home Screen</Text>

//       <TouchableOpacity
//         style={homecss.button}
//         onPress={() => navigation.navigate('Details')}>
//         <Text style={homecss.buttonText}>Go to Details Screen</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default HomeScreen;

import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './../styles.js';

const HomeScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // const handleLogin = () => {
  //   // <DetailScreen />;
  //   // console.log('Login pressed', {username, password});
  //   navigation.navigate('Details');
  // };

  const handleSocialLogin = provider => {
    console.log(`${provider} login pressed`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.headerSection}>
            <Text style={styles.welcomeTitle}>Welcome back!</Text>
            <Text style={styles.subtitle}>
              Simplify your workflow {'\n'}
              with <Text style={styles.appName}>Expense Tracker</Text>. Get
              started for free.
            </Text>
          </View>

          <View style={styles.formSection}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Username"
                placeholderTextColor="#999"
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>

            {/* Password Input */}
            <View style={styles.inputContainer}>
              <TextInput
                style={[styles.input, styles.passwordInput]}
                placeholder="Password"
                placeholderTextColor="#999"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                autoCapitalize="none"
                autoCorrect={false}
              />
              <TouchableOpacity
                style={styles.eyeIcon}
                onPress={() => setShowPassword(!showPassword)}>
                <Icon
                  name={showPassword ? 'eye-off' : 'eye'}
                  size={20}
                  color="#666"
                />
              </TouchableOpacity>
            </View>

            {/* Forgot Password */}
            <TouchableOpacity style={styles.forgotPasswordContainer}>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>

            {/* Login Button */}
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => navigation.navigate('Details')}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>

            {/* Divider */}
            <View style={styles.dividerContainer}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>or continue with</Text>
              <View style={styles.dividerLine} />
            </View>

            {/* Social Login Buttons */}
            <View style={styles.socialButtonsContainer}>
              <TouchableOpacity
                style={styles.socialButton}
                onPress={() => handleSocialLogin('Google')}>
                <Icon name="logo-google" size={24} color="white" />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.socialButton}
                onPress={() => handleSocialLogin('Apple')}>
                <Icon name="logo-apple" size={24} color="white" />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.socialButton}
                onPress={() => handleSocialLogin('Facebook')}>
                <Icon name="logo-facebook" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default HomeScreen;
