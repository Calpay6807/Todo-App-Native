import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import colors from '../themes/Colors';

export default function CostumeButton({onPress, textStyle, style, label}) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={() => onPress()}>
      <Text style={[styles.label, style]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    backgroundColor: colors.primary,
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
  },
  label: {
    fontSize: 15,
    color: 'white',
    fontWeight: '600',
    marginBottom: 5,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
});
