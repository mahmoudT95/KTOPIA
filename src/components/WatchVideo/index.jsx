import React, { useState, useEffect } from "react";
import "./WatchVideo.scss";
import image from "../../assets/images/home/about/about2.jpg";
import thumbnail from "../../assets/images/fun/thumbnail.jpg";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import axios from "axios";
import CommentSection from '../commentSection/index'
import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@mui/material";
import { FaHeart } from "react-icons/fa";


const WatchVideo = () => {
  // get video id
  const params = useParams();
  // get video url
  const url = `https://www.youtube.com/watch?v=${params.id}`;

  // change liked status in db file
  const [videoLiked, seTvideoLiked] = useState(false);
  // get videos details
  const [details, setDetails] = useState({});
  // data that will send to db file
  const [liked, setLiked] = useState({
    id: params.id,
    video_url: url,
    liked: videoLiked,
    title: "SpongeBob Schwammkopf | Das Beste aus Staffel 2 in 50 Minuten | Nickelodeon Deutschland",
    description: "If you were up against Bikini Bottom's most famous fry cook, what would be your weapon of choice? Perhaps a snowball cannon.",
  });
console.log(setLiked)
  useEffect(() => {
    // get (liked or not) video from json db file
    axios
      .get(`http://localhost:3005/likedVideos/${params.id}`)
      .then((res) => {
        // set liked status in db file
        seTvideoLiked(true);
        // liked status
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.id]);

  useEffect(() => {
    // get videos details in db file
    const options = {
      method: "GET",
      url: "https://youtube-v3-alternative.p.rapidapi.com/video",
      params: { id: params.id },
      headers: {
        "X-RapidAPI-Key": "4437b4cf0bmsh853167890a039dep1ff7fbjsn3fd485dc9031",
        "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        setDetails(response.data);
        // console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });             
  }, [details,params.id]);

  // handel liked button
  const handlAddToliked = () => {
    if (videoLiked === false) {
      seTvideoLiked(true);
      // post liked video in json db file
      axios
        .post("http://localhost:3005/likedVideos", liked)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (videoLiked === true) {
      seTvideoLiked(false);
      // delete video from json db file
      axios
        .delete(`http://localhost:3005/likedVideos/${liked.id}`)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <section className="watch-wrapper pt-4">
      <div className="container-fluid">
        <div className="row">
          <div className="player-wrapper col-md-8 col-sm-12">
            <ReactPlayer
              className="video-player mb-2"
              url={url}
              controls
              playsInline
              width="100%"
              // height="24vh"
              
            />
            <div className="description mb-4">
              <div className="info">
                <Avatar alt="avatar" src={image} className="me-3 border" />
                <div className="video-info">
                  <p className="video-title mb-0">{details.title}</p>
                  <p className="channel-name text-black-50 mb-0">
                    {details.channelTitle}
                  </p>
                </div>
              </div>
              <div className="reactions">
                <div className="views"></div>
                <div className="likes d-flex" onClick={handlAddToliked}>
                  {/* change color of heart icon if liked  */}
                  <FaHeart
                    className="fs-4"
                    style={{ color: videoLiked ? "red" : "black" }}
                  />
                  <span className="text-black-50 ms-2"></span>
                </div>
              </div>
            </div>
            {/* Comments */}
            <CommentSection/>
          </div>

          {/* Recommended Videos */}
          <div className="col-md-4 col-sm-12">
            <Card sx={{ Width: 100 }} className="mb-3">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={thumbnail}
                  alt="green iguana"
                />
                <CardContent>
                  <p className="fs-3 mb-0">Lizard</p>
                  <p>
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </p>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{ Width: 100 }} className="mb-3">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={thumbnail}
                  alt="green iguana"
                />
                <CardContent>
                  <p className="fs-3 mb-0">Lizard</p>
                  <p>
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </p>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{ Width: 100 }} className="mb-3">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={thumbnail}
                  alt="green iguana"
                />
                <CardContent>
                  <p className="fs-3 mb-0">Lizard</p>
                  <p>
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </p>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WatchVideo;

