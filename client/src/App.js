import React from 'react';
import { ApolloClient } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import BookList from './components/BookList';

const apolloClient = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <div id='main'>
        <h1>Anesh's Reading List</h1>
        <BookList />
      </div>
    </ApolloProvider>
  );
}

export default App;
