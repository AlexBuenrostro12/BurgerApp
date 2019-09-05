export const burgerBuilderReducer = (state, action) => {
    switch (action.type) {
        case 'changeIngredientValueHandler':
            const ing = { ...state };
            for (let index in ing) {
                if (action.func.key === index) {
                    if (action.func.action === 'add') ing[index] = ing[index] + 1;
                    else ing[index] = ing[index] - 1 !== -1 ? ing[index] - 1 : 0;
                }
            }
            return ing;
        case 'calculatePrice':
            const INGREDIENT_PRICES = {
                meat: 5,
                cheese: 3,
                salad: 2,
                bacon: 4
            };

            let newTotal = state;
            if (action.func.action === 'add') newTotal = newTotal + INGREDIENT_PRICES[action.func.key];
            else {
                console.log('ingredient: ', action.func.ingredients[action.func.key]);
                if (action.func.ingredients[action.func.key] !== 0)
                    newTotal = newTotal - INGREDIENT_PRICES[action.func.key] < 15 ? 15 : newTotal - INGREDIENT_PRICES[action.func.key];
            }
            return newTotal;
        case 'setPurchasable':
            return action.func.totalPrice > 15 ? true : false;
        case 'showModalHandler':
            return !state;


        default:
            return state;

    }
}