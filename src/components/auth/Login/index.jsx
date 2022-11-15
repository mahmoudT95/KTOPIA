// import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import loginImg from "../../../assets/images/auth/parent.jpg";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { UserAuth } from "../../Contexts/Authcontext";
import { getAuth } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
function Login() {
  const auth = getAuth();
  const user = auth.currentUser;
  // const {
  //   formState: { errors },
  // } = useForm();
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [error, setErroer] = useState("");
  const navigate = useNavigate();
  const { signIn } = UserAuth();
  // const { isLoggedin } = UserAuth()
  console.log(error);
  const handlesubmit = async (e) => {
    e.preventDefault();
    setErroer("");
    try {
      await signIn(email, password);
      // isLoggedin[1](true);
      // console.log(isLoggedin);
      navigate("../fun");
    } catch (e) {
      setErroer(e.message);
      console.log(e.message);
      toast(e.message);
    }
  };

  // const onSubmit = (data) => console.log(data);
  if (user !== null) {
    navigate("../fun");
  }
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="offset-md-2 col-md-8">
          <Form
            onSubmit={handlesubmit}
            className="pt-5 px-5 mt-5 rounded-5 auth"
          >
            <div className="row ">
              <div className="col-md-12 login mb-3 rounded-4 pt-5">
                <div className=" d-flex justify-content-around  text-center mb-4 py-5">
                  <div className="image mb-3">
                    <img
                      className="rounded-circle paimg"
                      src={loginImg}
                      alt=""
                    />
                  </div>
                  <div className="inputs px-2">
                    {/*Email*/}
                    <Form.Group className="mb-3" controlId="formBasicusername">
                      <Form.Control
                        className="mb-3 py-2 rounded-5"
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email "
                      />
                    </Form.Group>

                    {/* password */}
                    <Form.Group className="mb-3" controlId="formBasicpawwsord">
                      <Form.Control
                        className="mb-3 py-2 rounded-5"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                      />
                    </Form.Group>
                    <label className="switch">
                      <input type="checkbox" />
                      <span className="slider "></span>
                      <span className="text-light mb-3"> Keep Me Login</span>
                    </label>
                    <p className="text-light">Login With Social Media</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="submit text-center">
              <Button className="my-3 log py-2 px-5 fs-5" type="submit">
                Login
              </Button>
              <p className="pb-3">
                Don't have an account ?
                <span>
                  <Link className="text-decoration-none" to="/signup">
                    SignUp
                  </Link>
                </span>
              </p>
            </div>
          </Form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
