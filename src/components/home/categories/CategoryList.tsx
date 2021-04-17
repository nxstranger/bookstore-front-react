import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Category from './Category';
import { categoriesInterface } from '../../../modules/interfaces/categoriesInterface';
import { useAppDispatch, useAppSelector } from '../../../modules/redux/hooks';
import { asyncLoadCategories, getAllCategories } from '../../../modules/redux/contentSlice';

const StyledCategories = styled.ul`
  display: flex;
  flex-direction: column;
  color: #46c3d2;
  padding: 10px;
  margin: 10px;
  a, a:link {
    text-decoration: none;
    color: #46c3d2;
  }
`;

const CategoriesSpan = styled.span`
  color: gray;
  font-size: 14px;
`;

function CategoryList(): JSX.Element {
  const dispatch = useAppDispatch();
  const selector: categoriesInterface[] = useAppSelector(getAllCategories);
  const [categories, setCat] = useState<categoriesInterface[]>(useAppSelector(getAllCategories));

  useEffect(() => {
    dispatch(asyncLoadCategories());
  }, []);
  useEffect(() => {
    if (!selector.length) {
      console.log('categories draw tick');
      dispatch(asyncLoadCategories());
    }
    setCat(selector);
  }, [selector]);

  return (
    <StyledCategories>
      <CategoriesSpan>
        Categories:
      </CategoriesSpan>
      <Category categoryName="Все книги" slug="" key="01234" />
      {
        (categories.length)
          ? categories.map((obj:categoriesInterface) => (
            <Category
              slug={obj.slug}
              categoryName={obj.title}
              key={obj.slug}
            />
          ))
          : (<div> no catt </div>)
      }

    </StyledCategories>
  );
}

export default CategoryList;
