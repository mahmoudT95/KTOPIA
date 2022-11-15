import "./services.scss";
import {FaChild } from "react-icons/fa";
import preschool from "../../../assets/images/home/education/preschool.jpg";
import younger from "../../../assets/images/home/education/younger.jpg";
import older from "../../../assets/images/home/education/older.jpg";
import kids from "../../../assets//images/home/education/kids.png";
import { Link } from "react-router-dom";

function Service() {
  return (
    <section className="services">
      <div className="container">
        <div className="section-title d-flex justify-content-center text-uppercase  mb-5 position-relative">
          <h2>education</h2>
          <FaChild className="child-icon position-absolute" />
        </div>

        <div className="serve_cards_wrapper row ">
          <div className="serve_card col-md-3 col-8 ">
            <img src={preschool} alt="img" width="100%" />
            <Link to="/edu/levels/preschool">PRE SCHOOL</Link>
            <p>Kitopia contains a variety of the year stage from 1 to 3 years.</p>
          </div>
          <div className="serve_card col-md-3 col-8 ">
            <img src={younger} alt="img" width="100%" />
            <Link to="/edu/levels/younger">YOUNGER</Link>
            <p>
              Kitubia contains a variety of the year stage for children from 4 to 8 years.
            </p>
          </div>
          <div className="serve_card col-md-3 col-8 ">
            <img src={older} alt="img" width="100%" />
            <Link to="/edu/levels/older">OLDER</Link>
            <p>
              Kitopia contains a variety of general stage for more than 8 years
            </p>
          </div>
        </div>
      </div>
      <div className="serve_botton ">
        <div className="container">
          <div className="serve_botton_wrapper row align-items-center">
            <div className="serve_botton_left col-md-6 col-12">
              <h3>ENTERTAINMENT CONTENT</h3>
              <p>
                The Kitopia platform provides a special section for entertainment
                with content suitable for children.
              </p>
              <Link to="/games">GET STARTED</Link>
            </div>
            <div className="serve_botton_right col-md-6 col-12">
              <img src={kids} alt="img" width="100%" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
