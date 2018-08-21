import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
<<<<<<< HEAD
import { View,Image } from 'react-native';
import MineHeader from "./MineHeader";
=======
>>>>>>> e05380c9cf6718db2ddc3c52315b304c2d206e45

class Mine extends PureComponent {
    
    _renderItem = (item,index)=>{
        
        return (
            <Text key={index} style={styles.sectionItemStyle}>{item} </Text>
        )
    }
    
    render() {
        
        return (
<<<<<<< HEAD
            <View>
                <MineHeader></MineHeader>
            </View>
=======
>>>>>>> e05380c9cf6718db2ddc3c52315b304c2d206e45
        );
    }
}

const styles = StyleSheet.create({
    // container:{
    //     alignItems:'flex-start',
    //     paddingTop:23,
    // },
    headerView:{
        height:100,
        backgroundColor:'#41BFFC',
        alignContent:'center',
        alignItems:'center'
    },
    headerImg:{
        width:40,
        height:40,
        // borderRadius:15,
    },
    sectionItemStyle:{
        height: 40, 
        textAlignVertical: 'auto', 
        backgroundColor: "#ffffff", 
        color: '#5C5C5C', 
        fontSize: 20
    }

});

export default Mine;