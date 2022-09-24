import {StyleSheet} from 'react-native';
import {colors, HP, WP, size} from '../../shared/exporter';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headerContainer: {
    width: WP('100'),
    // backgroundColor: 'red',
    flexDirection: 'row',
  },
  headerLeftContainer: {
    width: WP('36'),
    // backgroundColor: 'green',
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentContainer: {
    // backgroundColor: 'red',
    padding: WP('5'),
    flexDirection: 'row',
  },
  avatarContainer: {
    width: WP('40'),
    // backgroundColor: 'green',
    paddingHorizontal: WP('4'),
    paddingVertical: WP('1'),
    alignSelf: 'baseline',
  },
  TextContainer: {
    width: WP('10'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'baseline',
    paddingVertical: WP('1'),
  },
  titleContainer: {
    paddingHorizontal: WP('5'),
  },
  marthaTextStyle: {
    fontSize: 20,
    color: colors.b1,
  },
  unitedTextStyle: {
    width: 100,
    fontSize: 16,
    color: 'gray',
    textAlign: 'left',
  },
  welcomeText: {
    color: colors.b1,
    fontSize: size.xxxtitle,
    fontFamily: 'Roboto-Regular',
    fontWeight: 'bold',
  },
  spacer: {
    width: WP('48'),
    // backgroundColor: 'blue',
  },
  spacer2: {
    height: HP('6'),
    width: WP('100'),
    // backgroundColor: 'red',
  },
  iconStyle: {
    transform: [{rotateY: '180deg'}],
    paddingHorizontal: WP('5'),
  },
  markerStyle: {
    marginRight: WP('1'),
  },

  avatar: {
    height: WP('15'),
    width: WP('15'),
    borderRadius: WP('15'),
  },
  imageStyle: {
    height: WP('5'),
    width: WP('8'),
    margin: WP('2'),
    borderRadius: WP('1'),
    //   marginTop: WP('2.5'),
  },

  textStyle: {
    fontSize: 18,
    color: colors.b1,
  },
});
export {styles};
