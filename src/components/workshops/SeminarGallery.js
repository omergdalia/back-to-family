import React from "react";
import { Carousel, Image } from "antd";

function importAll(r) {
    return r.keys().map(r);
}


const galleryImages = importAll(
    require.context('../../images/resorts/resort2', false, /\.(webp|png|jpe?g|svg)$/)
);

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
  
const Gallery = ({id}) => (
    <Carousel id={id} autoplay effect="fade" style={carouselStyle} className="col-1">
        {
            galleryImages.map((value, index) => 
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