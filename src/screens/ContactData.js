import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Spinner from '../components/UI/Spinner';

const CREATE_INGREDIENTS = gql`
    mutation CREATE_INGREDIENTS {
        customers {
            name,
            address
        }
    }
`;
//Make mutation

const ContactData = (props) => {
    const { navigation } = props;
    const goToLogin = () => navigation.navigate('Login');
    return (
        <View style={styles.container}>
            <Text style={styles.text}>ContactData</Text>
            
            <Button
                onPress={goToLogin}
                title="Go to Login screen"
                color="grey"
            />
        </View>
    );
}

ContactData.navigationOptions = {
    header: null
};

export default ContactData;

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