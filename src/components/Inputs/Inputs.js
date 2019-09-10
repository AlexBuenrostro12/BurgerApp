import React from 'react';
import { View, TextInput, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';

const Inputs = (props) => {
    let input = null;
    switch (props.type) {
        case 'textInput':
            input = (
                <TextInput 
                    style={styles.TextInput}
                    onChangeText={props.changeInputHandler}
                    value={props.value}
                    placeholder={props.holder}
                />
            );
            break;
        case 'success': 
            input = (
                <TouchableOpacity
                    style={styles.success}
                    onPress={props.order}
                >
                    <Text style={styles.text}>{props.name}</Text>
                </TouchableOpacity>
            );
            break;
        case 'cancel': 
            input = (
                <TouchableOpacity
                    style={styles.cancel}
                    onPress={props.goBack}
                >
                    <Text style={styles.text}>{props.name}</Text>
                </TouchableOpacity>
            );
            break;
        default:
            input = null;
            break;
    }

    return <View style={styles.conteinerInput}>{input}</View>
};

export default Inputs;

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    conteinerInput: {
        marginTop: 5, 
        marginBottom: 5,
    },
    TextInput: {
        height: width * .12,
        width: width * .80,
        borderColor: 'gray',
        borderWidth: 1
    },
    success: {
        flex: 1,
        flexGrow: 1,
        backgroundColor: '#76A518',
        alignItems: 'center',
        borderRadius: 5,
        margin: 5,
        padding: 6
    },
    cancel: {
        flex: 1,
        flexGrow: 1,
        backgroundColor: '#BA120F',
        alignItems: 'center',
        borderRadius: 5,
        margin: 5,
        padding: 6
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    },
});