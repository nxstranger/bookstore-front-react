import React, { useEffect, useState } from 'react';
import axios from '../../../modules/axios/config';
import { StyledUl } from '../../../modules/styled/dropDownStyled';
import { CategoriesInterface } from '../../../modules/interfaces/categoriesInterface';
import { useAppDispatch } from '../../../modules/redux/hooks';
import { setBookCategory as dispatchCategory } from '../../../modules/redux/adminPanelSlice';

interface helperProps {
  search: string
}

const CategoryInputHelper = (props: helperProps) => {
  const { search } = props;
  const dispatch = useAppDispatch();
  const [textField, setTextField] = useState<CategoriesInterface[]>([]);
  console.log('tick CategoryInputHelper');
  console.log(search);
  const setBookCategory = (categoryId: number) => {
    dispatch(dispatchCategory(categoryId));
  };
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
    <StyledUl>
      {
        textField.map((obj) => (
          <li key={obj.id}>
            <button type="button" onClick={() => setBookCategory(obj.id)}>
              {obj.slug}
            </button>
          </li>
        ))
      }
    </StyledUl>
  );
};

export default CategoryInputHelper;
