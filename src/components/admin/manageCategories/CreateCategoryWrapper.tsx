import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../../modules/redux/hooks';
import CreateAuthorForm from './CreateCategoryForm';

const Styled = styled.div`
padding: 20px;
  border: 1px solid gray;
`;

export default () => {
  const text = '';
  const jwt = useAppSelector((state) => state.auth.authJwt);
  const categories = useAppSelector((state) => state.content.categories);
  return (
    <Styled>
      {text}
      <CreateAuthorForm categories={categories} jwt={jwt} />
    </Styled>
  );
};
