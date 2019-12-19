import React from 'react';
import styled from 'styled-components';

import Button from '../buttons/button';

const Input = styled.input`
  font-family: Varela Round;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #B5B5B5;

  background: #FFFFFF;
  height: 54px;
  border: 1px solid #B5B5B5;
  box-sizing: border-box;
  border-radius: 25px 30px 30px 0px;
  padding: 0px 10px;
`;

const SearchBar = (props) => {
  return (
    <div>
      <Input />
      <Button primary>Search</Button>
    </div>
  )
}

export default SearchBar;
