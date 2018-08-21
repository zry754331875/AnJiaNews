import React,{Component} from 'react';
import { View,
    Dimensions,
        WebView,
    StyleSheet,
    TextInput,
    ScrollView,
    Button, } from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;

export class MeetingContent extends Component {

    static navigationOptions = ({navigation})=>{
        return {
            title:'新闻内容',
        // headerBackTitle:null,
        }
    }

    constructor(props) {
        super(props);
        
    }
    render() {

        let news = this.props.navigation.state.params.item

        console.log(news);

        return (
            <KeyboardAwareScrollView style={{flex: 1}}>
                <View style={styles.webView}>
                <WebView ref={webView=>this.webView=webView} source={{uri:news.jump_url}} scalesPageToFit={true}>
                </WebView>
                </View>
                <View style={styles.inputView}>
                <TextInput style={{height:40,width:ScreenWidth-50}}>
                </TextInput>
                <Button style={{width:50,height:40}} title={'发送'} onPress={this.handlePress}></Button>
                </View>
            </KeyboardAwareScrollView>
        );
    }

    handlePress=()=>{

    }
}

const styles = StyleSheet.create({
    webView:{
        height:ScreenHeight-40-64,
    },
    inputView:{
        height:40,
        backgroundColor:'white',
        flexDirection: 'row',
    },
});

