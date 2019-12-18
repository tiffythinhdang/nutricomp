import React from 'react';
import styled from 'styled-components';

const PaddedContainer = styled('div')`
  position: relative;
  padding: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = ({className}) => (
  <div className={className}>NutriComp</div>
);

const StyledLogo = styled(Logo)`
  color: orange;
  font-size: 32px;
`;

const Menu = ({className}) => (
  <div className={className}>Menu</div>
);

const StyledMenu = styled(Menu)`
  color: lightgray;
  font-size: 22px;
`;

const Header = () => {
  return (
    <PaddedContainer>
      <StyledLogo />
      <StyledMenu />
    </PaddedContainer>
  )
}

export default Header;
