

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

  Alert,
  Button,
  Stylesheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './../styles.js';
import {auth} from '../auth/firebaseConfig.js';
import {signInWithEmailAndPassword} from 'firebase/auth';
import DetailsScreen from './DetailsScreen.js';

const HomeScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

const handleLogin = async () => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert('Success', 'Logged in successfully!');
      // Navigate to a dashboard or home screen after successful login
      navigation.navigate('Details'); // Assuming you have a 'Home' screen
    } catch (error) {
      let errorMessage = 'An unknown error occurred.';
      if (error.code) {
        switch (error.code) {
          case 'auth/invalid-email':
            errorMessage = 'That email address is invalid!';
            break;
          case 'auth/user-disabled':
            errorMessage = 'This user has been disabled.';
            break;
          case 'auth/user-not-found':
          case 'auth/wrong-password':
            errorMessage = 'Invalid email or password.';
            break;
          default:
            errorMessage = `Login failed: ${error.message}`;
        }
      }
      Alert.alert('Login Error', errorMessage);
      console.error('Login Error:', error);
    } finally {
      setLoading(false);
    }
  };
  const handleSocialLogin =(props)=>{
  console.log('${props} Pressed');
  }


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

                placeholder="email"
                placeholderTextColor="#999"
                value={email}
                onChangeText={setEmail}

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

            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>

              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>

            {/* Divider */}
            <View style={styles.dividerContainer}>
              <View style={styles.dividerLine} />

              <Text style={styles.dividerText}>
                Don't have account?
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                  <Text style={styles.appName}>Sign up</Text>
                </TouchableOpacity>{' '}
              </Text>

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
