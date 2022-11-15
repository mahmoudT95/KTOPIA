import { Link } from "react-router-dom";
import "./CaVideosList.scss";
import { cartoons } from "./cartoonData";
const CaVideosList = () => {
  return (
    <div id="carVid">
      <main className="site-wrapper container">
        <div className="pt-table ">
          <div className="pt-tablecell page-home ">
            <div className="mt-5">
              <div className=" row gx-0">
                {cartoons.map((cartoon) => {
                  return (
                    <Link
                      to={`../cartoon/page/${cartoon.name}`}
                      className=" col-12  col-sm-4 me-sm-5 col-md-3 me-md-3 col-lg-2 me-lg-5 col-xl-2  me-xl-1 gy-5"
                      key={cartoon.id}
                    >
                      <div className="hexagon-menu clear">
                        <div className="hexagon-item ">
                          <div className="hex-item">
                            <div></div>
                            <div></div>
                            <div></div>
                          </div>
                          <div className="hex-item">
                            <div></div>
                            <div></div>
                            <div></div>
                          </div>
                          <div className="hex-content">
                            <span className="hex-content-inner">     
                              <span className="icon">
                                <img
                                  className="w-100 rounded-circle"
                                  src={cartoon.pic}
                                  alt="{cartoon.name}"
                                />
                                <span className="title">{cartoon.name}</span>
                              </span>
                            </span>
                            <svg
                              viewBox="0 0 173.20508075688772 200"
                              height="200"
                              width="174"
                            >
                              <path
                                d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                                fill="#ec9600"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CaVideosList;
