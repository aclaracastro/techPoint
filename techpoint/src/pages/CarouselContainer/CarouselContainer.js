import React from "react";
import "../CarouselContainer/CarouselContainer.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";
import Imagem from "../../assets/camisa-de-time.jpg";
import Imagem2 from "../../assets/camisa-de-time2.jpg";
import Imagem3 from "../../assets/camisa-de-time3.jfif";

const CarouselContainer = () => {
  return (
    <div className="box_banner">
      <ResponsiveCarousel
        infiniteLoop={true}
        autoPlay={true}
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img src={Imagem} alt="Slide 1" />
        </div>
        <div>
          <img src={Imagem2} alt="Slide 2" />
        </div>
        <div>
          <img src={Imagem3} alt="Slide 3" />
        </div>
      </ResponsiveCarousel>
    </div>
  );
};

export default CarouselContainer;
