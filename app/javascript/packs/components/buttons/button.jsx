import React from 'react';
import styled, { css } from 'styled-components';

import COLORS from '../../utils/colors';

const Button = styled.button`
  height: 54px;
  border-radius: 0px 30px 30px 25px;

  ${props =>
    props.primary &&
    css`
      background: ${COLORS.orange05};
      color: white;
      font-family: Varela Round;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
    `
  };
`;

export default Button;
