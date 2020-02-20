import React from 'react';

import { BookListContainer, StyledBookList } from './styledComponents';

function BookList(props) {
  return (
    <BookListContainer>
      <StyledBookList>Book Name</StyledBookList>
    </BookListContainer>
  );
}

export default BookList;
