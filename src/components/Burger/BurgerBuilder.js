import React, {useState} from 'react';
import Auxiliar from '../../hoc/Auxiliar';
import Burger from './Burger';
import BurgerControls from './BurgerControls';
import CustomModal from '../UI/Modal';
import OrderSummary from '../OrderSummary/OrderSummary';

const BurgerBuilder = () => {
    const INGREDIENT_PRICES = {
        meat: 5,
        cheese: 3,
        salad: 2,
        bacon: 4
    };

    //Use states
    const [ingredients, setIngredients] = useState({
            meat: 0,
            cheese: 0,
            salad: 0,
            bacon: 0
        }
    );

    const [totalPrice, setTotalPrice] = useState(15);
    const [purchasable, setPurchasable] = useState(false);
    const [isShowModal, setIsShowModal] = useState(false);
    //Use states

    const ing = [];
    for(let key in ingredients) {
        ing.push({ ingredient: key });
    }

    const changeIngredientValueHandler = (key, action) => {
        const ing = {...ingredients};
        for(let index in ing) {
            if (key === index) {
                if (action === 'add') ing[index] = ing[index] + 1;
                else ing[index] = ing[index] - 1 !== -1 ? ing[index] - 1 : 0;
            }
        }
        setIngredients(ing);
        caculteTotalHandler(key, action)
    };

    const caculteTotalHandler = (key, action) => {
        let newTotal = totalPrice;
        if (action === 'add') newTotal = newTotal + INGREDIENT_PRICES[key];
        else 
            if (ingredients[key] !== 0)
                newTotal = newTotal - INGREDIENT_PRICES[key] < 0 ? 0 : newTotal - INGREDIENT_PRICES[key];
        
        setTotalPrice(newTotal);
        setPurchasable(newTotal > 0 ? true : false);
    };

    const showModalHandler = () => setIsShowModal(!isShowModal);


    return (
        <Auxiliar>
            <Burger ingredients={ingredients} /> 
            <BurgerControls
                ingredients={ing}
                price={totalPrice}
                changeIngredientValueHandler={changeIngredientValueHandler}
                purchasable={purchasable}
                showModalHandler={showModalHandler}
            />
            {isShowModal && 
                <CustomModal 
                    isShowModal={isShowModal} 
                    showModalHandler={showModalHandler}
                >
                    <OrderSummary 
                        showModalHandler={showModalHandler}
                        ingredients={ingredients}
                        totalPrice={totalPrice}
                    />
                </CustomModal>}
        </Auxiliar>
    );
};

export default BurgerBuilder;