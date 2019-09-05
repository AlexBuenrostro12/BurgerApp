import React, { createContext, useReducer } from 'react';
import { burgerBuilderReducer } from '../reducers/BurgerBuilderReducer';

//This export and create the context of this component
export const BurgerBuilderContext = createContext();

const BurgerBuilderContextProvider = (props) => {

    //Use reducers

    // Ingredients
    const [ings, dispatchIngredients] = useReducer(burgerBuilderReducer, {
        bacon: 0,
        cheese: 0,
        meat: 0,
        salad: 0,
    });

    //Total price
    const [totalPrice, dispatchPrice] = useReducer(burgerBuilderReducer, 15);
    //purchasable
    const [purchasable, dispatchPurchasable] = useReducer(burgerBuilderReducer, false);
    // isShowModal
    const [isShowModal, dispatchIsShowModal] = useReducer(burgerBuilderReducer, false)

    //Use reducers


    // Name of ingredients
    const theings = [];
    for (let key in ings) {
        theings.push({
            ingredient: key
        });
    }
    return (
        <BurgerBuilderContext.Provider
            value={{
                theings,
                ings,
                dispatchIngredients,
                totalPrice,
                dispatchPrice,
                purchasable,
                dispatchPurchasable,
                isShowModal,
                dispatchIsShowModal
            }}
        >
            {props.children}
        </BurgerBuilderContext.Provider>
    );
};

export default BurgerBuilderContextProvider;