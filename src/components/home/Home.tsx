import React from 'react';
import styled from 'styled-components';

import CategoryList from './categories/CategoryList';
import Content from './content/Content';

const Main = styled.main`
  display: flex;
  flex-direction: row;
`;

function Home() {
  return (
    <Main>
      <CategoryList />
      <Content />
    </Main>
  );
}

export default Home;
