//Import libraries for making a component
import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';

//Make a component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <SafeAreaView> 
          <View style={viewStyle}>
                <Text style={textStyle}>{props.headerText}</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15, 
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.4,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 30
    }
};
//Make a component available to other parts of the app
export {  Header } ;