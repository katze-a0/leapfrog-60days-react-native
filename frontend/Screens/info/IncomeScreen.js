import React, {useState, Platform} from 'react';
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
import DateTimePicker from '@react-native-community/datetimepicker';
import incomecss from '../../styles/info/Incomecss';
import HorizontalLine from '../../styles/Horizontalline';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';

const IncomeScreen = () => {
  const navigation = useNavigation();
  const [income, setIncome] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onPressDoSomething = async function () {
    if (!amount || !income) {
      Alert.alert('Please fill the form');
    } else {
      try {
        const incomeData = {
          source: income.trim(),
          amount: parseFloat(amount),
          date: moment(date).format('YYYY-MM-DD'),
          createdAt: new Date().toISOString(),
        };

        console.log('Submitting income data:', incomeData);

        const response = await fetch('http://192.168.254.11:3000/api/income', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(incomeData),
          timeout: 10000,
        });

        if (response.ok) {
          Alert.alert('Income Added', 'Your current entry is added to list', [
            {
              text: 'OK',
              onPress: () => console.log('--> ok'),
              style: 'default',
            },
            {
              text: 'Cancel',
              onPress: () => console.log('--> cancel'),
              style: 'cancel',
            },
          ]);

          // Clear form after successful submission
          setIncome('');
          setAmount('');
          setDate(new Date());
        } else {
          Alert.alert('Error', 'Failed to add income. Please try again.');
        }
      } catch (error) {
        console.error('Error submitting income:', error);
        Alert.alert(
          'Error',
          'Failed to add income on Database. Please try again.',
        );
      }
    }
  };

  const handleMenuPress = () => {
    console.log('Hamburger Menu Pressed');
  };

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios'); // Keep open on iOS, close on Android
    setDate(currentDate);
  };

  const showDatePickerModal = () => {
    setShowDatePicker(true);
  };

  return (
    <SafeAreaView style={incomecss.container}>
      <View style={incomecss.customHeader}>
        <View style={incomecss.headerLeft}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Details');
            }}>
            <Icon name="chevron-back" size={28} color="#666" />
          </TouchableOpacity>
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
                placeholder="Income title"
                placeholderTextColor="#999"
                value={income}
                onChangeText={setIncome}
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>

            {/* Amount Input */}
            <View style={incomecss.inputContainer}>
              <TextInput
                style={[incomecss.input, incomecss.amount]}
                placeholder="Amount"
                placeholderTextColor="#999"
                value={amount}
                onChangeText={setAmount}
                keyboardType="numeric"
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>

            {/* Date Input */}
            <View style={incomecss.inputContainer}>
              <TouchableOpacity onPress={showDatePickerModal}>
                <TextInput
                  style={[incomecss.input, incomecss.amount]}
                  placeholder="Enter date"
                  placeholderTextColor="#999"
                  value={moment(date).format('YYYY-MM-DD')}
                  editable={false}
                  pointerEvents="none"
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={incomecss.calendarIcon}
                onPress={showDatePickerModal}>
                <Icon name={'calendar-outline'} size={20} color="#666" />
              </TouchableOpacity>
            </View>

            {/* Add Income Button */}
            <TouchableOpacity
              style={incomecss.loginButton}
              onPress={onPressDoSomething}>
              <Text style={incomecss.loginButtonText}>Add income</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Community DateTimePicker */}
      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          is24Hour={true}
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={onDateChange}
          maximumDate={new Date()}
        />
      )}
    </SafeAreaView>
  );
};

export default IncomeScreen;
