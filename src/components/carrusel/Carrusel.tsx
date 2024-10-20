/* eslint-disable @typescript-eslint/no-explicit-any */
import Slider from "react-slick";

// IMPORTADOS
import "./carrusel.scss";

interface CarruselProps {
  images: any[];
}

const Carrusel = ({ images }: CarruselProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
  };

  return (
    <div className="carrusel-fullscreen">
      <Slider {...settings}>
        {images.map((img, index) => {
          console.log(img); return (
            <div key={index} className="slide">
              <img src={img.image} alt={`Slide ${index + 1}`} />
            </div>
          )
        })}
      </Slider>
    </div>
  );
};

export default Carrusel;
