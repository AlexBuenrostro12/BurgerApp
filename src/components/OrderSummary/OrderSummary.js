import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const OrderSummary = (props) => {
    const ingredients = [];
    for (let key in props.ingredients) {
        ingredients.push({
            ing: key,
            amount: props.ingredients[key]
        });
    }
    console.log('ingredients: ', ingredients);

    return (
        <View style={styles.viewModal}>
            <Text style={styles.title}>Your order</Text>
            {ingredients.map(ig => (
                <Text key={ig.ing} style={styles.body}>{ig.ing}: {ig.amount}</Text>
            ))}
            <Text style={styles.body}>Price: {props.totalPrice}</Text>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity
                    style={styles.cancel}
                    onPress={() => props.showModalHandler()}
                >
                    <Text style={styles.body}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.order}
                    onPress={() => alert('ORDER!!!!')}
                >
                    <Text style={styles.body}>Order</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default OrderSummary;

const styles = StyleSheet.create({
    viewModal: {
        flex: 1,
        padding: 25,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#DE7516',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 15
    },
    body: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white'
    },
    buttonsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'flex-end'
    },
    order: {
        flex: 1,
        flexGrow: 1,
        backgroundColor: '#76A518',
        alignItems: 'center',
        borderRadius: 5,
        margin: 5,
        padding: 3
    },
    cancel: {
        flex: 1,
        flexGrow: 1,
        backgroundColor: '#BA120F',
        alignItems: 'center',
        borderRadius: 5,
        margin: 5,
        padding: 3
    }
});