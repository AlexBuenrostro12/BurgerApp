import React from 'react';
import { View, Text, StyleSheet, Button, Dimensions, ScrollView } from 'react-native';
import { Query } from 'react-apollo';
import Spinner from '../components/UI/Spinner';
import { ALL_ORDEDRS_QUERY, GET_SINGLE_CUSTOMER } from '../components/Querys/Querys';

const Orders = (props) => {
    const { navigation } = props;
    const goToLogin = () => navigation.navigate('Login');
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Orders</Text>
            <ScrollView style={{ flex: 1 }}>
                <Query query={ALL_ORDEDRS_QUERY}>
                    {({data, loading, error}) => {
                        if (loading) return <Spinner />
                        if (error) return <Text>Error: {error}</Text>
                        console.log('res: ', data.orders);
                        return data.orders.map((ord, index) => (
                            <View style={styles.orders} key={index}>
                                <Text>id: {ord.id}</Text>
                                <Text>customer: {ord.customer}</Text>
                                <Text>Ingredients: {ord.ingredients}</Text>
                                <Text>price: {ord.price}</Text>
                            </View>
                        ))
                    }}
                </Query>
            </ScrollView>
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

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    orders: {
        justifyContent: 'center',
        borderColor: 'grey',
        borderWidth: 2,
        width: width * .95,
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 5,
    }
});