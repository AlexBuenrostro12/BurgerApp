import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Spinner from '../components/UI/Spinner';
import Inputs from '../components/Inputs/Inputs';
import { BurgerBuilderContext } from '../contexts/BurgerBuilderContext';
import Burger from '../components/Burger/Burger';
import KBAvoiding from '../components/KBAvoiding/KBAvoiding';
import { CREATE_INGREDIENTS_MUTATION } from '../components/Mutations/Mutations';
//  const CREATE_INGREDIENTS_MUTATION = gql`
//      mutation CREATE_INGREDIENTS_MUTATION(
//         $name: String!
//         $address: String!
//         $email: String!
//      ) {
//          createCustomer(
//              name: $name
//              address: $address
//              email: $email
//          ) {
//             id
//          }
//      }
//  `;
//Make mutation

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
    // useState

    const customerElements = [];
    for(let key in customer) {
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
    for(let key in customer) {
        customerVariables[key] = customer[key].value;
    }

    changeInputHandler = (text, key) => {
        const newCustomerValue = { ...customer };
        const updatedFormElement = { ...newCustomerValue[key] };

        updatedFormElement.value = text;
        newCustomerValue[key] = updatedFormElement;

        setCustomer(newCustomerValue);

    };

    const createCustomerHandler = async (createCustomer) => {
        const res = await createCustomer();
        console.log('resMutation: ', res);
    }


    return (
        <KBAvoiding>
            <BurgerBuilderContext.Consumer>{(burgerBuilderContext) => {
                const { ings, totalPrice } = burgerBuilderContext;
                console.log('ings: ', ings, 'price: ', totalPrice);
                console.log('customer: ', customer);
                console.log('variables: ', customerVariables);
                return(
                    <Mutation
                        mutation={CREATE_INGREDIENTS_MUTATION}
                        variables={customerVariables}
                    >
                        {(createCustomer, { loading, error }) => (
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
                                    <View style={styles.buttonsContainer}>
                                        <Inputs 
                                            type="cancel"
                                            name="Back"
                                            goBack={goToBurger}
                                        />
                                        <Inputs
                                            type="success" 
                                            name="Order"
                                            order={() => createCustomerHandler(createCustomer)}
                                        />
                                    </View>
                                    <Button
                                        onPress={goToLogin}
                                        title="Go to Login screen"
                                        color="grey"
                                        />
                                </View>
                            </ScrollView>
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