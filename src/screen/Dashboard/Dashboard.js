import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import {
  appIcons,
  appImages,
  colors,
  countryList,
  family,
  HP,
  size,
  WP,
} from '../../shared/exporter';
import {styles} from './styles';
import {Icon} from 'react-native-elements';
import {ChanllengeCard, CountryCard} from '../../components';

const Dashboard = ({navigation}) => {
  const renderItem = ({item, index}) => {
    return (
      <CountryCard
        title={item.title}
        subTitle={item.subTitle}
        backgroundColor={item.backgroundColor}
        number={item.number}
        onPress={() => {
          navigation.navigate('Curse');
        }}
      />
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Icon
          type="MaterialIcons"
          name="segment"
          size={35}
          color={colors.g1}
          style={styles.iconStyle}
        />

        <View style={styles.spacer} />

        <View style={styles.headerLeftContainer}>
          <Image source={appIcons.flag} style={styles.imageStyle} />
          <Text style={styles.textStyle}>English</Text>
          <Icon
            type="MaterialIcons"
            name="keyboard-arrow-down"
            color={colors.g1}
            size={20}
          />
        </View>
      </View>

      <View style={styles.spacer2} />

      <View style={styles.contentContainer}>
        <Image source={appIcons.flag} style={styles.avatar} />
        <View style={styles.avatarContainer}>
          <Text style={styles.marthaTextStyle}>Martha Stewart</Text>
          <View style={styles.TextContainer}>
            <Icon
              type="Entypo"
              name="location-pin"
              color={colors.g1}
              size={15}
              style={styles.markerStyle}
            />
            <Text style={styles.unitedTextStyle}>United Kingdom</Text>
          </View>
        </View>
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.welcomeText}>Welcome back!</Text>
      </View>

      <ChanllengeCard />
      <View
        style={{
          paddingVertical: WP('10'),
          paddingHorizontal: WP('7'),
        }}>
        <Text
          style={{
            color: colors.b1,
            fontSize: size.xlarge,
            fontWeight: 'bold',
          }}>
          Your courses
        </Text>
      </View>
      <ScrollView horizontal={true}>
        <FlatList
          numColumns={5}
          data={countryList}
          key={(item, index) => item + index.toString()}
          renderItem={renderItem}
        />
      </ScrollView>
    </View>
  );
};

export {Dashboard};
