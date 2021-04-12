import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import PictureElement from './picture/PictureElement';
// eslint-disable-next-line no-unused-vars
import { useAppDispatch, useAppSelector } from '../../../../modules/redux/hooks';
// eslint-disable-next-line no-unused-vars
import { getBookImages, asyncLoadImagesBookId } from '../../../../modules/redux/adminPanelSlice';
import { ImagesInterface } from '../../../../modules/interfaces/imagesInterface';

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
  const selector: ImagesInterface[] = useAppSelector(getBookImages);
  const [images, setImages] = useState<ImagesInterface[]>(useAppSelector(getBookImages));
  const { id } = useParams<{id: string }>();

  useEffect(() => {
    dispatch(asyncLoadImagesBookId(+id));
    setImages(selector);
  }, []);

  useEffect(() => {
    console.log('EditBookGallery tick');
    // dispatch(asyncLoadImagesBookId(+id));
    setImages(selector);
  }, [selector]);
  return (
    <GalleryWrapper>
      {
        (images.length)
          ? images.map((obj:ImagesInterface) => (
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
