import React from "react";
import "./imgScroll.scss";
import Slider from "react-slick";

interface ImgScrollProps {
  images: { img: string; title: string; description: string }[];
}

const ImgScroll: React.FC<ImgScrollProps> = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
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
          <div key={index} className="slideScroll">
            <img src={img.img} alt={`Slide ${index + 1}`} />
            <div className="overlayScroll">
              <h2>{img.title}</h2>
              <p>{img.description}</p>
              <button>Ver más</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImgScroll;
