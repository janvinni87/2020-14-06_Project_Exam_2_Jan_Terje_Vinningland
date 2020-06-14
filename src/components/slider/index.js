import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';
import Image from 'material-ui-image';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

const onChange = () => {
};

const onClickItem = () => {
};

const onClickThumb = () => {
};

const Slider = ({ path = '', images = [] }) => {

  const listSlides = images.map((value, index) =>
    <div key={index}>
      <Image
        src={`./img/${path}${value}`}
        aspectRatio='(21/9)'
      />
    </div>
  );

  return (
    <Carousel
      dynamicHeight
      showThumbs={false}
      showStatus={false}
      showArrows
      autoPlay
      onChange={onChange}
      onClickItem={onClickItem}
      onClickThumb={onClickThumb}
    >
      {listSlides}
    </Carousel>
  );
};

Slider.propTypes = {
  path: PropTypes.string,
  images: PropTypes.array,
};

export default Slider;

export { Slider };
