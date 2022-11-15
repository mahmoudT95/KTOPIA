import { Link } from "react-router-dom";
import preschool from "../../../../assets/images/education/preschool.jpg";
import younger from "../../../../assets/images/education/younger.png";
import older from "../../../../assets/images/education/older.jpg";
import "./Levels.scss";
const EducationLevels = () => {
  return (
    <section className="cards-wrapper py-5">
      <h1 className="age-heading mb-5">age</h1>
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
            <Link className="link" to="/edu/levels/preschool">
              <div className="child-card mb-5">
                <div className="image w-100 position-relative">
                  <img className="w-100 rounded-4" src={preschool} alt="" />
                  <div className="overlay w-100 h-100 position-absolute text-white">
                    <div className="d-flex flex-column justify-content-center align-items-center h-100 fw-bolder">
                      <span className="text-uppercase fs-4 fw-bold">
                        preschool
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <h3 className="p-2 m-auto w-50 text-center bg-warning rounded">
              1 - 3
            </h3>
          </div>
          <div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
            <Link className="link" to="/edu/levels/younger">
              <div className="child-card mb-5">
                <div className="image w-100 position-relative">
                  <img className="w-100 rounded-4" src={younger} alt="" />
                  <div className="overlay w-100 h-100 position-absolute text-white">
                    <div className="d-flex flex-column justify-content-center align-items-center h-100 fw-bolder">
                      <span className="text-uppercase fs-4 fw-bold">
                        younger
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <h3 className="p-2 m-auto w-50 text-center bg-warning rounded">
              4 - 8
            </h3>
          </div>
          <div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
            <Link className="link" to="/edu/levels/older">
              <div className="child-card mb-5">
                <div className="image w-100 position-relative">
                  <img className="w-100 rounded-4" src={older} alt="" />
                  <div className="overlay w-100 h-100 position-absolute text-white">
                    <div className="d-flex flex-column justify-content-center align-items-center h-100 fw-bolder">
                      <span className="text-uppercase fs-4 fw-bold">older</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <h3 className="p-2 m-auto w-50 text-center bg-warning rounded">
              9 -12
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationLevels;
