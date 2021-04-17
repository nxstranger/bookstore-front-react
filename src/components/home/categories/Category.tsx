import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledCategory = styled.li`
  color: #46c3d2;
  list-style: none;
`;

interface CategoryInterface{
  categoryName: string
  slug: string | ''
}

function Category({ slug, categoryName }:CategoryInterface) {
  const link = (slug) ? `/book/category/${slug}` : '/';
  return (
    <StyledCategory>
      <Link to={link}>
        <span>{categoryName}</span>
      </Link>
    </StyledCategory>
  );
}

export default Category;
