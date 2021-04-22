import React, { useEffect, useState } from 'react';
import axios from '../../../../modules/axios/config';
import { authorInterface } from '../../../../modules/interfaces/modelInterfaces';
import { StyledUl } from '../../../../modules/styled/dropDownStyled';
import { setBookAuthor as dispatchAuthor } from '../../../../modules/redux/adminPanelSlice';
import { useAppDispatch } from '../../../../modules/redux/hooks';

interface helperProps {
  search: string
}

const AuthorInputHelper = (props: helperProps) => {
  const { search } = props;
  const dispatch = useAppDispatch();
  const [textField, setTextField] = useState<authorInterface[]>([]);
  console.log('tick AuthorInputHelper');
  console.log(search);
  const setBookAuthor = (authorId: number) => {
    dispatch(dispatchAuthor(authorId));
  };
  useEffect(() => {
    axios.get(`/author/search/${search}`)
      .then((data) => {
        setTextField([]);
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
            <button type="button" onClick={() => setBookAuthor(obj.id)}>
              {obj.name}
            </button>
          </li>
        ))
      }
    </StyledUl>
  );
};

export default AuthorInputHelper;
