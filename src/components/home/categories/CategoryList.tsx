import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from '../../../modules/axios/config';

import Category from './Category';

const StyledCategories = styled.span`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 10px;
`;

interface categoryObject {
  id: number,
  title: string,
  slug: string
}

function CategoryList(): JSX.Element {
  const [categories, setCategories] = useState<Array<categoryObject>>([]);
  function getCategories():Array<categoryObject> {
    const catArray: Array<categoryObject> = [];
    axios.get('/categories')
      .then((data) => {
        setCategories(data.data);
        return [];
      })
      .catch(() => []);
    return catArray;
  }

  useEffect(() => {
    setTimeout(() => {
      getCategories();
    }, 200);
  }, []);

  return (
    <StyledCategories>
      {
        categories.map((obj:categoryObject) => (
          <Category
            slug={obj.slug}
            categoryName={obj.title}
            key={obj.slug}
          />
        ))
      }
    </StyledCategories>
  );
}

export default CategoryList;
