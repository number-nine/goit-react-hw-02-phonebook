import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  column-gap: 8px;
  align-items: center;
  
`;

export const OptionButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 60px;
  height: 30px;

  background-color: #008cba;
  color: #ffffff;

  border: none;
  border-radius: 4px;
  outline: none;

  cursor: pointer;

  &:hover {
    background-color: #095872;
  }
`;