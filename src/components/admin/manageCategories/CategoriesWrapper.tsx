import React from 'react';
import CreateCategoryWrapper from './CreateCategoryWrapper';
import DeleteCategoryWrapper from './DeleteCategoryWrapper';

export default () => {
  const title = 'Categories';
  return (
    <div>
      {title}
      <DeleteCategoryWrapper />
      <CreateCategoryWrapper />
    </div>
  );
};
