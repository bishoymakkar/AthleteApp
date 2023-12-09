import React, { useState } from 'react';
import { StyleSheet, Text, View,Dimensions } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import LinearGradient from 'react-native-linear-gradient';
import { PrimaryGradientColor } from '../../../config/appConfig';
import colors from '../../styleguide/colors';

const { width } = Dimensions.get("screen");

const DropdownComponent = ({
    data,
    placeholder,
  }) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <LinearGradient
    colors={value? PrimaryGradientColor:[colors.greyish, colors.greyish]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    style={styles.linearGradient}
  >
    <View style={styles.innerContainer}>

      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? placeholder : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />
        </View>
      </LinearGradient>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderRightWidth: 0.1,
    borderLeftWidth: 0.1,
    borderRadius: 50,
    borderBottomColor: colors.greyish,
    borderRightColor: 'white',
    borderLeftColor: 'white',
  },
  dropdown: {
    height: 50,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
    margin:12,
    color: colors.greyish,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: colors.violet,
    margin:12,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  linearGradient: {
    width: width*0.7,
    height: 50,
    borderRadius: 50, // <-- Outer Border Radius
  },
  innerContainer: {
    flex: 1,
    marginBottom: 3, // <-- Border Width
    borderRadius: 50, // <-- Inner Border Radius
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});