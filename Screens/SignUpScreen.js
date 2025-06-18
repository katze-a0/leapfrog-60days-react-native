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
  Animated,
  Alert,
  Button,
} from 'react-native';
import styles from '../styles/SignUpcss';
import Icon from 'react-native-vector-icons/Ionicons';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../auth/firebaseConfig';

const SignUpScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // const {register: registerUser} = useAuth();
 const [Loading, setLoading]=useState('');

  // const handleSocialLogin = provider => {
  //   console.log(`Login with ${provider}`);
  //   // Add your social login logic here
  // };
  const navigateToHomepage = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'Home'}],
    });
  };

  // const handleRegister = async () => {
  //   setIsLoading(true);
  //   // Simulate login process
  //   setTimeout(() => {
  //     setIsLoading(false);
  //     navigation.navigate('Details');
  //   }, 1500);
  // };
  // const handleRegister = async () => {
   
  //   if (!username || !password || !email) {
  //     Alert.alert('Error', 'Please fill in all fields.', [
  //       {text: 'OK', onPress: () => console.log('OK Pressed')},
  //     ]);
  //     return;
  //   }
  //   setIsLoading(true);
    
  // };


    const handleRegister = async () => {
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password,username);
      Alert.alert('Success', 'User registered successfully!');
      // Navigate to Login or a dashboard after successful registration
      navigation.navigate('Home');
    } catch (error) {
      let errorMessage = 'An unknown error occurred.';
      if (error.code) {
        switch (error.code) {
          case 'auth/email-already-in-use':
            errorMessage = 'That email address is already in use!';
            break;
          case 'auth/invalid-email':
            errorMessage = 'That email address is invalid!';
            break;
          case 'auth/operation-not-allowed':
            errorMessage = 'Email/password accounts are not enabled. Enable them in Firebase Console.';
            break;
          case 'auth/weak-password':
            errorMessage = 'Password should be at least 6 characters.';
            break;
          default:
            errorMessage = `Registration failed: ${error.message}`;
        }
      }
      Alert.alert('Registration Error', errorMessage);
      console.error('Registration Error:', error);
    } finally {
      setLoading(false);
    }
  };


  // const getSocialButtonStyle = provider => {
  //   switch (provider) {
  //     case 'Google':
  //       return [styles.socialButton, styles.googleButton];
  //     case 'Apple':
  //       return [styles.socialButton, styles.appleButton];
  //     case 'Facebook':
  //       return [styles.socialButton, styles.facebookButton];
  //     default:
  //       return styles.socialButton;
  //   }
  // };

  // const getSocialIconColor = provider => {
  //   switch (provider) {
  //     case 'Google':
  //       return '#4285f4';
  //     case 'Apple':
  //       return '#ffffff';
  //     case 'Facebook':
  //       return '#ffffff';
  //     default:
  //       return '#666';
  //   }
  // };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}>
          <View style={styles.headerSection}>
            <Text style={styles.welcomeTitle}>Let's get started! </Text>
            <Text style={styles.subtitle}>
              Create an account to track all your expenses with
              <Text style={styles.appName}>Expense Tracker</Text>.{'\n'}
            </Text>
          </View>

          <View style={styles.formSection}>
            {/* Username Input */}
            <View style={styles.inputContainer}>
              <TextInput
                style={[
                  styles.input,
                  focusedInput === 'username' && styles.inputFocused,
                ]}
                placeholder="Enter your username"
                placeholderTextColor="#9ca3af"
                value={username}
                onChangeText={setUsername}
                onFocus={() => setFocusedInput('username')}
                onBlur={() => setFocusedInput(null)}
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={[
                  styles.input,
                  focusedInput === 'email' && styles.inputFocused,
                ]}
                placeholder="Enter your email"
                placeholderTextColor="#9ca3af"
                value={email}
                onChangeText={setEmail}
                onFocus={() => setFocusedInput('email')}
                onBlur={() => setFocusedInput(null)}
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>

            {/* Password Input */}
            <View style={styles.inputContainer}>
              <TextInput
                style={[
                  styles.input,
                  styles.passwordInput,
                  focusedInput === 'password' && styles.inputFocused,
                ]}
                placeholder="Enter your Password"
                placeholderTextColor="#9ca3af"
                value={password}
                onChangeText={setPassword}
                onFocus={() => setFocusedInput('password')}
                onBlur={() => setFocusedInput(null)}
                secureTextEntry={!showPassword}
                autoCapitalize="none"
                autoCorrect={false}
              />
              <TouchableOpacity
                style={styles.eyeIcon}
                onPress={() => setShowPassword(!showPassword)}
                activeOpacity={0.7}>
                <Icon
                  name={showPassword ? 'eye-off' : 'eye'}
                  size={20}
                  color="#6b7280"
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={[
                styles.loginButton,
                isLoading && styles.loginButtonLoading,
              ]}
              onPress={navigateToHomepage && handleRegister}
              activeOpacity={0.8}
              disabled={isLoading}>
              <Text style={styles.loginButtonText}>
                {isLoading ? 'Creating...' : 'Create Account'}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUpScreen;
