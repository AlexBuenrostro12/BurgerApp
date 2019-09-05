import React from 'react';
import Auxiliar from '../../hoc/Auxiliar';
import Burger from './Burger';
import BurgerControls from './BurgerControls';
import CustomModal from '../UI/Modal';
import OrderSummary from '../OrderSummary/OrderSummary';
import { BurgerBuilderContext } from '../../contexts/BurgerBuilderContext';

const BurgerBuilder = (props) => {
    return (
        <BurgerBuilderContext.Consumer>{(burgerBuilderContext) => {
            console.log('contex', burgerBuilderContext)
            const {
                theings,
                ings,
                dispatchIngredients,
                totalPrice,
                dispatchPrice,
                purchasable,
                dispatchPurchasable,
                isShowModal,
                dispatchIsShowModal
            } = burgerBuilderContext;

            dispatchPurchasable({ type: 'setPurchasable', func: { totalPrice: totalPrice } });

            return (
                <Auxiliar>
                    <Burger ingredients={ings} />
                    <BurgerControls
                        ingredients={ings}
                        ingredientsName={theings}
                        price={totalPrice}
                        dispatchIngredients={dispatchIngredients}
                        dispatchPrice={dispatchPrice}
                        purchasable={purchasable}
                        dispatchIsShowModal={dispatchIsShowModal}
                    />
                    {isShowModal &&
                        <CustomModal
                            isShowModal={isShowModal}
                            dispatchIsShowModal={dispatchIsShowModal}
                        >
                            <OrderSummary
                                dispatchIsShowModal={dispatchIsShowModal}
                                ingredients={ings}
                                totalPrice={totalPrice}
                                navigation={props.navigation}
                            />
                        </CustomModal>}
                </Auxiliar>
            )
        }}
        </BurgerBuilderContext.Consumer>
    );
};

export default BurgerBuilder;