import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import savingscss from '../../styles/info/Savingscss';

const SavingsScreen = () => {
  return (
    <ScrollView>
      <View style={savingscss.container}>
        <View style={savingscss.headerSection}>
          <Text style={savingscss.welcomeTitle}>Savings</Text>
        </View>
        {/* Add your analytics content here */}
        <Text style={savingscss.contentText}>
          This is the Savings Screen.
        </Text>
      </View>
    </ScrollView>
  );
};

export default SavingsScreen;
