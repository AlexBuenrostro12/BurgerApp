import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Login = (props) => {
    console.log('login: ',  props);
    const { navigation } = props;
    const goToHome = () => navigation.navigate('Home');
    const goToOrder = () => navigation.navigate('Order');

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Login</Text>
            <Button
                onPress={goToHome}
                title="Go to Home screen"
                color="#1E5599"
            />
             <Button
                onPress={goToOrder}
                title="Go to Order screen"
                color="green"
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