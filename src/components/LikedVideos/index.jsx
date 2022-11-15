import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const LikedVideos = () => {
  const [details,setDetails]=useState({})
  const [likedVideos,setLikedVideos]= useState([])
  useEffect(() => {
    // get Liked length
    axios.get(`http://localhost:3005/likedVideos`).then((res)=>{
      setLikedVideos(res.data)
      // console.log(res)
      }).catch((err)=>{
        console.log(err)
      })
}, [likedVideos.id]);
// console.log(setDetails);
  return (
    <div className="container row mx-auto gy-3  pt-5 mt-5 " id="cardWrap">
    {likedVideos.map((video,i) => {
      // get image video from url 
      const imageUrl = `https://img.youtube.com/vi/${video.id}/0.jpg`;
      return (
        <div className="col-xl-4" key={video.id}>
          <div className="my-card">
            <div className="image w-100">
              <Link to={`/watch/${video.id}`}>
                {" "}
                <img
                  className="w-100"
                  src={imageUrl}
                  alt="thumbnail"
                />
              </Link>
            </div>
            <div className="content">
              <h4 className="card-text">{video.title}</h4>
              <p>{details.description}</p>
            </div>
          </div>
        </div>
      );
    })}
  </div>
  )
};

export default LikedVideos;
