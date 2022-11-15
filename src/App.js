import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Start Component
import Home from "./components/Home";
import CaVideosList from "./components/fun/cartoon_videos";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import FunList from "./components/fun/FunList";
import MuVideosList from "./components/fun/music_videos";
import GamesList from "./components/games/GamesList";
import LikedVideos from "./components/LikedVideos";
import Profile from "./components/Profile";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import Account from "./components/Account";
import EducationList from "./components/education/EducationList";
import CardGame from "./components/games/CardGame";
import Question from "./components/education/Questions";
import { AuthContextProvider } from "./components/Contexts/Authcontext";
import EducationLevels from "./components/education/EducationVideos/Levels";
import LevelPage from "./components/education/EducationVideos/LevelPage";
import SubjectVideos from "./components/education/EducationVideos/SubjectVideos";
import WatchVideo from "./components/WatchVideo";
import Footer from "./components/Footer";
import CartoonPage from "./components/fun/cartoon_videos/cartoonPage";
import { db } from "./components/firebase";
import CommentSection from "./components/commentSection";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  useEffect(() => {
    document.title = 'KITOPIA';
  }, []);
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp db={db} />}></Route>
          <Route path="/account" element={<Account />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/edu" element={<EducationList />}></Route>
          <Route path="/question" element={<Question />}></Route>
          <Route path="/edu/levels" element={<EducationLevels />}></Route>
          <Route path="/edu/levels/:levelName" element={<LevelPage />}></Route>
          <Route
            path="/edu/levels/:levelName/:subjectName"
            element={<SubjectVideos />}
          ></Route>
          <Route path="/fun" element={<FunList />}></Route>
          <Route path="/cartoon" element={<CaVideosList />}></Route>
          <Route path="/music" element={<MuVideosList />}></Route>
          <Route path="/watch/:id" element={<WatchVideo />}></Route>
          <Route path="/cartoon/page/:name" element={<CartoonPage />}></Route>
          <Route path="/games" element={<GamesList />}></Route>
          <Route path="/cardgame" element={<CardGame />}></Route>
          <Route path="/liked" element={<LikedVideos />}></Route>
          <Route path="/comment" element={<CommentSection />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
