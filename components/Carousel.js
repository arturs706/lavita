import React from 'react';
import Glider from 'react-glider';

export default function Carousel() {
    return (
        <div>
             <Glider
          slidesToScroll={1}
          slidesToShow={3}
          draggable={true}
          hasDots={true}
          hasArrows={true}
        ></Glider>
        </div>
    )
}

