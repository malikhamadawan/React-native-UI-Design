import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {Header, ItemsCard} from '../../components';
import {appImages, countryList, itemList} from '../../shared/exporter';
import {styles} from './styles';
import {Icon} from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CurseScreen = () => {
  const renderItem = ({item, index}) => {
    return (
      <ItemsCard
        title={item.title}
        tintColor={item.tintColor}
        image={item.image}
        number={item.number}
      />
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Header title={'Curse'} leftIcon={true} rightIcon={true} />
        <View style={styles.contentContainer2}>
          <Text style={styles.spanishText}>Spanish</Text>
          <TouchableOpacity style={styles.btnContainer}>
            <Text style={styles.textContainer}>Begginer</Text>
            <Icon
              type="MaterialIcons"
              name="keyboard-arrow-down"
              color={'orange'}
              size={20}
            />
          </TouchableOpacity>

          <View style={styles.IconContainer}>
            <MaterialCommunityIcons
              name="cards-diamond"
              size={25}
              color={'red'}
            />
            <MaterialCommunityIcons
              name="cards-diamond"
              size={25}
              color={'red'}
            />
            <Text style={styles.mileText}>2 Milesones</Text>
          </View>
          <View style={styles.progressBar}>
            <Text style={styles.text}>
              43
              <Text style={styles.percentText}>%</Text>
            </Text>
            <Text style={styles.compText}>Completed</Text>
          </View>
        </View>
      </View>
      <FlatList
        numColumns={2}
        data={itemList}
        key={(item, index) => item + index.toString()}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};
export {CurseScreen};
