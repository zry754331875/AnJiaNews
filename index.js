import { AppRegistry } from 'react-native';
import App from './App';
import './Constant';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
YellowBox.ignoreWarnings(['Method `jumpToIndex` is deprecated', 'Module RCTImageLoader']);

AppRegistry.registerComponent('AnJiaNews', () => App);
