import React from 'react';
import styled from 'styled-components';
import CategoryList from './categories/CategoryList';
import Content from './content/Content';
import BookFilter from './filters/BookFilter';

const Main = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-top: 20px;
`;

function Home() {
  return (
    <Main>
      <div>
        <CategoryList />
        <BookFilter />
      </div>
      <Content />
    </Main>
  );
}

export default Home;
