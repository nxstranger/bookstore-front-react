import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../../modules/redux/hooks';
import CreateAuthorForm from './CreateCategoryForm';

const Styled = styled.div`
  height: 160px;
  padding: 20px;
  color: gray;
`;

export default () => {
  const text = 'Create';
  const jwt = useAppSelector((state) => state.auth.authJwt);
  const categories = useAppSelector((state) => state.content.categories);
  return (
    <Styled>
      {text}
      <CreateAuthorForm categories={categories} jwt={jwt} />
    </Styled>
  );
};
