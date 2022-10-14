import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import sl1 from "../../Assets/Images/sl1.jpg";
import sl2 from "../../Assets/Images/sl2.jpg";
import sl3 from "../../Assets/Images/sl3.jpg";
import sl4 from "../../Assets/Images/sl4.jpg";
import sl5 from "../../Assets/Images/sl5.jpg";
import './Home.css';

export default function Slider() {
return (
    <div className='sliderbody' style={{ display: 'block'}}>

    <Carousel >
        <Carousel.Item interval={1800}>
        <div  className="sl1" >
        <img src={sl1} alt width={1500} height={700}>
        </img>
      </div>
        <Carousel.Caption className='content' >
            <h3>A new way of being a BRAND</h3>
            <p>Be faithful to your own taste, because nothing you really like is ever out of style</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1800}>
        <div className="sl2">
        <img src={sl2} alt width={1500} height={700}>
        </img>
      </div>
        <Carousel.Caption className='content'>
            <h3>Creativity is allowing yourself to make mistakes. </h3>
            <p>Design is knowing which ones to keep</p>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={1800}>
        <div className="sl3" >
        <img src={sl3} alt width={1500} height={700} >
        </img>
      </div>
        <Carousel.Caption className='content'>
            <h3>Rawness and refinement are </h3>
            <p>Not opposite ends of a luxurious spectrum</p>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={1800}>
        <div className="sl4" >
        <img src={sl4} alt width={1500} height={700}>
        </img>
      </div>
        <Carousel.Caption className='content'>
            <h3>Everything is designed.</h3>
            <p> Few things are designed wel</p>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={1800}>
        <div className="sl5">
        <img src={sl5} alt width={1500} height={700}>
        </img>
      </div>
        <Carousel.Caption className='content'>
            <h3>Luxury is when it seems flawless  </h3>
            <p>When you reach the right balance between all elements. </p>
        </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    
    </div>
);
}