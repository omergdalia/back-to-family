import React from "react";
import { Carousel, Image } from "antd";

import crete1 from '../../images/crete/crete1.webp';
import crete2 from '../../images/crete/crete2.webp';
import crete3 from '../../images/crete/crete3.webp';
import crete4 from '../../images/crete/crete4.webp';
import crete5 from '../../images/crete/crete5.webp';

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
    marginLeft: '50px'
}
  
const Gallery = () => (
    <Carousel autoplay id="crete-seminar-gallery" style={carouselStyle}>
        <div><Image src={crete1} alt="Crete 1" style={contentStyle} /></div>
        <div><Image src={crete2} alt="Crete 2" style={contentStyle}/></div>
        <div><Image src={crete3} alt="Crete 3" style={contentStyle} /></div>
        <div><Image src={crete4} alt="Crete 4" style={contentStyle}/></div>
        <div><Image src={crete5} alt="Crete 5" style={contentStyle} /></div>
    </Carousel>
);

export default Gallery;