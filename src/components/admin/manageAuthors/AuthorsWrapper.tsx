import React from 'react';
import DeleteAuthorsWrapper from './DeleteAuthorsWrapper';
import CreateAuthorWrapper from './CreateAuthorWrapper';

export default () => {
  const title = 'Authors';
  return (
    <div>
      {title}
      <DeleteAuthorsWrapper />
      <CreateAuthorWrapper />
    </div>
  );
};
