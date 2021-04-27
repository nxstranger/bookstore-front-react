import { ErrorMessage, Formik, FormikErrors } from 'formik';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import {
  bookInterfaceAdmin,
  bookUpdateDataInterface,
} from '../../../modules/interfaces/modelInterfaces';
import {
  CheckboxStyled,
  InputStyled,
  StyledRowForm,
  TextareaStyled,
  FormSectionWrapper,
  StyledInputDiv,
  TextareaStyledDiv,
} from '../../../modules/styled/styledForm';
import CategoriesInput from './categoryInput/CategoryInput';
import AuthorInput from './authorInput/AuthorInput';
import { useAppDispatch, useAppSelector } from '../../../modules/redux/hooks';
import axios from '../../../modules/axios/config';
import {
  bookNameValidator,
  bookSlugValidator,
  fieldNotFilledValidator,
} from '../../../modules/fieldsValidator/fieldsValidator';
import ImageManager from './imageManager/ImageManager';
import { FlexRowDiv } from '../../../modules/styled/simpleStyledComponents';
import { setBookInfo } from '../../../modules/redux/adminPanelSlice';

interface bookProps {
  book: bookInterfaceAdmin,
}

const StyledFormDiv = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

const StyledSubmitButton = styled.button`
  margin: 20px auto 0;
  width: fit-content;
  padding: 0;
`;

const BookData = (props: bookProps) => {
  const jwt = useAppSelector((state) => state.auth.authJwt);
  const stateHook = useAppSelector((state) => state.adminPanel.book);
  const dispatch = useAppDispatch();
  const { book } = props;
  const bookDefaultValues = {
    id: book?.id,
    title: book?.title || '',
    slug: book?.slug || '',
    description: book?.description || '',
    publish: book?.publish,
    price: book?.price || 1,
    media: book?.media,
    category: book?.category || 1,
    author: book.author || 1,
  };
  const handleSubmit = (submitValues: bookInterfaceAdmin) => {
    const payloadData: bookUpdateDataInterface = {
      title: submitValues.title,
      slug: submitValues.slug,
      description: submitValues.description,
      price: submitValues.price || 1,
      publish: submitValues.publish,
      category: stateHook?.category,
      author: stateHook?.author,
    };
    axios.put(`/book/id/${book.id}`,
      payloadData,
      {
        headers: {
          Authorization: jwt,
        },
      })
      .then((res) => {
        if (res.status === 200) alert('updated');
        dispatch(setBookInfo(payloadData));
      })
      .catch((err) => alert(err));
  };
  useEffect(() => {
  }, [stateHook]);
  const validate = (values: bookInterfaceAdmin) => {
    const errors: FormikErrors<bookInterfaceAdmin> = {};
    bookNameValidator(values.title, errors);
    bookSlugValidator(values.slug, errors);
    fieldNotFilledValidator(values, errors, ['publish', 'category', 'author']);
    return errors;
  };
  const { id } = { ...book };
  return (
    <FlexRowDiv>
      <ImageManager />
      <StyledFormDiv>
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
              <StyledInputDiv>
                <InputStyled name="title" type="text" placeholder="title" />
                <ErrorMessage name="title" />
              </StyledInputDiv>
              <StyledInputDiv>
                <InputStyled name="slug" type="text" placeholder="slug" />
                <ErrorMessage name="slug" />
              </StyledInputDiv>
              <TextareaStyledDiv>
                <TextareaStyled name="description" type="text" placeholder="description" component="textarea" />
                <ErrorMessage name="description" />
              </TextareaStyledDiv>
              <StyledInputDiv>
                <InputStyled name="price" type="number" placeholder="price" min="1" />
                <ErrorMessage name="price" />
              </StyledInputDiv>
              <StyledInputDiv>
                <label htmlFor="publish">
                  Publish:
                  <CheckboxStyled name="publish" id="publish" type="checkbox" />
                </label>
              </StyledInputDiv>

            </FormSectionWrapper>
            <FormSectionWrapper>
              <StyledInputDiv>
                <span>
                  category:
                  {book.category}
                </span>
                <CategoriesInput />
              </StyledInputDiv>
              <StyledInputDiv>
                <span>
                  author:
                  {book.author}
                </span>
                <AuthorInput />
              </StyledInputDiv>
              <StyledSubmitButton type="submit">Submit</StyledSubmitButton>
            </FormSectionWrapper>
          </StyledRowForm>
        </Formik>
      </StyledFormDiv>
    </FlexRowDiv>
  );
};

export default BookData;
