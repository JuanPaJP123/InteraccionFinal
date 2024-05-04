import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Carrusel.css";

export default function Carrusel() {
  const PreveArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={`arrow prev-arrow ${className}`} onClick={onClick} />
    );
  };

  const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={`arrow next-arrow ${className}`} onClick={onClick} />
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PreveArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="carrusel">
      <Slider {...settings}>
        <div>
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ee4cc950700333.58d7586f2d6e8.png"
            alt="Carrusel"
            className="carrusel-image"
          />
        </div>
        <div>
          <img
            src="https://www.impresionesdigitalesstore.com.mx/assets/img/impresiones-store-digital-laminado.jpg"
            alt="Carrusel2"
            className="carrusel-image"

          />
        </div>
      </Slider>
    </div>
  );
}
