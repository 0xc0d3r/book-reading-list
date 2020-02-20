import React, { useState } from 'react';
import { graphql } from 'react-apollo';

import { getBooksQuery } from '../../queries';

import BookDetails from '../BookDetails';

import {
  BookListContainer,
  StyledBookList,
  StyledBookItem
} from './styledComponents';

function BookList(props) {
  const [bookId, setBookId] = useState('-1');

  const renderBooks = () => {
    if (props.data.loading) {
      return <h1>Loading...</h1>;
    }
    return props.data.books.map(book => (
      <StyledBookItem key={book.id} onClick={() => setBookId(book.id)}>
        {book.name}
      </StyledBookItem>
    ));
  };

  return (
    <BookListContainer>
      <StyledBookList>{renderBooks()}</StyledBookList>
      <BookDetails id={bookId} />
    </BookListContainer>
  );
}

export default graphql(getBooksQuery)(BookList);
