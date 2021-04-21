import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../../modules/redux/hooks';
import { categoriesInterface } from '../../../modules/interfaces/categoriesInterface';
import DeleteCategoryForm from './DeleteCategoryForm';

const Styled = styled.div`
  height: 100px;
  padding: 20px;
  color: gray;
`;

export default () => {
  const text = 'Delete';
  const jwt = useAppSelector((state) => state.auth.authJwt);
  const categoriesState = useAppSelector((state) => state.content.categories);
  const [categories, setCategories] = useState<categoriesInterface[]>([]);
  useEffect(() => {
    setCategories(categoriesState);
  }, [categoriesState]);
  return (
    <Styled>
      {text}
      <DeleteCategoryForm categories={categories} jwt={jwt} />
    </Styled>
  );
};
