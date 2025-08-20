import React from 'react';
import {View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  hr: {
    borderBottomColor: '#7d65db', // Changed to a purple color
    borderBottomWidth: 3,
    marginHorizontal: 50,
    marginVertical: -9, // Adjusted for better spacing
  },
});

const HorizontalLine = () => {
  return <View style={styles.hr} />;
};

export default HorizontalLine;
