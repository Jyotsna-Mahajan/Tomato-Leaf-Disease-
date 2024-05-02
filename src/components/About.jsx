import { Container } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import daun from "../assets/daun1.png";
import user1 from "../assets/aakarsh.jpeg";

export const About = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="about" id="about">
      <Container>
        <div className="d-flex">
          <div className="image">
            <img src={daun} alt="About_image" />
          </div>
          <div className="wrap-text">
            <h2 className="tag">About</h2>
            <p>
             Tomato is one of the horticultural plants that are commonly found in India. Tomatoes are known as plants that are susceptible to diseases. This disease can be recognized by observing physical changes in the plant such as leaves. If the plant is already infected with the disease, proper handling is needed to prevent crop failure. Therefore, this project is created to classify diseases in tomatoes based on leaf images along with descriptions and treatments of the diseases using machine learning. This project is called Dectma.
            </p>
          </div>
        </div>
      </Container>
      <div className="row">
        <div className="col-12">
          <div className="about-bx wow zoomIn">
            <Carousel
              responsive={responsive}
              infinite={true}
              className="owl-carousel owl-theme about-slider"
            >
              <div className="item">
                <img src={user1} alt="Aakarsh" />
                <h5>Aakarsh Taneja</h5>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};
