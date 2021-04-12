import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ImagesInterface } from '../../../../../modules/interfaces/imagesInterface';
import { useAppDispatch, useAppSelector } from '../../../../../modules/redux/hooks';
import axios from '../../../../../modules/axios/config';
import { removeImage } from '../../../../../modules/redux/adminPanelSlice';

const StyledPictureWrapper = styled.div`
  width: 150px;
  height: 150px;
  border: 1px solid #282c34;
  margin: 10px;
  display: flex;
  flex-direction: column;
`;

const DelImageButton = styled.button`
  position: absolute;
`;

interface prop {
  image: ImagesInterface,
}

const PictureElement = (elem: prop) => {
  const { image } = elem;
  const dispatch = useAppDispatch();
  const selector = useAppSelector((state) => state.adminPanel.book?.media);
  const [bookMedia, setMedia] = useState<string | undefined>('');
  const link = `http://localhost:8080/${bookMedia}/${image.name}_small.jpg`;
  useEffect(() => {
    setMedia(selector);
  }, []);
  const delImage = () => {
    axios.delete(`images/id/${elem.image.id}`)
      .then(() => {
        dispatch(removeImage(elem.image.id));
        console.log('deleted');
      })
      .catch((err) => console.log(err));
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
