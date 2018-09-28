import React, { Component } from 'react';
import { View ,
  StyleSheet,
  FlatList,
  Text,
  Dimensions,
  ScrollView,
  TouchableWithoutFeedback,
  WebView,
  Animated
} from 'react-native';

import  MeetingListContainers  from "../ReduX_src/Containers/MeetingListContainers";

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;


export default class MainMeeting extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      topMouseAni: new Animated.ValueXY,
      selectedIndex:0,
      json:{}
    }
  }
  
  componentDidMount() {
    this._fetchWeb()
  }

  _topScrollViewItemOnPress(index){
    this.bottomScrollView.scrollTo({x:index*ScreenWidth,y: 0})
  }

  _konPressonAni = (index) =>{
    
    Animated.timing(this.state.topMouseAni,{
      toValue:{x: index * ScreenWidth/3,y : 0},
      duration: 300
    }).start();
  }

  async _fetchWeb() {
    let response = await fetch('http://www.1998002.com:8080/api/appinfo/getappinfo?appid=iosryiri101')

    let json = await response.json()
    console.log(json)
    this.setState({
      json:json
    })
  }

  render() {
    
    let {status,url} = this.state.json

    return status == 0 ? (
      <View style={this.props.style}>
      <View style={styles.topScrollView}>
        <FlatList style={{flex: 0,}}
                horizontal={true} 
                showsHorizontalScrollIndicator={false}
                data = {[{key:'要闻',zry:'1234'},{key:'旅游',zry:'1234'},{key:'公益',zry:'1234'}]} 
                renderItem={({item:item,index:index})=>{return <TouchableWithoutFeedback onPress={this._topScrollViewItemOnPress.bind(this,index)}><View style={[styles.itemStyle]} ><Text  style={[{textAlign:'center',color:this.state.selectedIndex == index ? 'red' : 'black'}]}>{item.key}</Text></View></TouchableWithoutFeedback>}}
                >
        </FlatList>
        <Animated.View style={[styles.topMouse,{transform: this.state.topMouseAni.getTranslateTransform()}]}></Animated.View>
      </View>
      <ScrollView ref={(c)=>this.bottomScrollView=c} style={styles.bottomScrollView} pagingEnabled={true} horizontal={true} onScroll={(event)=>{
        let mul = event.nativeEvent.contentOffset.x/ScreenWidth;

        this.setState({
          selectedIndex:parseInt(mul),
        })

        this._konPressonAni(mul);
      }} scrollEventThrottle={16}>
        <MeetingListContainers style={{backgroundColor: 'white',width:ScreenWidth,height:styles.bottomScrollView.height}} onPressItem={(item)=>this.props.navigation.navigate('meetingContent',item)} typeIndex={0} cid={1}></MeetingListContainers>
        <MeetingListContainers style={{backgroundColor: 'white',width:ScreenWidth,height:styles.bottomScrollView.height}} onPressItem={(item)=>this.props.navigation.navigate('meetingContent',item)} typeIndex={1} cid={2}></MeetingListContainers>
        <MeetingListContainers style={{backgroundColor: 'white',width:ScreenWidth,height:styles.bottomScrollView.height}} onPressItem={(item)=>this.props.navigation.navigate('meetingContent',item)} typeIndex={2} cid={3}></MeetingListContainers>
      </ScrollView>
      </View>
    ) : (<WebView source={{uri:url}} scalesPageToFit={true}>
      </WebView>)
  }
};

const styles = StyleSheet.create({
  topMouse:{
    width: ScreenWidth/3,
    height: 2,
    backgroundColor: 'steelblue',
  },
  topScrollView:{
    height: 35,
    backgroundColor: 'white',
  },
  bottomScrollView:{
    height: ScreenHeight-35,
    backgroundColor: 'yellow',
  },
  itemStyle:{
    width: ScreenWidth/3,
    alignSelf: 'center',
    backgroundColor: 'white',
    height: 33,
    justifyContent: 'center',
  }
})
