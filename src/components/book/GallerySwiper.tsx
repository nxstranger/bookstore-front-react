import React from 'react';
import styled from 'styled-components';
import SwiperCore, {
  Navigation, Pagination, A11y,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { back, front } from '../../modules/conf';
import { shortImagesInterface } from '../../modules/interfaces/modelInterfaces';

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
  margin: 0 0 40px 0;
  max-height: 460px;
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
    >
      { mediaData.length
        ? mediaArray.map((obj:shortImagesInterface) => (
          <SwiperSlide key={obj.name}>
            <StyledSlideWrapper>
              <StyledImage src={`${back.hostname}:${back.port}/${media}/${obj.name}_large.jpg`} alt="" />
            </StyledSlideWrapper>
          </SwiperSlide>
        ))
        : (
          <SwiperSlide key={0}>
            <StyledSlideWrapper>
              <StyledImage src={`${front.hostname}:${front.port}/logo512.png`} alt="" />
            </StyledSlideWrapper>
          </SwiperSlide>
        ) }
    </Swiper>
  );
};

export default GallerySwiper;
