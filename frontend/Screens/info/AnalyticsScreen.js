import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import analyticscss from '../../styles/info/Analyticscss';

const AnalyticsScreen = () => {
  return (
    <ScrollView style={{backgroundColor: '#ffffff'}}>
      <View style={analyticscss.container}>
        <View style={analyticscss.headerSection}>
          <Text style={analyticscss.welcomeTitle}>Analytics</Text>
        </View>
        {/* Add your analytics content here */}
        <Text style={analyticscss.contentText}>
          This is the Analytics Screen.
        </Text>
      </View>
    </ScrollView>
  );
};

export default AnalyticsScreen;
