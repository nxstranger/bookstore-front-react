import React, { useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import {
  Field, Form, Formik, FormikValues,
} from 'formik';
import axios from '../../../../modules/axios/config';
import { useAppDispatch, useAppSelector } from '../../../../modules/redux/hooks';
import { asyncLoadImagesBookId } from '../../../../modules/redux/adminPanelSlice';

const UploaderWrapper = styled.div`
  padding: 10px;
  margin: 10px;
  border: 1px solid #282c34;
`;

const ImageUploader = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{id: string}>();
  const componentName: string = 'ImageUploader';
  const [image, setImage] = useState<string | Blob>('');
  const selector = useAppSelector((state) => state.adminPanel.book);
  console.log('image');
  console.log(image);
  const formOnSubmit = (values: FormikValues) => {
    console.log('values.file');
    console.log(values.file);
    const file = new FormData();
    console.log('selector');
    console.log(selector);
    file.append('image', image);
    if (selector?.media) {
      file.append('folder', selector?.media);
    }
    console.log('file');
    console.log(file.values());
    console.log('image123213');
    console.log(image);
    axios.post(`/images/load/${id}`,
      file,
      { headers: { 'Content-Type': 'multipart/form-data' } })
      .then((data) => {
        console.log(data.data);
        console.log(id);
        dispatch(asyncLoadImagesBookId(+id));
      })
      .catch((er) => console.log(er));
  };
  const changeImageInput = (e : React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files?.length) {
      const loadedImage = e.currentTarget.files[0];
      console.log('changeImageInput');
      console.log(loadedImage);
      setImage(loadedImage);
    }
  };
  return (
    <UploaderWrapper>
      { componentName }
      <Formik
        initialValues={
          { }
        }
        onSubmit={formOnSubmit}
      >
        <Form>
          <Field name="file" type="file" reqired="true" onChange={changeImageInput} />
          <button type="submit">load</button>
        </Form>
      </Formik>
    </UploaderWrapper>
  );
};

export default ImageUploader;
