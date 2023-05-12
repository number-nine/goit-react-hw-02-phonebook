import styled from '@emotion/styled';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  width: 100%;

`;

export const InputWrapper = styled.label`
  display: flex;
  flex-direction: column;

  font-size: 14px;

  input {
    height: 36px;
    font-size: 24px;
  }
`;