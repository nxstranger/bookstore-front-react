import React, { useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import {
  Field, Form, Formik,
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
  const jwt = useAppSelector((state) => state.auth.authJwt);
  const { id } = useParams<{id: string}>();
  const componentName: string = 'ImageUploader';
  const [image, setImage] = useState<string | Blob>('');
  const selector = useAppSelector((state) => state.adminPanel.book);
  const formOnSubmit = () => {
    if (image && selector?.media) {
      const file = new FormData();
      file.append('image', image);
      file.append('folder', selector?.media);
      axios.post(`/images/load/${id}`,
        file,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: jwt,
          },
        })
        .then(() => {
          dispatch(asyncLoadImagesBookId(+id));
        })
        .catch((err) => alert(err.message));
    }
  };
  const changeImageInput = (e : React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files?.length) {
      const loadedImage = e.currentTarget.files[0];

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
