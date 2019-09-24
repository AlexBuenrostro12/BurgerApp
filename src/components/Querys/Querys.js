import gql from 'graphql-tag';

export const ALL_ORDEDRS_QUERY = gql`
    query ALL_ORDEDRS_QUERY {
        orders {
            id
            customer
            ingredients
            price
        }
    }
`;

export const GET_SINGLE_CUSTOMER = gql`
    # check
    query GET_SINGLE_CUSTOMER($id: String!) {
        customers(where: { id: $id }) {
            id 
            name
            address
            email
        }
    }
`;