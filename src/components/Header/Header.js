import React from 'react';
import {View, TouchableOpacity, Text, Image, StyleSheet} from 'react-native';
import {appIcons, colors, family, HP, size, WP} from '../../shared/exporter';
import Entypo from 'react-native-vector-icons/Entypo';
export const Header = ({
  title,
  titleIcon,
  leftIcon,
  rightIcon,
  onPress,
  titleIconStyle,
  containerStyle,
  contentContainerStyle,
  onPressBack,
  onPressMenu,
  rightIconStyle,
  leftIconStyle,
  titleStyle,
  ridhtIconButtonStyle,
}) => {
  return (
    <View
      style={[
        styles.container,
        {
          ...containerStyle,
        },
      ]}>
      {leftIcon && (
        <TouchableOpacity
          onPress={onPressBack}
          style={styles.leftIconButtonStyle}>
          <Image
            source={appIcons.backArrow}
            style={[styles.iconStyle, {...leftIconStyle}]}
          />
        </TouchableOpacity>
      )}
      {title && (
        <View
          style={[
            styles.txtContainer,
            {
              ...contentContainerStyle,
            },
          ]}>
          {titleIcon && (
            <Image
              source={titleIcon}
              style={[styles.titleIconStyle, titleIconStyle]}
            />
          )}
          <Text style={[styles.titleStyle, titleStyle]}>{title}</Text>
        </View>
      )}
      {rightIcon && (
        <TouchableOpacity onPress={onPressMenu}>
          <Entypo name="dots-three-vertical" color={colors.white} size={20} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: HP('1'),
  },
  iconStyle: {
    width: WP('5'),
    height: WP('5'),
    resizeMode: 'contain',
    alignSelf: 'flex-start',
    tintColor: colors.white,
  },
  titleStyle: {
    color: colors.white,
    fontSize: size.h5,
    fontFamily: family.Karla_Medium,
    textAlign: 'center',
  },
  txtContainer: {
    width: '85%',
    padding: 1,
    justifyContent: 'center',
  },
  rightIconButtonStyle: {
    padding: HP('1.5'),
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.g2,
  },
  titleIconStyle: {
    width: WP('8'),
    height: WP('8'),
    margin: HP('1'),
    resizeMode: 'contain',
  },
  leftIconButtonStyle: {
    padding: 1,
  },
});
