import React from "react";
import "./about.scss";
import {FaChild } from "react-icons/fa";
import Carousel from "react-bootstrap/Carousel";
import slide1 from "../../../assets/images/home/about/about1.jpg";
import slide2 from "../../../assets/images/home/about/about2.jpg";
import slide3 from "../../../assets/images/home/about/about3.jpg";
import img1 from "../../../assets/images/home/about/1.png";
import img2 from "../../../assets/images/home/about/2.png";
import img3 from "../../../assets/images/home/about/3.png";
import img4 from "../../../assets/images/home/about/4.png";
import img5 from "../../../assets/images/home/about/5.png";
import img6 from "../../../assets/images/home/about/6.png";
function About() {
  return (
    <section className="aboutUs">
      <div className="container">
        <div className="section-title d-flex justify-content-center text-uppercase  mb-5 position-relative">
          <h2>about</h2>
          <FaChild className="child-icon position-absolute" />
        </div>
        <div className="aboutUs_wrapper">
          <div className="about_top row ">
            <div className="about_left col-md-4 col-12 m-auto">
              <Carousel className="Carousel_outline">
                <Carousel.Item>
                  <img
                    className="d-block w-100 slide_about"
                    src={slide1}
                    alt="First slide"
                  />
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 slide_about"
                    src={slide2}
                    alt="Second slide"
                  />

                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 slide_about"
                    src={slide3}
                    alt="Third slide"
                  />

                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="about_right col-md-8 col-8 m-auto">
              <h3>Our Philosophy</h3>
              <p>
                Kitopia is a children's community that includes everything a
                child needs to enjoy the time spent on the Internet. The child
                is affected by what he sees on social media, including videos
                and advertisements, and this is reflected in his personality and
                thinking. Therefore, Kitopia takes care of this point in order
                to preserve the thinking and personality of the child and helps
                him build his personality without negative effects.
              </p>
              
            </div>
          </div>
         
          <div className="about_cards_wrapper row gy-5 gx-5 mt-5">
            <div className="about_card col-md-4 col-9">
              <img src={img1} alt="img" width="50%" />
              <h4>Educational</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
                itaque ipsum sit harum.
              </p>
            </div>
            <div className="about_card col-md-4 col-9">
              <img src={img2} alt="img" width="40%" />
              <h4>Questions?</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
                itaque ipsum sit harum.
              </p>
            </div>
            <div className="about_card col-md-4 col-9">
              <img src={img3} alt="img" width="40%" />
              <h4>E-videos</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
                itaque ipsum sit harum.
              </p>
            </div>
            <div className="about_card col-md-4 col-9">
              <img src={img4} alt="img" width="40%" />
              <h4>Stories</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
                itaque ipsum sit harum.
              </p>
            </div>
            <div className="about_card col-md-4 col-9">
              <img src={img5} alt="img" width="40%" />
              <h4>Music</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
                itaque ipsum sit harum.
              </p>
            </div>
            <div className="about_card col-md-4 col-9">
              <img src={img6} alt="img" width="40%" />
              <h4>Games</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
                itaque ipsum sit harum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
