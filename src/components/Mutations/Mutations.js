import gql from 'graphql-tag';

export const CREATE_CUSTOMER_MUTATION = gql`
     mutation CREATE_CUSTOMER_MUTATION(
        $name: String!
        $address: String!
        $email: String!
     ) {
         createCustomer(
             name: $name
             address: $address
             email: $email
         ) {
            id
         }
     }
 `;

 export const CREATE_INGREDIENTS_MUTATION = gql`
    mutation CREATE_INGREDIENTS_MUTATION(
        $meat: Int!
        $cheese: Int!
        $salad: Int!
        $bacon: Int!
    ) {
        createIngredients(
            meat: $meat
            cheese: $cheese
            salad: $salad
            bacon: $bacon
        ) {
            id
        }
    }
 `;

 export const CREATE_ORDER_MUTATION = gql`
    mutation CREATE_ORDER_MUTATION(
        $ingredients: String!
        $price: Int!
        $customer: String!
    ) {
        createOrder(
            ingredients: $ingredients
            price: $price
            customer: $customer
        ) {
            id
        }
    }
 `;