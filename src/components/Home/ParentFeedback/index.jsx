import { FaStar, FaChild } from "react-icons/fa";
import parent1 from "../../../assets/images/home/parents_feedback/parent-1.png";
import parent2 from "../../../assets/images/home/parents_feedback/parent-2.png";
import parent3 from "../../../assets/images/home/parents_feedback/parent-3.png";
import parent4 from "../../../assets/images/home/parents_feedback/parent-4.jpg";
import parent5 from "../../../assets/images/home/parents_feedback/parent-5.jpg";
import parent6 from "../../../assets/images/home/parents_feedback/parent-6.jpg";
import "./ParentFeedback.scss";
const ParentFeedback = () => {
  return (
    <section className="parents-feedback-section mt-5">
      <div className="section-title d-flex justify-content-center text-uppercase  mb-5 position-relative">
        <h2>parents feedback</h2>
        <FaChild className="child-icon position-absolute" />
      </div>

      <div className="container">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-interval="false"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="offset-lg-1 col-lg-5">
                  <div className="feedback rounded-5 position-relative">
                    <h3 className="parent-name mb-2 text-capitalize">
                      mario salles
                    </h3>
                    <div className="rating text-warning mb-2">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <q>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Repellat ab voluptate voluptatum! Ad possimus doloremque
                      inventore blanditiis nihil odio dolorum. Facilis
                      repudiandae minima cum voluptas repellat nihil dolore sed
                      ratione.
                    </q>
                    <figure className="position-absolute">
                      <img src={parent1} alt="parent-1" />
                    </figure>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="feedback rounded-5 position-relative">
                    <h3 className="parent-name  mb-2 text-capitalize">
                      jane doe
                    </h3>
                    <div className="rating text-warning mb-2">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <q>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Repellat ab voluptate voluptatum! Ad possimus doloremque
                      inventore blanditiis nihil odio dolorum. Facilis
                      repudiandae minima cum voluptas repellat nihil dolore sed
                      ratione.
                    </q>
                    <figure className="position-absolute">
                      <img src={parent2} alt="parent-2" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="offset-lg-1 col-lg-5">
                  <div className="feedback rounded-5 position-relative">
                    <h3 className="parent-name mb-2 text-capitalize">
                      maria silveira
                    </h3>
                    <div className="rating text-warning mb-2">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <q>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Repellat ab voluptate voluptatum! Ad possimus doloremque
                      inventore blanditiis nihil odio dolorum. Facilis
                      repudiandae minima cum voluptas repellat nihil dolore sed
                      ratione.
                    </q>
                    <figure className="position-absolute">
                      <img src={parent3} alt="parent-3" />
                    </figure>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="feedback rounded-5 position-relative">
                    <h3 className="parent-name  mb-2 text-capitalize">
                      vilken salles
                    </h3>
                    <div className="rating text-warning mb-2">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <q>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Repellat ab voluptate voluptatum! Ad possimus doloremque
                      inventore blanditiis nihil odio dolorum. Facilis
                      repudiandae minima cum voluptas repellat nihil dolore sed
                      ratione.
                    </q>
                    <figure className="position-absolute">
                      <img src={parent4} alt="parent-4" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="row">
                <div className="offset-lg-1 col-lg-5">
                  <div className="feedback rounded-5 position-relative">
                    <h3 className="parent-name mb-2 text-capitalize">
                      julia stan
                    </h3>
                    <div className="rating text-warning mb-2">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <q>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Repellat ab voluptate voluptatum! Ad possimus doloremque
                      inventore blanditiis nihil odio dolorum. Facilis
                      repudiandae minima cum voluptas repellat nihil dolore sed
                      ratione.
                    </q>
                    <figure className="position-absolute">
                      <img src={parent5} alt="parent-5" />
                    </figure>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="feedback rounded-5 position-relative">
                    <h3 className="parent-name  mb-2 text-capitalize">
                      mary john
                    </h3>
                    <div className="rating text-warning mb-2">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <q>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Repellat ab voluptate voluptatum! Ad possimus doloremque
                      inventore blanditiis nihil odio dolorum. Facilis
                      repudiandae minima cum voluptas repellat nihil dolore sed
                      ratione.
                    </q>
                    <figure className="position-absolute">
                      <img src={parent6} alt="parent-6" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ParentFeedback;
