import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import BurgerBuilder from '../components/Burger/BurgerBuilder';

const Home = (props) => {
    console.log('home: ', props);
    const { navigation } = props;
    const goToLogin = () => navigation.navigate('Login');
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home</Text>
            <Button
                onPress={goToLogin}
                title="Go to Login screen"
                color="#2B3D54"
                accessibilityLabel="Learn more about this purple button"
            />
            <BurgerBuilder />
        </View>
    );
}

Home.navigationOptions = {
    header: null
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});