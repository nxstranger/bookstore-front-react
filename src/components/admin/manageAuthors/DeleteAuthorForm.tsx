import React, { useState } from 'react';
import { Formik } from 'formik';
import { DropdownInput, DropdownLabel } from '../../../modules/styled/dropDownStyled';
import { StyledColumnForm, StyledInputDiv, StyledSubmitButton } from '../../../modules/styled/styledForm';
import { authorInterface } from '../../../modules/interfaces/modelInterfaces';
import { useAppDispatch } from '../../../modules/redux/hooks';

import { asyncDeleteAuthor } from '../../../modules/redux/contentSlice';

interface prop {
  jwt: string,
  authors : authorInterface[],
}

export default ({ authors, jwt } : prop) => {
  const dispatch = useAppDispatch();
  const [selectedAuthor, setAuthor] = useState<number>((authors.length) ? authors[0].id : 0);
  const initialValues = {
    author: (authors.length) ? authors[0].id : 0,
  };
  const handleSubmit = () => {
    if (selectedAuthor) {
      dispatch(asyncDeleteAuthor({
        token: jwt,
        authorId: selectedAuthor,
      }));
    }
  };
  const handleSelect = (value: any) => {
    setAuthor(value.target.value);
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <StyledColumnForm>
          <DropdownLabel htmlFor="author-delete">
            <StyledInputDiv>
              author
              <DropdownInput
                name="author"
                id="author-delete"
                as="select"
                value={selectedAuthor}
                onChange={handleSelect}
              >
                {
                  authors.map((obj) => (
                    <option key={obj.id} value={obj.id}>
                      {obj.id}
                      {':   '}
                      {obj.name}
                    </option>
                  ))
                }
              </DropdownInput>
            </StyledInputDiv>
          </DropdownLabel>
          <StyledSubmitButton type="submit">Delete</StyledSubmitButton>
        </StyledColumnForm>
      </Formik>
    </div>
  );
};
