import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';

const BurgerControls = (props) => (
    <View style={styles.buttonsContainer}>
        <Text style={styles.price}>Price: {props.price}</Text>
        {props.ingredients.map(i => (
            <View key={i.ingredient} style={styles.buttonContent}>
                <TouchableOpacity onPress={() => props.changeIngredientValueHandler(i.ingredient, 'subtract')}><Text style={[styles.textButtons, styles.textTitle]}>Less</Text></TouchableOpacity>
                <Text style={styles.textButtons}>{i.ingredient.toUpperCase()}</Text>
                <TouchableOpacity onPress={() => props.changeIngredientValueHandler(i.ingredient, 'add')}><Text style={[styles.textButtons, styles.textTitle]}>More</Text></TouchableOpacity>
            </View>
        ))}
        <TouchableOpacity 
            disabled={!props.purchasable} 
            onPress={() => props.showModalHandler()}
            style={[styles.purchaseButton, { shadowOpacity: !props.purchasable ? 0 : 0.5 }]}
        >
            <Text style={styles.price}>Order now</Text>
        </TouchableOpacity>
    </View>
);


export default BurgerControls;

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    buttonsContainer: {
        flex: 1,
        width: width * .80,
        justifyContent: 'space-between',
        backgroundColor: '#e27b36',
        marginBottom: 5,
    },
    buttonContent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textTitle: {
        color: 'white',
        borderColor: '#c15711',
        borderWidth: 1,
        marginLeft: 5,
        marginRight: 5,
        padding: 3,
    },
    textButtons: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: 'white',
    },
    purchaseButton: {
        flex: 1,
        width: width * .40,
        backgroundColor: 'green',
        alignSelf: 'center',
        justifyContent: 'center',
        marginBottom: 5,
        borderRadius: 5,
    }
});