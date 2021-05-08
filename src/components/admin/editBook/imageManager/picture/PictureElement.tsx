import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { imagesInterface } from '../../../../../modules/interfaces/modelInterfaces';
import { useAppDispatch, useAppSelector } from '../../../../../modules/redux/hooks';
import axios from '../../../../../modules/axios/config';
import { removeImage } from '../../../../../modules/redux/adminPanelSlice';
import { back } from '../../../../../modules/conf';

const StyledPictureWrapper = styled.div`
  width: 150px;
  height: 150px;
  border: 1px solid #282c34;
  margin: 10px;
  display: flex;
  flex-direction: column;
  img {
    width: 150px;
    height: 150px;
    object-fit: cover;
  }
`;

const DelImageButton = styled.button`
  position: absolute;
`;

interface prop {
  image: imagesInterface,
}

const PictureElement = (elem: prop) => {
  const { image } = elem;
  const dispatch = useAppDispatch();
  const jwt = useAppSelector((state) => state.auth.authJwt);
  const selector = useAppSelector((state) => state.adminPanel.book?.media);
  const [bookMedia, setMedia] = useState<string | undefined>('');
  const link = `${back.hostname}:${back.port}/${bookMedia}/${image.name}_small.jpg`;
  useEffect(() => {
    setMedia(selector);
  }, []);
  const delImage = () => {
    axios.delete(
      `images/id/${elem.image.id}`,
      {
        headers: {
          Authorization: jwt,
        },
      },
    )
      .then(() => {
        dispatch(removeImage(elem.image.id));
      })
      .catch((err) => toast.error(err.message || 'Error', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }));
  };
  return (
    <StyledPictureWrapper>
      { (bookMedia)
        ? (<img src={link} alt="text" />)
        : '' }
      <DelImageButton onClick={delImage}>del</DelImageButton>
    </StyledPictureWrapper>
  );
};

export default PictureElement;
