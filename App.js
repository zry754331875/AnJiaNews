/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View,Text,TouchableHighlight,StyleSheet } from 'react-native';
import {
  StackNavigator,TabNavigator
} from 'react-navigation';
import MainMeeting from './Meeting/Controller/MeetingC';
import MeetingListContainers from "./Meeting/ReduX_src/Containers/MeetingListContainers";
import MeetingContentContainers from './Meeting/ReduX_src/Containers/MeetingContentContainers';
import { Provider } from "react-redux";
import { createStore,applyMiddleware } from "redux";
import rootReducers from "./Meeting/ReduX_src/reducers/index";
import thunk from "redux-thunk";
import createSagaMiddleware from 'redux-saga';
import Mine from "./Meeting/Mine/container";
const sagaMiddleware = createSagaMiddleware()

const Tab = TabNavigator({
  mainSreen:{
    screen:MainMeeting,
    navigationOptions:{
      title:'首页'
    }
  },
  Mine:{
    screen:Mine,
    navigationOptions:{
      title:'我的'
    }
  }
})

const StackN = StackNavigator(
  {
    tab: {screen: Tab,},
    meetingContent:{screen: MeetingContentContainers},
    meetingList:{screen: MeetingListContainers},
  }
)

export const Store = createStore(rootReducers,applyMiddleware(sagaMiddleware,thunk))

export default class App extends Component {

  componentDidMount(){
    
  }

  render() {
    return (
      <Provider store={Store}>
        <StackN></StackN>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
