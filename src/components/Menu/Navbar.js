import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
const Navbar = () => {

    const [count, setCount] = useState(0);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setCount(count + 1)}>
                <Text style={styles.menu}>Menú</Text>
            </TouchableOpacity>
            <Text style={styles.menu}>{count}</Text>
        </View>
    );
}

export default Navbar;

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: width,
        height: width * .15,
        backgroundColor: '#EAAE0C',
        padding: 5
    },
    menu: {
        fontSize: 15,
        fontWeight: 'bold',
        marginRight: 5,
    }
});