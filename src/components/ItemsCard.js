import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {colors, size, WP} from '../shared/exporter';
import Slider from '@react-native-community/slider';
export const ItemsCard = ({tintColor, image, title, number}) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image
          style={[styles.imageStyle, {tintColor: tintColor}]}
          source={image}
        />
      </View>
      <Text style={styles.titleStyle}>{title}</Text>
      <Text style={styles.numberStyle}>
        {number}
        <Text style={styles.numberTextStyle}>/5</Text>
      </Text>
      <Slider
        style={styles.sliderContainer}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="orange"
        maximumTrackTintColor="gray"
        step={20}
        disabled={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: WP('42'),
    padding: WP('1'),
    backgroundColor: colors.white,
    borderRadius: WP('2'),
    elevation: 10,
    shadowColor: colors.b1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: WP('5'),
    marginVertical: WP('-30'),
  },
  contentContainer: {
    height: WP('15'),
    width: WP('15'),
    borderRadius: WP('15'),
    backgroundColor: colors.white,
    elevation: 10,
    shadowRadius: {
      height: 2,
      width: 2,
    },
    shadowColor: colors.b1,
    marginVertical: WP('3'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  sliderContainer: {
    width: 150,
    height: 30,
  },
  imageStyle: {
    height: 25,
    width: 20,
  },
  titleStyle: {
    fontSize: size.medium,
    color: colors.g1,
  },
  numberStyle: {
    fontSize: size.normal,
    color: colors.b1,
    textAlign: 'center',
  },
  numberTextStyle: {
    fontSize: size.xxtiny,
    color: colors.g10,
  },
});
