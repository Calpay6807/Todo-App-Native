import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import formDate from '../utils/DateUtils';
import colors from '../themes/Colors';

export default function CotumeTextInput({
  label,
  imageSource,
  value,
  style,
  onPressIcon,
  onChangeText,
  isDate,
  ...rest
}) {
  return (
    <TouchableOpacity
      disabled={onPressIcon ? false : true}
      onPress={() => onPressIcon()}
      style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <Image source={imageSource} style={styles.image} />
        {!onPressIcon ? (
          <TextInput
            style={styles.textInput}
            {...rest}
            onChangeText={onChangeText}
            value={value}
          />
        ) : (
          <Text style={styles.date}>
            {value && formDate(value?.toString())}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {marginHorizontal: 20, marginBottom: 15},
  label: {
    fontSize: 15,
    color: colors.text.primary,
    fontWeight: '600',
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 15,
  },
  image: {
    width: 20,
    height: 20,
    marginRight: 10,
    tintColor: colors.text.primary,
  },
  textInput: {flex: 1, fontSize: 16, padding: 0},
  date: {fontSize: 10, color: 'black', fontWeight: '700'},
});
