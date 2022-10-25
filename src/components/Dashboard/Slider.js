import React from "react";
import Carousel from "react-bootstrap/Carousel";
import sli1 from "../../Assets/Images/sli1.svg";
import sli2 from "../../Assets/Images/sli2.svg";
import sli3 from "../../Assets/Images/sli3.svg";
import sli4 from "../../Assets/Images/sli4.svg";
import sli5 from "../../Assets/Images/sli5.svg";
import sli6 from "../../Assets/Images/sli5.svg";
import sli7 from "../../Assets/Images/sli5.svg";
import sli8 from "../../Assets/Images/sli5.svg";
import sli9 from "../../Assets/Images/sli5.svg";
import "./Home.css";

export default function Slider() {
  return (
    <div className="sliderbody" style={{ display: "block" }}>
      <Carousel>
        <Carousel.Item interval={1800}>
          <div className="sl1">
            <img src={sli1} alt="" width={1500} height={500}></img>
          </div>
        
        </Carousel.Item>
        <Carousel.Item interval={1800}>
          <div className="sl2">
          <img src={sli2} alt="" width={1500} height={500}></img>
          </div>
        
        </Carousel.Item>

        <Carousel.Item interval={1800}>
          <div className="sl3">
            <img src={sli3} alt="" width={1500} height={500}></img>
          </div>
    
        </Carousel.Item>

        <Carousel.Item interval={1800}>
          <div className="sl4">
            <img src={sli4} alt="" width={1500} height={500}></img>
          </div>
          
        </Carousel.Item>

        <Carousel.Item interval={1800}>
          <div className="sl5">
            <img src={sli5} alt="" width={1500} height={500}></img>
          </div>
      
        </Carousel.Item>
        <Carousel.Item interval={1800}>
          <div className="sl6">
            <img src={sli6} alt="" width={1500} height={500}></img>
          </div>
         
        </Carousel.Item>
        <Carousel.Item interval={1800}>
          <div className="sl7">
            <img src={sli7} alt="" width={1500} height={500}></img>
          </div>
     
        </Carousel.Item>
        <Carousel.Item interval={1800}>
          <div className="sl8">
            <img src={sli8} alt="" width={1500} height={500}></img>
          </div>
        
        </Carousel.Item>
        
        <Carousel.Item interval={1800}>
          <div className="sl9">
            <img src={sli9} alt="" width={1500} height={500}></img>
          </div>
        
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
