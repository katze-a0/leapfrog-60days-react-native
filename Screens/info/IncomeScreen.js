import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import incomecss from '../../styles/info/Incomecss';
import HorizontalLine from '../../styles/Horizontalline';
import Icon from 'react-native-vector-icons/Ionicons';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';
// import DatePickerField from '../custom_calendar';

const IncomeScreen = () => {
  const navigation = useNavigation();
  const [income, setIncome] = useState('');

  const [amount, setAmount] = useState('');

  const [date, setDate] = useState('');
  const onPressDoSomething = function () {
    if (!amount || !income) {
      Alert.alert('Please fill the form');
    } else
      Alert.alert(
        'Income Added', // Title
        'Your current entry is added to list', // Message
        [
          // Buttons:
          {
            text: 'OK',
            onPress: () => console.log('--> ok'),
            style: 'ok',
          },
          +{
            text: 'Cancel',
            onPress: () => console.log('--> cancel'),
            style: 'cancel',
          },
        ],
      );
  };
  const handleMenuPress = () => {
    console.log('Hamburger Menu Pressed');
  };

  return (
    <SafeAreaView style={incomecss.container}>
      {/* <StatusBar
        hidden={true}
        barStyle="dark-content"
        backgroundColor="#ffffff"
      /> */}

      <View style={incomecss.customHeader}>
        <View style={incomecss.headerLeft}>
          <Icon
            name="chevron-back"
            size={28}
            color="#666"
            onPress={() => {
              navigation.navigate('Details');
            }}>
            {/* <Text style={{fontSize: 17, color: '#999', marginTop: 40}}>
              Details
            </Text> */}
          </Icon>
        </View>
        <View style={incomecss.headerCenter}>
          <Text>Income</Text>
        </View>
        <TouchableOpacity
          style={incomecss.StatusIconSection}
          onPress={handleMenuPress}>
          <Icon name="menu" size={25} color="#333" />
        </TouchableOpacity>
      </View>

      <ScrollView style={{backgroundColor: '#ffffff'}}>
        <View style={incomecss.container}>
          <View style={incomecss.headerSection}>
            <Text style={incomecss.welcomeTitle}>Income Dashboard</Text>
          </View>
          -{/* <HorizontalLine /> */}
          <Text style={incomecss.subtitle}>
            Add your monthly income details {'\n'}
            on <Text style={incomecss.appName}>Expense Tracker</Text>
          </Text>
          {/* form section for adding income*/}
          <View style={incomecss.formSection}>
            <View style={incomecss.inputContainer}>
              <TextInput
                style={incomecss.input}
                marginTop={40}
                placeholder="Income  title"
                placeholderTextColor="#999"
                value={income}
                onChangeText={setIncome}
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>

            {/* Password Input */}
            <View style={incomecss.inputContainer}>
              <TextInput
                style={[incomecss.input, incomecss.amount]}
                placeholder="Amount"
                placeholderTextColor="#999"
                value={amount}
                onChangeText={setAmount}
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>
            {/* Date of income */}
            <View style={incomecss.inputContainer}>
              <TextInput
                style={[incomecss.input, incomecss.amount]}
                placeholder="Enter date"
                placeholderTextColor="#999"
                value={date}
                onChangeText={setDate}
                autoCapitalize="none"
                autoCorrect={false}
              />
              <TouchableOpacity
                style={incomecss.calendarIcon}
                onPress={() => setShowPassword(!showPassword)}>
                <Icon name={'calendar-outline'} size={20} color="#666" />
              </TouchableOpacity>
            </View>

            {/* Login Button */}
            <TouchableOpacity
              style={incomecss.loginButton}
              onPress={onPressDoSomething}>
              <Text style={incomecss.loginButtonText}>Add income</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default IncomeScreen;
