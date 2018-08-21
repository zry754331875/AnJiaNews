import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View,Image } from 'react-native';
import MineHeader from "./MineHeader";

class Mine extends PureComponent {
     
    render() {
        return (
            <View>
                <MineHeader></MineHeader>
            </View>
        );
    }
}

export default Mine;