import React from 'react';
import Auxiliar from '../../hoc/Auxiliar';
import Burger from './Burger';
import BurgerControls from './BurgerControls';
import CustomModal from '../UI/Modal';
import OrderSummary from '../OrderSummary/OrderSummary';
import {BurgerBuilderContext} from '../../contexts/BurgerBuilderContext';

const BurgerBuilder = () => {
    return (
        <BurgerBuilderContext.Consumer>{(burgerBuilderContext) => {
            console.log('contex', burgerBuilderContext)
            const {
                theings,
                ings,
                dispatchBurger,
                totalPrice,
                dispatchPrice,
                purchasable,
                dispatchPurchasable  
                // ingredients,
                // ing,
                // totalPrice,
                // changeIngredientValueHandler,
                // purchasable,
                // showModalHandler,
                // isShowModal
             } = burgerBuilderContext;
             dispatchPurchasable({type: 'setPurchasable', func: { totalPrice: totalPrice }});
            return (
                <Auxiliar>
                    <Burger ingredients={ings} /> 
                    <BurgerControls
                        ingredients={theings}
                        price={totalPrice}
                        dispatchBurger={dispatchBurger}
                        dispatchPrice={dispatchPrice}
                        purchasable={purchasable}
                        showModalHandler={true ? false : showModalHandler}
                        />
                    {true ? false : isShowModal && 
                        <CustomModal 
                        isShowModal={true ? false : isShowModal} 
                        showModalHandler={true ? null : showModalHandler}
                        >
                            <OrderSummary 
                                showModalHandler={true ? null : showModalHandler}
                                ingredients={ings}
                                totalPrice={totalPrice}
                                />
                        </CustomModal>}
                </Auxiliar>
            )
        }} 
        </BurgerBuilderContext.Consumer>
    );
};

export default BurgerBuilder;