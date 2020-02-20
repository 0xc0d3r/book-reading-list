import styled from 'styled-components';

export const StyledForm = styled.form`
  background: #fff;
  padding: 20px;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 400px;
`;

export const Field = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`;

export const FieldLabel = styled.label`
  text-align: right;
  padding: 6px;
`;

export const StyledInput = styled.input`
  margin: 4px;
  padding: 6px;
  box-sizing: border-box;
`;

export const StyledDropdown = styled.select`
  margin: 4px;
  padding: 6px;
  box-sizing: border-box;
`;

export const AddButton = styled.button`
  color: #fff;
  background: #ad1457;
  font-size: 2em;
  border: 0;
  padding: 0 10px;
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  left: 10px;
`;
