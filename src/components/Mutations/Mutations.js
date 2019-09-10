import gql from 'graphql-tag';

export const CREATE_INGREDIENTS_MUTATION = gql`
     mutation CREATE_INGREDIENTS_MUTATION(
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