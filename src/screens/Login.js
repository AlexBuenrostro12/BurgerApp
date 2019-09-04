import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Login = (props) => {
    console.log('login: ',  props);
    const { navigation } = props;
    const goToBurger = () => navigation.navigate('Burger');
    const goToContactData = () => navigation.navigate('ContactData');
    const goToOrders = () => navigation.navigate('Orders');

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Login</Text>
            <Button
                onPress={goToBurger}
                title="Go to Burger screen"
                color="#1E5599"
            />
            <Button
                onPress={goToContactData}
                title="Go to ContactData screen"
                color="green"
            />
            <Button
                onPress={goToOrders}
                title="Go to Orders screen"
                color="purple"
            />
        </View>
    );
}

Login.navigationOptions = {
    header: null
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});