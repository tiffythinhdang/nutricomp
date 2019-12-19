import React from 'react';
import styled from'styled-components';

import Header from'../components/header/header';
import SearchBar from'../components/search_bar/search_bar';


// const PaddedContainer = styled('div')`
//   position: relative;
//   padding: 50px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

// const Logo = () => (
//   <div>NutriComp</div>
// );

// const StyledLogo = styled(Logo)`
//   color: orange;
//   font-size: 32px;
// `;

// const Menu = () => (
//   <div>Menu</div>
// );

// const StyledMenu = styled(Logo)`
//   color: lightgray;
//   font-size: 22px;
// `;

const Splash = () => {
  return (
    <div>
      <Header />
      <SearchBar />
    </div>
  )
};

export default Splash;
