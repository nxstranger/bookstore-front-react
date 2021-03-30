import React from 'react';
import styled from 'styled-components';

const GalleryDiv = styled.div`
  background: #f0f0f0;
  width: 500px;
  height: 500px;
`;

function Gallery({ img }: {img:string}) {
  return (
    <GalleryDiv>
      <img src={`${img}`} alt="" />
    </GalleryDiv>
  );
}

export default Gallery;
