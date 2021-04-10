import React from 'react';
import styled from 'styled-components';
import PictureElement from './picture/PictureElement';

const GalleryWrapper = styled.div`
  padding: 10px;
  margin: 10px;
  border: 1px solid gray;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const EditBookGallery = () => {
  const componentName: string = 'EditBookGallery';
  return (
    <GalleryWrapper>
      { componentName }
      <PictureElement />
      <PictureElement />
      <PictureElement />
      <PictureElement />
    </GalleryWrapper>
  );
};

export default EditBookGallery;
