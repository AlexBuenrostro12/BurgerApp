import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Spinner from '../components/UI/Spinner';

const ALL_CUSTOMERS_QUERY = gql`
    query ALL_CUSTOMERS_QUERY {
        customers {
            name,
            address
        }
    }
`;

const Orders = (props) => {
    const { navigation } = props;
    const goToLogin = () => navigation.navigate('Login');
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Orders</Text>
            <Query query={ALL_CUSTOMERS_QUERY}>
                {({data, loading, error}) => {
                    if (loading) return <Spinner />
                    if (error) return <Text>Error: {error}</Text>
                    console.log('res: ', data.customers);
                    return data.customers.map((cst, index) => (
                        <View key={cst.name + index}>
                            <Text>name: {cst.name}</Text>
                            <Text>addres: {cst.address}</Text>
                        </View>
                    ))
                }}
            </Query>
            <Button
                onPress={goToLogin}
                title="Go to Login screen"
                color="grey"
            />
        </View>
    );
}

Orders.navigationOptions = {
    header: null
};

export default Orders;

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