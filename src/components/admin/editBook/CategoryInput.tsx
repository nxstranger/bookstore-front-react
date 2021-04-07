import React, { useState } from 'react';
import CategoryInputHelper from './CategoryInputHelper';

const CategoriesInput = () => {
  const categories: string = 'categories';
  const [categoryValue, setCategory] = useState<string>('');
  return (
    <div>
      {categories}
      <label htmlFor="cat-input">
        <input id="cat-input" onChange={(e: any) => setCategory(e.target.value)} />
        {
          (categoryValue.length > 2)
            ? <CategoryInputHelper search={categoryValue} />
            : <span>enter the text</span>
        }
      </label>
    </div>
  );
};

export default CategoriesInput;
