import { Formik } from 'formik';
import React, { useState } from 'react';
import { bookInterfaceAdmin } from '../../../modules/interfaces/bookInterface';
import {
  CheckboxStyled,
  InputStyled,
  StyledForm,
  TextareaStyled,
} from '../../../modules/styled/styledForm';
import CategoriesInput from './CategoryInput';
import AuthorInput from './AuthorInput';

interface bookData {
  book: bookInterfaceAdmin,
}

const BookData = (props: bookData) => {
  // const book: bookInterfaceAdmin | undefined = useAppSelector((state) => state.adminPanel.book);
  const [smt, setSmt] = useState<string>('');
  const { book } = props;
  const bookDefaultValues = {
    // rework it !!!!!!!!!!!!!!
    id: book?.id || '',
    title: book?.title || '',
    slug: book?.slug || '',
    description: book?.description || '',
    price: book?.price || '',
    publish: book?.publish || false,
    category: book?.category || '',
    author: book?.author || '',
    media: book?.media || '',
  };
  console.log('tick');
  const handleSubmit = (submitValues: any) => {
    alert(JSON.stringify(submitValues));
  };
  console.log(bookDefaultValues);
  console.log(smt);
  const { id } = { ...book };
  return (
    <div>
      <Formik
        initialValues={bookDefaultValues}
        onSubmit={handleSubmit}
      >
        <StyledForm>
          <span>
            id_
            {id || 'undefined'}
          </span>
          <InputStyled name="title" type="text" placeholder="title" />
          <InputStyled name="slug" type="text" placeholder="slug" />
          <TextareaStyled name="description" type="text" placeholder="description" component="textarea" />
          <InputStyled
            name="category"
            type="text"
            placeholder="category"
            onChange={(e: any) => setSmt(e.target.value)}
          />
          <InputStyled name="author" type="text" placeholder="author" />
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="publish">
            Publish:
            <CheckboxStyled name="publish" id="publish" type="checkbox" />
          </label>
          <InputStyled name="price" type="text" placeholder="price" />
          <button type="submit">Submit</button>
        </StyledForm>
      </Formik>
      <CategoriesInput />
      <AuthorInput />
    </div>
  );
};

export default BookData;
