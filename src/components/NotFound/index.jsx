import notfound from "../../assets/images/notfound/404.gif";
const NotFound = () => {
  return (
    <section className="notfound-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="image text-center">
            <img src={notfound} alt="" className="w-50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
