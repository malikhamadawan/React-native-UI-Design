import React from 'react';
import {
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {appIcons, colorArray, colors, size, WP} from '../shared/exporter';
export const ChanllengeCard = () => {
  return (
    <View style={styles.bgContainer}>
      <TouchableOpacity style={styles.btnContainer}>
        <Text style={styles.textContainer}>Intermediate</Text>
      </TouchableOpacity>
      <Text style={styles.TodayText}>
        Today's {'\n'}chanllenge{'\n'}
        <Text style={styles.GermanText}>German meals</Text>
      </Text>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons name="cards-diamond" size={25} color={'red'} />
        <Text style={styles.earnText}>
          Take this lesson to{'\n'}earn a new milestone
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bgContainer: {
    padding: WP('3'),
    backgroundColor: colors.white,
    marginHorizontal: WP('4'),
    marginVertical: WP('5'),
    borderRadius: WP('4'),
    elevation: 10,
    shadowColor: colors.b1,
    shadowOpacity: {
      height: 2,
      width: 2,
    },
  },
  btnContainer: {
    width: WP('30'),
    backgroundColor: colors.dim_blue,
    borderRadius: WP('10'),
    alignItems: 'center',
    justifyContent: 'center',
    margin: WP('2'),
  },
  iconContainer: {
    paddingHorizontal: WP('2'),
    flexDirection: 'row',
  },
  textContainer: {
    fontSize: 15,
    color: colors.blue3,
  },
  TodayText: {
    fontSize: size.title,
    color: colors.b1,
    paddingVertical: WP('8'),
    paddingHorizontal: WP('3'),
  },
  GermanText: {
    color: colors.blue3,
    fontSize: size.medium,
    fontWeight: 'bold',
  },
  earnText: {
    color: colors.g1,
    fontSize: size.small,
  },
});
