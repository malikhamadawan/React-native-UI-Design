import {appIcons, appImages} from '../exporter';

const ANDROID = Platform.OS === 'android';
const IOS = Platform.OS === 'ios';
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const web_client_id = '';
export const video_url = '';
const swipe_config = {
  velocityThreshold: 0.3,
  directionalOffsetThreshold: 80,
};
let image_options = {
  title: 'Select Avatar',
  customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};
const stripe_publishableKey = '';
const profile_uri = '';

const App_Name = 'Referral Pro';

const countryList = [
  {
    id: 0,
    title: 'Spanish',
    subTitle: 'Begginer',
    backgroundColor: 'orange',
    number: '43',
  },
  {
    id: 1,
    title: 'Italian',
    subTitle: 'Advanced',
    backgroundColor: 'skyblue',
    number: '30',
  },
  {
    id: 2,
    title: 'Pakistan',
    subTitle: 'Starter',
    backgroundColor: 'green',
    number: '25',
  },
  {
    id: 3,
    title: 'Pakistan',
    subTitle: 'Starter',
    backgroundColor: 'green',
    number: '20',
  },
  {
    id: 5,
    title: 'Italian',
    subTitle: 'Advanced',
    backgroundColor: 'red',
    number: '10',
  },
];
const item_List = [
  {
    id: 0,
    title: 'Basics',
    image: appImages.docImage,
    number: '4',
    tintColor: 'orange',
  },
  {
    id: 1,
    title: 'Occupations',
    image: appImages.medikit,
    number: '1',
    tintColor: 'red',
  },
  {
    id: 2,
    title: 'Conversation',
    image: appImages.message,
    number: '3',
    tintColor: 'blue',
  },
  {
    id: 3,
    title: 'Places',
    image: appImages.marker,
    number: '1',
    tintColor: 'green',
  },
  {
    id: 4,
    title: 'Family members',
    image: appImages.family,
    number: '3',
    tintColor: 'purple',
  },
  {
    id: 5,
    title: 'Foods',
    image: appImages.appleImage,
    number: '2',
    tintColor: '#0A475C',
  },
];
export {countryList, item_List};
