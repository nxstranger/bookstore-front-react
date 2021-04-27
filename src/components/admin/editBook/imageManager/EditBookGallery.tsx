import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import PictureElement from './picture/PictureElement';
import { useAppDispatch, useAppSelector } from '../../../../modules/redux/hooks';
import { getBookImages, asyncLoadImagesBookId } from '../../../../modules/redux/adminPanelSlice';
import { imagesInterface } from '../../../../modules/interfaces/modelInterfaces';

const GalleryWrapper = styled.div`
  padding: 10px;
  margin: 10px;
  border: 1px solid gray;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const EditBookGallery = () => {
  const dispatch = useAppDispatch();
  const selector: imagesInterface[] = useAppSelector(getBookImages);
  const [images, setImages] = useState<imagesInterface[]>(useAppSelector(getBookImages));
  const { id } = useParams<{id: string }>();

  useEffect(() => {
    dispatch(asyncLoadImagesBookId(+id));
    setImages(selector);
  }, []);

  useEffect(() => {
    setImages(selector);
  }, [selector]);
  return (
    <GalleryWrapper>
      {
        (images.length)
          ? images.map((obj:imagesInterface) => (
            <PictureElement
              image={obj}
              key={obj.id}
            />
          ))
          : (<div> no image </div>)
      }
    </GalleryWrapper>
  );
};

export default EditBookGallery;
