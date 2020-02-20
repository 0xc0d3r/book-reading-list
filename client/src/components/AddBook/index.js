import React from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

import {
  Field,
  FieldLabel,
  StyledForm,
  StyledInput,
  StyledDropdown,
  AddButton
} from './styledComponents';

const getAuthorsQuery = gql`
  {
    authors {
      id
      name
    }
  }
`;

function AddBook(props) {
  const renderAuthors = () => {
    if (props.data.loading) {
      return <option>Loading...</option>;
    }
    return props.data.authors.map(author => (
      <option key={author.id} value={author.id}>
        {author.name}
      </option>
    ));
  };

  return (
    <StyledForm>
      <Field>
        <FieldLabel>Name</FieldLabel>
        <StyledInput type='text' />
      </Field>
      <Field>
        <FieldLabel>Genre</FieldLabel>
        <StyledInput type='text' />
      </Field>
      <Field>
        <FieldLabel>Author</FieldLabel>
        <StyledDropdown>
          <option>Select author</option>
          {renderAuthors()}
        </StyledDropdown>
      </Field>
      <AddButton>Add</AddButton>
    </StyledForm>
  );
}

export default graphql(getAuthorsQuery)(AddBook);
