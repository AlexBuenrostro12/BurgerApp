import React from 'react';
import { View } from 'react-native';
import Layout from './src/hoc/Layout';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import BurgerBuilderContextProvider from './src/contexts/BurgerBuilderContext';

//Put the ip address of the PC where is runnig the GrapQL Server 
//to get access to this
//GrapQL Server connection
const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://YOUR_IP:YOUR_PORT',
  }),
  cache: new InMemoryCache()
});

const App = () => {
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
