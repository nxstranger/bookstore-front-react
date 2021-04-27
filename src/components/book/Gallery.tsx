import React from 'react';
import styled from 'styled-components';
import { shortImagesInterface } from '../../modules/interfaces/modelInterfaces';
import GallerySwiper from './GallerySwiper';

const GalleryDiv = styled.div`
  width: 600px;
  height: 500px;
  margin: auto;
`;

interface galleryInterface {
  media: string,
  mediaArray: shortImagesInterface[] | undefined,
}

function Gallery({ media, mediaArray } : galleryInterface) {
  return (
    <GalleryDiv>
      {
        (media && mediaArray)
          ? <GallerySwiper media={media} mediaArray={mediaArray} key={media} />
          : ''
      }
    </GalleryDiv>
  );
}

export default Gallery;
