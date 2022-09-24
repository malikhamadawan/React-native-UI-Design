import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {View, Text} from 'react-native';
import {colors, size, WP} from '../shared/exporter';
export const CountryCard = ({
  backgroundColor,
  title,
  subTitle,
  onPress,
  number,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[style.container, {backgroundColor: backgroundColor}]}>
      <Text style={style.title}>
        {title}
        {'\n'}
        <Text style={style.subTitle}>{subTitle}</Text>
      </Text>
      <View style={style.progressBar}>
        <Text style={style.text}>{number}</Text>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  container: {
    padding: WP('5'),
    marginHorizontal: WP('3'),
    // marginVertical: WP('2'),
    borderRadius: 7,
  },
  title: {
    color: colors.white,
    fontSize: size.medium,
    fontWeight: 'bold',
  },
  subTitle: {
    color: colors.white,
    fontSize: size.normal,
  },
  round: {
    height: 45,
    width: 45,
    borderRadius: 45,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: WP('5'),
  },
  progressBar: {
    height: 45,
    flexDirection: 'row',
    width: 45,
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 45,
    borderColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: WP('15'),
  },
  text: {
    fontSize: size.normal,
    color: colors.white,
  },
});
