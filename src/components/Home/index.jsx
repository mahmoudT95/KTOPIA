import { Fragment } from "react";
import Hero from "./hero/index";
import Service from "./services/index";
import About from "./about/index";
import ParentFeedback from "./ParentFeedback";
import ContactUS from "./ContactUS";
import "./Home.scss";
import ToTopIcon from "../ToTopIcon";
const Home = () => {
  return (
    <Fragment>
      <main>
        <Hero></Hero>
        <Service></Service>
        <About></About>
        <ParentFeedback></ParentFeedback>
        <ContactUS></ContactUS>
        <ToTopIcon/>
      </main>
    </Fragment>
  );
};

export default Home;
