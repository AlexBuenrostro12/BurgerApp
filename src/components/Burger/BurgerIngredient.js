import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

const BurgerIngredient = (props) => {
    let ingredient = null;

    switch (props.type) {
        case 'bread-bottom':
            ingredient = <View style={styles.BreadBottom} />;
            break;
        case 'bread-top':
            ingredient = <View style={styles.BreadTop} />;
            break;
        case 'meat':
            ingredient = <View style={styles.Meat} />;
            break;
        case 'cheese' :
            ingredient = <View style={styles.Cheese} />;
            break;
        case 'salad' :
            ingredient = <View style={styles.Salad} />;
            break;
        case 'bacon' :
            ingredient = <View style={styles.Bacon} />;
            break;
        default:
            break;
    }

    return ingredient;
};

export default BurgerIngredient;

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    BreadBottom: {
        height: height * .07,
        width: width * .90,
        backgroundColor: '#e27b36',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        margin: 2,
    },
    BreadTop: {
        height: height * .09,
        width: width * .90,
        backgroundColor: '#e27b36',
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        margin: 2,
        position: 'relative',
    },
    Meat: {
        height: height * .05,
        width: width * .90,
        backgroundColor: '#702e05',
        borderRadius: 15,
        margin: 2,
    },
    Cheese: {
        height: height * .025,
        width: width * .95,
        backgroundColor: '#f4d004',
        borderRadius: 20,
        margin: 2,
    },
    Salad: {
        height: height * .025,
        width: width * .93,
        backgroundColor: '#228c1d',
        borderRadius: 20,
        margin: 2,
    },
    Bacon: {
        height: height * .015,
        width: width * .90,
        backgroundColor: '#bf3813',
        borderRadius: 1,
        margin: 2,
    }
});