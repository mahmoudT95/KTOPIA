import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSubjects } from "../../../../redux/subjectsSlice";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const EducationLevel = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const level=params.levelName
  useEffect(() => {
    dispatch(getSubjects(level));
  }, [dispatch,level]);
  const { subjects } = useSelector((state) => state.subjects);
  return (
    <div className="container row mx-auto gy-3  pt-5 mt-5" id="cardWrap">
      {subjects.map((subject) => {
        return (
          <div className="col-12 col-md-6 col-xl-4 mb-5" key={subject.id}>
            <div className="my-card">
              <Link to={`/edu/levels/${level}/${subject.title}`}>
              <div className="image w-100 rounded " >
                <img className="w-100 h-100 rounded" src={subject.img} alt={subject.title} />
              </div>
              </Link>
              <div className="content">
                <h4 className="card-text">{subject.title}</h4>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EducationLevel;
