import React, { useState } from 'react';
import { graphql } from 'react-apollo';
import compose from 'lodash.flowright';

import { getAuthorsQuery, addBookMutation } from '../../queries';

import {
  Field,
  FieldLabel,
  StyledForm,
  StyledInput,
  StyledDropdown,
  AddButton
} from './styledComponents';

function AddBook(props) {
  const [name, setName] = useState('');
  const [genre, setGenre] = useState('');
  const [authorId, setAuthorId] = useState('');

  const renderAuthors = () => {
    if (props.getAuthorsQuery.loading) {
      return <option>Loading...</option>;
    }
    return props.getAuthorsQuery.authors.map(author => (
      <option key={author.id} value={author.id}>
        {author.name}
      </option>
    ));
  };

  const addBook = e => {
    e.preventDefault();
    props.addBookMutation({
      variables: {
        name,
        genre,
        authorId
      }
    });
  };

  return (
    <StyledForm onSubmit={addBook}>
      <Field>
        <FieldLabel>Name</FieldLabel>
        <StyledInput type='text' onChange={e => setName(e.target.value)} />
      </Field>
      <Field>
        <FieldLabel>Genre</FieldLabel>
        <StyledInput type='text' onChange={e => setGenre(e.target.value)} />
      </Field>
      <Field>
        <FieldLabel>Author</FieldLabel>
        <StyledDropdown onChange={e => setAuthorId(e.target.value)}>
          <option>Select author</option>
          {renderAuthors()}
        </StyledDropdown>
      </Field>
      <AddButton>Add</AddButton>
    </StyledForm>
  );
}

export default compose(
  graphql(getAuthorsQuery, { name: 'getAuthorsQuery' }),
  graphql(addBookMutation, { name: 'addBookMutation' })
)(AddBook);
