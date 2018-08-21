import React, { PureComponent } from 'react';
import { View,
    StyleSheet,
      FlatList,
  TouchableWithoutFeedback,
          Text,
          Image,
        Dimensions, } from 'react-native';

const API_CLIST = '/zhyl/Home/Index/clist';
const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;

export class MeetingList extends PureComponent {

  constructor(props) {
    super(props);
    
  }
  
  componentWillMount(){
    console.log('componentWillMount')
    const {cid} = this.props

    this.props._getMeetingList(this.props.pageIndex,this.props.typeIndex,cid)
  }
  

  render() {

    const {data,refreshing,cid} = this.props

    return (
      <FlatList style={{...this.props.style}} 
                data={data} 
                renderItem={item=>this._renderItem(item)}
                onRefresh={()=>this.props._getMeetingList(1,this.props.typeIndex,cid)}
                refreshing={refreshing}
                keyExtractor={(item,index)=>`${index}`}
                onEndReached={()=>this.props._getMeetingList(this.props.pageIndex,this.props.typeIndex,cid)}
                onEndReachedThreshold={0.1}
                ItemSeparatorComponent={()=><View style={styles.itemSpre}></View>}
                >
      </FlatList>
    )
  }

  _selectedItem = (item) =>{
    this.props.onPressItem(item)
  }

  //item = new
  _renderItem(item)
  {
    let news = item.item
    
    let title = news.news_title.replace('永联','安佳').replace('永钢','')

    return (<TouchableWithoutFeedback onPress={this._selectedItem.bind(this,item)}>
              <View style={styles.item}>
                <Image style={styles.itemImage} source={{uri:news.tpicsurl[0]}}></Image>
                <View style={styles.itemRight}>
                  <Text style={[{fontWeight: 'bold',width:ScreenWidth-100-8-8-8}]}>{title}</Text>
                  <View style={{flexDirection:'row',justifyContent: 'space-between',}}>
                    <Text style={{fontSize:12}}>{news.newssource}</Text>
                    <Text style={{fontSize:12}}>{news.readcount}</Text>
                    <Text style={{fontSize:12}}>{news.audit_time}</Text>
                  </View>
                </View>
              </View>
          </TouchableWithoutFeedback>)
  }
};

const styles = StyleSheet.create({
  item:{
    margin: 8,
    // backgroundColor: 'yellow',
    flexDirection: 'row',
  },
  itemImage:{
    width: 100,
    height: 80,
    marginRight: 8,
  },
  itemRight:{
    // backgroundColor: 'red',
    justifyContent: 'space-between',
  },
  itemSpre:{
    left: 10,
    right: 10,
    height: 0.3,
    backgroundColor: 'black',
    opacity: 0.5,
  }
})