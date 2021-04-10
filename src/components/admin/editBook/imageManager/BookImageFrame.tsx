import React from 'react';
import ImageUploader from './ImageUploader';
import EditBookGallery from './EditBookGallery';

const BookImageFrame = () => {
  const componentName: string = 'BookImageFrame';
  return (
    <div>
      { componentName }
      <ImageUploader />
      <EditBookGallery />
    </div>
  );
};

export default BookImageFrame;
