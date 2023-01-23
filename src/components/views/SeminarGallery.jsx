import React from "react";
import { Carousel, Image } from "antd";

const contentStyle = {
    height:'400px',
    Width:'auto',
    objectFit:'fill',
};

const carouselStyle ={
    borderRadius:'20px',
    overflow:'hidden',
    height:'400px',
    background:'teal',
};
  
const Gallery = ({ id, images }) => (
    <Carousel id={id} autoplay effect="fade" style={carouselStyle} className="col-1">
        {
            images.map((value, index) => 
                <div key={value}>
                    <Image
                        src={value} 
                        preview={false}
                        alt={`resort-image-${index}`}
                        style={contentStyle}
                    />
                </div>
            )
        }
    </Carousel>
);

export default Gallery;