import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import boxescss from '../styles/Boxescss';

const Boxes = () => {
  return (
    <View>
      <View style={boxescss.container}>
        <View style={boxescss.row}>
          {' '}
          //first row
          <TouchableOpacity>
            <View style={boxescss.boxes}>
              <Text style={boxescss.boxText}>Analytics </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={boxescss.boxes}>
              <Text style={boxescss.boxText}>Income</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={boxescss.row}>
        {' '}
        //second row
        <TouchableOpacity>
          <View style={boxescss.boxes}>
            <Text style={boxescss.boxText}>Expense</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={boxescss.boxes}>
            <Text style={boxescss.boxText}>Saving </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Boxes;
