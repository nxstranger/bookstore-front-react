import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryInterface{
  categoryName: string
  slug: string
}

function Category({ slug, categoryName }:CategoryInterface) {
  const link = `/book/category/${slug}`;
  return (
    <Link to={link}>
      <span>{categoryName}</span>
    </Link>
  );
}

export default Category;
