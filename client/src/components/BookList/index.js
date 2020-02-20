import React, { useState } from 'react';
import { graphql } from 'react-apollo';

import { ErrorMessage } from '../../App/styledComponents';

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
    console.log('props.data: ', props.data);
    if (props.data.loading) {
      return <h1>Loading...</h1>;
    } else if (props.data.error && props.data.error.message !== '') {
      return <ErrorMessage>{props.data.error.message}</ErrorMessage>;
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
