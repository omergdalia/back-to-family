import React from "react";
import { Carousel, Image } from "antd";

import crete1 from '../../images/crete/crt1.png';
import crete2 from '../../images/crete/crt2.png';
import crete3 from '../../images/crete/crt3.png';
import crete4 from '../../images/crete/crt4.png';
import crete5 from '../../images/crete/crt5.png';
import crete6 from '../../images/crete/crt6.png';
import crete7 from '../../images/crete/crt7.png';


const galleryImages = [
    {alt: "crete1", src: crete1},
    {alt: "crete2", src: crete2},
    {alt: "crete3", src: crete3},
    {alt: "crete4", src: crete4},
    {alt: "crete5", src: crete5},
    {alt: "crete6", src: crete6},
    {alt: "crete7", src: crete7},
];


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
            galleryImages.map(({alt, src}) => 
                <div>
                    <Image src={src} preview={false} alt={alt} style={contentStyle} />
                </div>
            )
        }
    </Carousel>
);

export default Gallery;