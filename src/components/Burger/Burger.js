import React from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import BurgerIngredient from './BurgerIngredient';


const Burger = (props) => {
   let transformIngredients = Object.keys(props.ingredients)
    .map(ingKey => {
      return [...Array(props.ingredients[ingKey])].map((_, i) => {
        return <BurgerIngredient key={ingKey + i} type={ingKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el)
    }, []);


    if (transformIngredients.length === 0)
      transformIngredients =  <Text style={{ fontSize: 16, fontWeight: 'bold' }}>¡Empieza a agregar ingredientes!</Text>;
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.burgerContainer}>
        <BurgerIngredient type="bread-top" />
        {transformIngredients}
        <BurgerIngredient type="bread-bottom" />
      </View>
    </ScrollView>
  );
};

export default Burger;

const styles = StyleSheet.create({
  burgerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    overflow: 'scroll',
    marginBottom: 5
  }
});
