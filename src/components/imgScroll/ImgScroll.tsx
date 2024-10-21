import React from "react";
import "./imgScroll.scss";
import Slider from "react-slick";
import { Button } from "@mui/material";
import IconArrowRight from "../../assets/icons/IconArrowRight";

interface ImgScrollProps {
  images: {
    img: string; title: string; description: string, code: string,
    path: string,
  }[];
  show?: number
}

const ImgScroll: React.FC<ImgScrollProps> = ({ images, show = 3 }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: show,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider className="sliderScroll" {...settings}>
        {images.map((img, index) => (
          <div key={index} className="slideScroll" >
            <img src={img.img} alt={`Slide ${index + 1}`} style={{ width: `${show < 3  && "80%" }` }}/>
            <div className="overlayScroll" >
              <h2>{img.title}</h2>
              <p style={{ width: `${show < 3 && "80%" }`}}>{img.description}</p>
              <Button disableTouchRipple className="btnCard size16" href={`${img.path}?${img.code}&${index}`}>
                Explorar <IconArrowRight color="#fff" />
              </Button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImgScroll;
