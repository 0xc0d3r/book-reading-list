import React from 'react';
import { graphql } from 'react-apollo';

import { getBooksQuery } from '../../queries';

import { BookListContainer, StyledBookList } from './styledComponents';

function BookList(props) {
  const renderBooks = () => {
    if (props.data.loading) {
      return <h1>Loading...</h1>;
    }
    return props.data.books.map(book => <li key={book.id}>{book.name}</li>);
  };

  return (
    <BookListContainer>
      <StyledBookList>{renderBooks()}</StyledBookList>
    </BookListContainer>
  );
}

export default graphql(getBooksQuery)(BookList);
