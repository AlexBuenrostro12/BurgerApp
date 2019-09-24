import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Spinner from '../components/UI/Spinner';
import Inputs from '../components/Inputs/Inputs';
import { BurgerBuilderContext } from '../contexts/BurgerBuilderContext';
import Burger from '../components/Burger/Burger';
import KBAvoiding from '../components/KBAvoiding/KBAvoiding';
import {
    CREATE_CUSTOMER_MUTATION,
    CREATE_INGREDIENTS_MUTATION,
    CREATE_ORDER_MUTATION,
} from '../components/Mutations/Mutations';

const ContactData = (props) => {
    const { navigation } = props;
    const goToLogin = () => navigation.navigate('Login');
    const goToBurger = () => navigation.navigate('Burger');
    // useState
    const [customer, setCustomer] = useState({
        name: {
            type: 'textInput',
            holder: 'Name ...',
            value: ''
        },
        address: {
            type: 'textInput',
            holder: 'Address ...',
            value: ''
        },
        email: {
            type: 'textInput',
            holder: 'Email ...',
            value: ''
        },
    });

    const [orderVariables, setOrderVariables] = useState(null);
    const [loadingSpinner, setLoadingSpinner] = useState(false);
    // useState

    const customerElements = [];
    for (let key in customer) {
        customerElements.push({
            id: key,
            properties: customer[key]
        });
    }

    let customerVariables = {
        name: '',
        address: '',
        email: '',
    };
    for (let key in customer) {
        customerVariables[key] = customer[key].value;
    }

    changeInputHandler = (text, key) => {
        const newCustomerValue = { ...customer };
        const updatedFormElement = { ...newCustomerValue[key] };

        updatedFormElement.value = text;
        newCustomerValue[key] = updatedFormElement;

        setCustomer(newCustomerValue);

    };

    const makeOrderHandler = async (createCustomer, createIngredients, createOrder, totalPrice) => {
        const customer = await createCustomer();
        console.log('mutationCustomer: ', customer);
        const ingredients = await createIngredients();
        console.log('mutationIngredients: ', ingredients);
        if (customer && ingredients) {
            const customerID = customer.data.createCustomer.id;
            const ingredientsID = ingredients.data.createIngredients.id;
            const obj = {
                ingredients: ingredientsID,
                price: totalPrice,
                customer: customerID,
            };
            setOrderVariables(obj);
            const order = await createOrder();
            console.log('mutationOrder: ', order);
        }


    }


    return (
        <KBAvoiding>
            <BurgerBuilderContext.Consumer>{(burgerBuilderContext) => {
                const { ings, totalPrice } = burgerBuilderContext;
                console.log('ings: ', ings, 'price: ', totalPrice);
                console.log('customer: ', customer);
                console.log('variables: ', customerVariables);
                return (
                    <Mutation
                        mutation={CREATE_CUSTOMER_MUTATION}
                        variables={customerVariables}
                    >
                        {(createCustomer, { loading, error }) => (
                            <Mutation
                                mutation={CREATE_INGREDIENTS_MUTATION}
                                variables={ings}
                            >
                                {(createIngredients, { loading, error }) => (
                                    <Mutation
                                        mutation={CREATE_ORDER_MUTATION}
                                        variables={orderVariables}
                                    >
                                        {(createOrder, { loading, error }) => (
                                            <ScrollView>
                                                <View style={styles.container}>
                                                    <Text style={styles.text}>You order this</Text>
                                                    <Burger ingredients={ings} />
                                                    <Text style={styles.text}>Contact data</Text>
                                                    <View style={styles.customerForm}>
                                                        {customerElements.map(cst => (
                                                            <Inputs
                                                                key={cst.id}
                                                                type={cst.properties.type}
                                                                holder={cst.properties.holder}
                                                                value={cst.properties.value}
                                                                changeInputHandler={(text) => changeInputHandler(text, cst.id)}
                                                            />
                                                        ))
                                                        }
                                                    </View>
                                                    {!loading ? <View style={styles.buttonsContainer}>
                                                        <Inputs
                                                            type="cancel"
                                                            name="Back"
                                                            goBack={goToBurger}
                                                        />
                                                        <Inputs
                                                            type="success"
                                                            name="Order"
                                                            order={() => makeOrderHandler(createCustomer, createIngredients, createOrder, totalPrice)}
                                                        />
                                                    </View> : <View style={{ flex: 1, alignSelf: 'center' }}>
                                                            <Spinner />
                                                        </View>
                                                    }
                                                    <Button
                                                        onPress={goToLogin}
                                                        title="Go to Login screen"
                                                        color="grey"
                                                    />
                                                </View>
                                            </ScrollView>
                                        )}
                                    </Mutation>
                                )}
                            </Mutation>
                        )}
                    </Mutation>
                );
            }}
            </BurgerBuilderContext.Consumer>
        </KBAvoiding>
    );
}

ContactData.navigationOptions = {
    header: null
};

export default ContactData;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 3,
        marginBottom: 3,
    },
    customerForm: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
    },
    buttonsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }
});