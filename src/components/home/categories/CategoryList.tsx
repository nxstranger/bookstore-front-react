import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Category from './Category';

import { CategoriesInterface } from '../../../modules/interfaces/categoriesInterface';
import { useAppDispatch, useAppSelector } from '../../../modules/redux/hooks';
import { asyncLoadCategories, getAllCategories } from '../../../modules/redux/categoriesSlice';

const StyledCategories = styled.span`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 10px;
`;

function CategoryList(): JSX.Element {
  const dispatch = useAppDispatch();
  const selector: CategoriesInterface[] = useAppSelector(getAllCategories);
  const [categories, setCat] = useState<CategoriesInterface[]>(useAppSelector(getAllCategories));

  useEffect(() => {
    console.log('categories draw tick');
    if (!selector.length) {
      dispatch(asyncLoadCategories());
    }
    setCat(selector);
  }, [selector]);

  return (
    <StyledCategories>
      categories
      {
        (categories.length)
          ? categories.map((obj:CategoriesInterface) => (
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
