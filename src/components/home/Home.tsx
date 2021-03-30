import React from 'react';
import { useParams } from 'react-router-dom';

import styled from 'styled-components';
import CategoryList from './categories/CategoryList';
import Content from './content/Content';

const Main = styled.main`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

function Home() {
  const { catSlug } = useParams<{ catSlug: string }>();
  return (
    <Main>
      <div>
        Books*
        {catSlug}
      </div>
      <Wrapper>
        <CategoryList />
        <Content />
      </Wrapper>
    </Main>
  );
}

export default Home;
