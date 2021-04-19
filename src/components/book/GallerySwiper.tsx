import React from 'react';
import styled from 'styled-components';
import SwiperCore, {
  Navigation, Pagination, A11y,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { shortImagesInterface } from '../../modules/interfaces/imagesInterface';

SwiperCore.use([Navigation, Pagination, A11y]);

interface galleryProp {
  media: string,
  mediaArray: shortImagesInterface[],
}

const StyledSlideWrapper = styled(SwiperSlide)`
  width: 500px;
  height: 500px;
  margin: auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;  
`;

const StyledImage = styled.img`
  margin: auto;
  max-height: 500px;
`;

const GallerySwiper = (prop :galleryProp) => {
  const {
    media,
    mediaArray,
  } = prop;
  const mediaData = [...mediaArray];
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      { mediaData.length
        ? mediaArray.map((obj:shortImagesInterface) => (
          <SwiperSlide key={obj.name}>
            <StyledSlideWrapper>
              <StyledImage src={`http://localhost:8080/${media}/${obj.name}_large.jpg`} alt="" />
            </StyledSlideWrapper>
          </SwiperSlide>
        ))
        : '' }
    </Swiper>
  );
};

export default GallerySwiper;
