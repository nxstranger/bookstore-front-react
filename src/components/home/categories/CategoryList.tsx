import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Category from './Category';
import { categoriesInterface } from '../../../modules/interfaces/categoriesInterface';
import { useAppSelector } from '../../../modules/redux/hooks';
import { getAllCategories } from '../../../modules/redux/contentSlice';

const StyledCategories = styled.ul`
  margin: 0;
  padding: 0;
  width: 300px;
  display: flex;
  flex-direction: column;
  color: #46c3d2;
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
  const selector: categoriesInterface[] = useAppSelector(getAllCategories);
  const [categories, setCat] = useState<categoriesInterface[]>(useAppSelector(getAllCategories));
  useEffect(() => {
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
