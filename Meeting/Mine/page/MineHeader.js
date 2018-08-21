import React, { PureComponent } from 'react';
import { View,Image } from 'react-native';

class MineHeader extends PureComponent {
    
    render() {
        return (
            <View>
                <Image source={require('../../place.png')}></Image>
            </View>
        );
    }
}

export default MineHeader;