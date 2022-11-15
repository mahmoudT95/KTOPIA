import "./FunList.scss";
import music from "../../../assets/images/fun/bee.png";
import television from "../../../assets/images/fun/television.png";
import { Link } from "react-router-dom";
const FunList = () => {
  return (
    <section className="fun-wrapper pt-5">
      <h1 className="fun-heading mb-5">Fun Videos</h1>
      <div className="fun-list position-relative">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="fun">
                <div className="fun-icon mb-4">
                  <Link to="/music">
                    <img src={music} className="bee" alt="Music" />
                  </Link>
                </div>
                <div className="fun-category">Music Videos</div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="fun">
                <div className="fun-icon mb-4">
                  <Link to="/cartoon">
                    <img src={television} className="tv" alt="Cartoon" />
                    </Link>
                </div>
                <div className="fun-category">Cartoon Videos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunList;
