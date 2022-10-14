import React from "react";
import AnimatedText from "react-animated-text-content";
import Carousel from "react-bootstrap/Carousel";
import sl1 from "../../Assets/Images/sl1.jpg";
import sl2 from "../../Assets/Images/sl2.jpg";
import sl3 from "../../Assets/Images/sl3.jpg";
import sl4 from "../../Assets/Images/sl4.jpg";
import sl5 from "../../Assets/Images/sl5.jpg";
import "./Home.css";

export default function Slider() {
  return (
    <div className="sliderbody" style={{ display: "block" }}>
      <Carousel>
        <Carousel.Item interval={1800}>
          <div className="sl1">
            <img src={sl1} alt width={1500} height={700}></img>
          </div>
          <Carousel.Caption className="content">
            <AnimatedText
              type="words" // animate words or chars
              animation={{
                x: "200px",
                y: "-20px",
                scale: 1.1,
                ease: "ease-in-out",
              }}
              animationType="lights"
              interval={0.02}
              duration={0.6}
              tag="p"
              className="animated-paragraph"
              includeWhiteSpaces
              threshold={0.1}
              rootMargin="20%"
            >
              A new way of being a BRAND Be faithful to your own taste, because
              nothing you really like is ever out of style
            </AnimatedText>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1800}>
          <div className="sl2">
            <img src={sl2} alt width={1500} height={700}></img>
          </div>
          <Carousel.Caption className="content">
            <AnimatedText
              type="words" // animate words or chars
              animation={{
                x: "200px",
                y: "-20px",
                scale: 1.1,
                ease: "ease-in-out",
              }}
              animationType="lights"
              interval={0.02}
              duration={0.6}
              tag="p"
              className="animated-paragraph"
              includeWhiteSpaces
              threshold={0.1}
              rootMargin="20%"
            >
              Creativity is allowing yourself to make mistakes. Design is
              knowing which ones to keep.
            </AnimatedText>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={1800}>
          <div className="sl3">
            <img src={sl3} alt width={1500} height={700}></img>
          </div>
          <Carousel.Caption className="content">
            <AnimatedText
              type="words" // animate words or chars
              animation={{
                x: "200px",
                y: "-20px",
                scale: 1.1,
                ease: "ease-in-out",
              }}
              animationType="lights"
              interval={0.02}
              duration={0.8}
              tag="p"
              className="animated-paragraph"
              includeWhiteSpaces
              threshold={0.1}
              rootMargin="20%"
            >
              Rawness and refinement are Not opposite ends of a luxurious
              spectrum
            </AnimatedText>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={1800}>
          <div className="sl4">
            <img src={sl4} alt width={1500} height={700}></img>
          </div>
          <Carousel.Caption className="content">
            <AnimatedText
              type="words" // animate words or chars
              animation={{
                x: "200px",
                y: "-20px",
                scale: 1.1,
                ease: "ease-in-out",
              }}
              animationType="lights"
              interval={0.02}
              duration={0.8}
              tag="p"
              className="animated-paragraph"
              includeWhiteSpaces
              threshold={0.1}
              rootMargin="20%"
            >
              Everything is designed. Few things are designed well
            </AnimatedText>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={1800}>
          <div className="sl5">
            <img src={sl5} alt width={1500} height={700}></img>
          </div>
          <Carousel.Caption className="content">
            <AnimatedText
              type="words" // animate words or chars
              animation={{
                x: "200px",
                y: "-20px",
                scale: 1.1,
                ease: "ease-in-out",
              }}
              animationType="lights"
              interval={0.06}
              duration={0.8}
              tag="p"
              className="animated-paragraph"
              includeWhiteSpaces
              threshold={0.1}
              rootMargin="20%"
            >
              Luxury is when it seems flawless When you reach the right balance
              between all elements.
            </AnimatedText>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
