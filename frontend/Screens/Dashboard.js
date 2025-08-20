import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import dashboardcss from '../styles/Dashboardcss';
import Boxes from './Boxes'; // Assuming Boxes.js is in the same directory
import boxescss from '../styles/Boxescss'; // Importing the styles for Boxes

const Dashboard = () => {
  return (
    <ScrollView>
      <View style={dashboardcss.container}>
        <Boxes />
      </View>
    </ScrollView>
  );
};
export default Dashboard;
