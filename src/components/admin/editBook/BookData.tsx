import { ErrorMessage, Formik, FormikErrors } from 'formik';
import React, { useEffect } from 'react';
import {
  bookInterfaceAdmin,
  bookUpdateDataInterface,
} from '../../../modules/interfaces/bookInterface';
import {
  CheckboxStyled,
  InputStyled,
  StyledRowForm,
  TextareaStyled,
  FormSectionWrapper,
} from '../../../modules/styled/styledForm';
import CategoriesInput from './CategoryInput';
import AuthorInput from './AuthorInput';
import { useAppSelector } from '../../../modules/redux/hooks';
import axios from '../../../modules/axios/config';
import {
  bookNameValidator,
  bookSlugValidator,
  fieldNotFilledValidator,
} from '../../../modules/fieldsValidator/fieldsValidator';
// import { setBookInfo } from '../../../modules/redux/adminPanelSlice';

interface bookProps {
  book: bookInterfaceAdmin,
}

const BookData = (props: bookProps) => {
  const stateHook = useAppSelector((state) => state.adminPanel.book);
  // const dispatch = useAppDispatch();
  const { book } = props;
  const bookDefaultValues = {
    // rework it !!!!!!!!!!!!!!
    id: book?.id,
    title: book?.title || '',
    slug: book?.slug || '',
    description: book?.description || '',
    publish: book?.publish || false,
    price: book?.price || 0,
    media: book?.media,
    category: book?.category,
    author: book.author,
  };
  console.log('tick');
  const handleSubmit = (submitValues: bookInterfaceAdmin) => {
    const payloadData: bookUpdateDataInterface = {
      title: submitValues.title,
      slug: submitValues.slug,
      description: submitValues.description,
      price: submitValues.price || 0,
      publish: submitValues.publish,
      category: stateHook?.category,
      author: stateHook?.author,
    };
    console.log('payloadData');
    console.log(payloadData);
    // dispatch(setBookInfo(payloadData));
    console.log('stateHook');
    console.log(stateHook);

    console.log('tick bookdata');
    axios.put(`/book/id/${book.id}`, payloadData)
      .then((res) => {
        if (res.status === 200) alert('updated');
      })
      .catch((err) => alert(err));
  };
  useEffect(() => {
    console.log('stateHook');
    console.log(stateHook);
  }, [stateHook]);
  const validate = (values: bookInterfaceAdmin) => {
    const errors: FormikErrors<bookInterfaceAdmin> = {};
    bookNameValidator(values.title, errors);
    bookSlugValidator(values.slug, errors);
    fieldNotFilledValidator(values, errors, ['publish', 'category', 'author']);
    console.log('errors');
    console.log(errors);
    return errors;
  };
  const { id } = { ...book };
  return (
    <div>
      <Formik
        initialValues={bookDefaultValues}
        onSubmit={handleSubmit}
        validate={validate}
      >
        <StyledRowForm>
          <FormSectionWrapper>
            <span>
              id_
              {id || 'undefined'}
            </span>
            <InputStyled name="title" type="text" placeholder="title" />
            <ErrorMessage name="title" />

            <InputStyled name="slug" type="text" placeholder="slug" />
            <ErrorMessage name="slug" />

            <TextareaStyled name="description" type="text" placeholder="description" component="textarea" />
            <ErrorMessage name="description" />

            <InputStyled name="price" type="number" placeholder="price" />
            <ErrorMessage name="price" />
            <label htmlFor="publish">
              Publish:
              <CheckboxStyled name="publish" id="publish" type="checkbox" />
            </label>
          </FormSectionWrapper>
          <FormSectionWrapper>
            <span>
              category:
              {book.category}
            </span>
            <CategoriesInput />
            <span>
              author:
              {book.author}
            </span>
            <AuthorInput />
          </FormSectionWrapper>
          <button type="submit">Submit</button>
        </StyledRowForm>
      </Formik>
    </div>
  );
};

export default BookData;
