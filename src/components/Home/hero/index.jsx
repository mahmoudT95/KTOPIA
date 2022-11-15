import Carousel from "react-bootstrap/Carousel";
import "./hero.scss";
import img1 from "../../../assets/images/home/hero/slide1.jpg";
import img2 from "../../../assets/images/home/hero/slide2.webp";
import img4 from "../../../assets/images/home/hero/slide4.jpg";
import bee from "../../../assets/images/home/hero/bee.png";
import flower from "../../../assets/images/home/hero/flower.png";
import star from "../../../assets/images/home/hero/star.png";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <>
      <section className="hero">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 img_slide"
              src={img1}
              alt="First slide"
            />
            <Carousel.Caption>
              <div className="slide_description">
                <h1>WELCOME TO KITOPIA</h1>
                <h4>
                  Kitopia is a children's community that includes everything a
                  child needs to enjoy the time spent on the Internet.
                </h4>
                <Link to="/login">GET STARTED</Link>
                <img src={bee} alt="bee" className="des_img1" />
                <img src={flower} alt="bee" className="des_img2" />
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img_slide"
              src={img2}
              alt="Second slide"
            />

            <Carousel.Caption>
              <div className="slide_description">
                <h1>WELCOME TO KITOPIA</h1>
                <h4>
                We provide comprehensive, educational and entertaining content for your child.
                </h4>
                <Link to="/login">GET STARTED</Link>
                <img src={star} alt="bee" className="des_img1" />
                <img src={bee} alt="bee" className="des_img2" />
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img_slide"
              src={img4}
              alt="Third slide"
            />
            <Carousel.Caption>
              <div className="slide_description">
                <h1>WELCOME TO KITOPIA</h1>
                <h4>
                Kitopia is an inclusive community for children!
                </h4>
                <Link to="/login">GET STARTED</Link>
                <img src={star} alt="bee" className="des_img1" />
                <img src={flower} alt="bee" className="des_img2" />
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  );
};

export default Hero;
