import React from 'react';
import { graphql } from 'react-apollo';

import { getBookQuery } from '../../queries';

import { BookDetailsContainer } from './styledComponents';

function BookDetails(props) {
  const renderBookDetails = () => {
    const { book } = props.data;
    if (book) {
      return (
        <React.Fragment>
          <h1>{book.name}</h1>
          <p>Genre: {book.genre}</p>
          <p>Author: {book.author.name}</p>
          <p>All books by this author</p>
          <ul>
            {book.author.books.map(book => (
              <li key={book.id}>{book.name}</li>
            ))}
          </ul>
        </React.Fragment>
      );
    }
    return <p>Click on any book to see the details!</p>;
  };

  return <BookDetailsContainer>{renderBookDetails()}</BookDetailsContainer>;
}

export default graphql(getBookQuery, {
  options: props => ({
    variables: {
      id: props.id
    }
  })
})(BookDetails);
