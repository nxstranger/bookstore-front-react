import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Category from './Category';
import { categoriesInterface } from '../../../modules/interfaces/modelInterfaces';
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
  a:hover {
    color: #24a1b0;
  }
`;

function CategoryList(): JSX.Element {
  const selector: categoriesInterface[] = useAppSelector(getAllCategories);
  const [categories, setCat] = useState<categoriesInterface[]>(useAppSelector(getAllCategories));
  useEffect(() => {
    setCat(selector);
  }, [selector]);
  return (
    <StyledCategories>
      <Category categoryName="Все книги" slug="" />
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
