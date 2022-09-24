import {StyleSheet} from 'react-native';
import {colors, HP, size, WP} from '../../shared/exporter';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  btnContainer: {
    height: HP('4'),
    width: WP('27'),
    backgroundColor: colors.white,
    borderRadius: WP('10'),
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: WP('4'),
    flexDirection: 'row',
    alignSelf: 'baseline',
  },
  contentContainer: {
    height: WP('85'),
    backgroundColor: 'orange',
    borderBottomLeftRadius: WP('40'),
    borderBottomRightRadius: WP('40'),
  },
  contentContainer2: {
    padding: WP('5'),
    marginVertical: WP('10'),
    marginHorizontal: WP('10'),
    alignSelf: 'baseline',
  },
  textContainer: {
    fontSize: size.medium,
    color: 'orange',
  },
  IconContainer: {
    flexDirection: 'row',
    paddingVertical: WP('2'),
    alignSelf: 'baseline',
    alignItems: 'center',
  },
  mileText: {
    fontSize: size.tiny,
    color: colors.white,
  },
  spanishText: {
    fontSize: size.xxxtitle,
    fontWeight: 'bold',
    color: colors.white,
  },
  progressBar: {
    height: 80,
    width: 80,
    borderWidth: 2,
    borderRadius: 80,
    borderColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: WP('58'),
    top: -130,
    alignSelf: 'flex-end',
  },
  text: {
    fontSize: size.h1,
    color: colors.white,
    // fontWeight: 'bold',
  },
  percentText: {
    fontSize: size.small,
    color: colors.white,
    textAlign: 'center',
  },
  compText: {
    fontSize: size.xxtiny,
    color: colors.white,
  },
});
export {styles};
