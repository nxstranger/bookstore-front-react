import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ImagesInterface } from '../../../../../modules/interfaces/imagesInterface';
import { useAppSelector } from '../../../../../modules/redux/hooks';
import axios from '../../../../../modules/axios/config';

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
  const selector = useAppSelector((state) => state.adminPanel.book?.media);
  const [bookMedia, setMedia] = useState<string | undefined>('');
  const link = `http://localhost:8080/${bookMedia}/${image.name}_thumbnail.jpg`;
  console.log(link);
  useEffect(() => {
    setMedia(selector);
  }, []);
  const delImage = () => {
    axios.delete(`images/id/${elem.image.id}`)
      .then(() => console.log('deleted'))
      .catch((err) => console.log(err));
  };
  return (
    <StyledPictureWrapper>
      { (selector)
        ? (<img src={link} alt="text" />)
        : '' }
      <DelImageButton onClick={delImage}>del</DelImageButton>
    </StyledPictureWrapper>
  );
};

export default PictureElement;
