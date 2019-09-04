import React, { createContext, useState, useReducer } from 'react';
import { burgerBuilderReducer } from '../reducers/BurgerBuilderReducer';

//This export and create the context of this component
export const BurgerBuilderContext = createContext();

const BurgerBuilderContextProvider = (props) => {
    //Use states
    const [isShowModal, setIsShowModal] = useState(false);
    //Use states

    //Use reducers
    const [ings, dispatchBurger] = useReducer(burgerBuilderReducer, {
        meat: 0,
        cheese: 0,
        salad: 0,
        bacon: 0
    });

    const [totalPrice, dispatchPrice] = useReducer(burgerBuilderReducer, 15);
    const [purchasable, dispatchPurchasable] = useReducer(burgerBuilderReducer, false);
    //Use reducers


    const showModalHandler = () => setIsShowModal(!isShowModal);
    const theings = [];
    for (let key in ings) {
        theings.push({
            ingredient: key
        });
    }
    return (
        <BurgerBuilderContext.Provider 
            value={{ 
                // ingredients, 
                // ing, 
                // totalPrice, 
                // changeIngredientValueHandler, 
                // purchasable, 
                // showModalHandler, 
                // isShowModal
                theings,
                ings,
                dispatchBurger,
                totalPrice,
                dispatchPrice,
                purchasable,
                dispatchPurchasable,
            }}
        >
            {props.children}
        </BurgerBuilderContext.Provider>
    );
};

export default BurgerBuilderContextProvider;