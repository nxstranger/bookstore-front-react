import React, { useEffect, useState } from 'react';
import axios from '../../../modules/axios/config';
import { CategoriesInterface } from '../../../modules/interfaces/categoriesInterface';

interface helperProps {
  search: string
}

const CategoryInputHelper = (props: helperProps) => {
  const { search } = props;
  const [textField, setTextField] = useState<CategoriesInterface[]>([]);
  console.log('tick CategoryInputHelper');
  console.log(search);
  useEffect(() => {
    axios.get(`/categories/search/${search}`)
      .then((data) => {
        if (data.status === 200) {
          setTextField(data.data);
        }
      })
      .catch(() => setTextField([]));
  }, [search]);

  return (
    <div>
      <ul>
        {textField.map((obj) => <li key={obj.id}>{obj.slug}</li>)}
      </ul>
    </div>
  );
};

export default CategoryInputHelper;
