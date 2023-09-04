import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import { reactotronRedux } from 'reactotron-redux';
//import sagaPlugin from 'reactotron-redux-saga';

const reactotron = Reactotron.setAsyncStorageHandler!(AsyncStorage)
  .configure()
  .useReactNative()
  .connect();

export default reactotron;
