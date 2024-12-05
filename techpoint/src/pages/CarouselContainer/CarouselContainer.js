import React from "react";
import "../CarouselContainer/CarouselContainer.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";
import Imagem from "../../assets/samsung.png";
import Imagem2 from "../../assets/dell.webp";
import Imagem3 from '../../assets/samsung-ia.png';

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
          <img src={Imagem} alt="dell" />
        </div>
        <div>
          <img src={Imagem2} alt="samsung" />
        </div>
        <div>
          <img src={Imagem3} alt="samsung-ia" />
        </div>
      </ResponsiveCarousel>
    </div>
  );
};

export default CarouselContainer;
