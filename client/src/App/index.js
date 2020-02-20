import React from 'react';
import { ApolloClient } from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';

import BookList from '../components/BookList';
import AddBook from '../components/AddBook';

import { AppContainer, ReadingListHeading } from './styledComponents';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://localhost:4000/graphql'
});

const apolloClient = new ApolloClient({
  cache,
  link
});

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <AppContainer>
        <ReadingListHeading>Anesh's Reading List</ReadingListHeading>
        <BookList />
        <AddBook />
      </AppContainer>
    </ApolloProvider>
  );
}

export default App;
