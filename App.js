import React from 'react';
import { View } from 'react-native';
import Layout from './src/hoc/Layout';
//import ApolloClient from 'apollo-boost';
//import { ApolloProvider } from '@apollo/react-hooks';
import { endpoint } from './config';
import withData from './lib/withData';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import BurgerBuilderContextProvider from './src/contexts/BurgerBuilderContext';

//need to put the ip addres of the laptop to get access to de local
//graphql server
const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://192.168.1.129:4444',
  }),
  cache: new InMemoryCache()
});

const App = (props) => {
  console.log('client: ', client);
  return (
    <View style={{ flex: 1 }}>
        <ApolloProvider client={client}>
          {/* This wrap all the screens of the tree to get access to this context  */}
          <BurgerBuilderContextProvider>
            <Layout />
          </BurgerBuilderContextProvider>
        </ApolloProvider>
    </View>
  );
}

export default App;
