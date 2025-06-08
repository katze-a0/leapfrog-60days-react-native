// Boxescss.js
import {StyleSheet} from 'react-native';

const boxescss = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    padding: 10, // Added padding for better spacing
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  boxes: {
    width: 120,
    height: 120,
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    backgroundColor: '#7d65db',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10, // Add vertical spacing between boxes
  },
  boxText: {
    color: '#ffffff', // White text on purple background
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default boxescss;
