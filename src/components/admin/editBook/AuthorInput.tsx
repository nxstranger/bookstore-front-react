import React, { useState } from 'react';
import AuthorInputHelper from './AuthorInputHelper';

const AuthorInput = () => {
  const authors: string = 'authors';
  const [fieldValue, setFieldValue] = useState<string>('');
  return (
    <div>
      {authors}
      <label htmlFor="author-input">
        <input id="author-input" onChange={(e: any) => setFieldValue(e.target.value)} />
        {
          (fieldValue.length > 2)
            ? <AuthorInputHelper search={fieldValue} />
            : <span>enter the text</span>
        }
      </label>
    </div>
  );
};

export default AuthorInput;
