import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({onPress, children }) => {

    const { buttonStyle, textStyle } = styles;

 
    return (
        //For Click
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonPressStyle: {
        flex: 1, 
        alignSelf: 'stretch',
        backgroundColor: 'blue', 
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5  
    },
    buttonStyle: {
        flex: 1, 
        alignSelf: 'stretch',
//        backgroundColor: '#ff1', 
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5  
    },
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
};

export { Button };  