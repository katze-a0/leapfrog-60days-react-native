// screens/DetailsScreen.js
import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import detailscss from '../styles/Detailscss';
import Profilecss from '../styles/Profilecss';
import {Image} from 'react-native';
import dashboardcss from '../styles/Dashboardcss';
import Dashboard from './Dashboard';
const DetailsScreen = () => {
  return (
    <ScrollView>
      <View style={detailscss.container}>
        <View style={detailscss.headerSection}>
          <Text style={detailscss.welcomeTitle}>Tracker</Text>
          <Text style={detailscss.welcomeTitle}></Text>
          <Image
            source={require('../UserData/user_avatar.png')}
            style={Profilecss.avatarImage}
          />
        </View>
      </View>
      <Dashboard />
    </ScrollView>
  );
};

export default DetailsScreen;

// ../UserData/user_avatar.png
