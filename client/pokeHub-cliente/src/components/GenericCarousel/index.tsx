  import React from "react";
  import "./carousel.css";
  import AliceCarousel, { AnimationType } from 'react-alice-carousel';
  import 'react-alice-carousel/lib/alice-carousel.css';

  interface ICarouselProps{
      children?: React.ReactNode;
      settingsResponsive?: {
          [breakpoint: number]: {
            items: number;
          };
      };
  }

  const Carousel: React.FC<ICarouselProps> = (props) => {
    const settings = {
      dots: true,
      disableDotsControls: true,
      disableButtonsControls: true,
      mouseTracking: true,
      marginRight: 350,
      infinite: false,
      swipeDelta: 100,
      slidesToShow: 2,
      slidesToScroll: 2,
      responsive: {
        0: { items: 4 },
        768: { items: 4 },
        1024: { items: 8 }
      },
      animationType: "slide" as AnimationType
    };

    return (
      <AliceCarousel {...settings} responsive={props.settingsResponsive}>
          {props.children}
      </AliceCarousel>
    );
  }

  export default Carousel;
