import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import parentImg from "../../../assets/images/auth/parent.jpg";
import childImg from "../../../assets/images/auth/childsignup.jpg";
import "./SignUp.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAuth, createUserWithEmailAndPassword,updateProfile  } from "firebase/auth";
function SignUp(props) {
  const auth = getAuth();
  const {
    formState: { errors },
  } = useForm();
  // Authentication
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName ,setDisplayName] = useState("");

  const [error, setErroer] = useState("");
  

  const [profile, setprofile] = useState({
    parentName: "",
    parentDate: "",
    childName: "",
    childAge: "",
  });

  // Saving Data
  function handlechange(e) {
    profile[e.target.id] = e.target.value;
    setprofile({ ...profile, profile });
  }
  const savechanges = async (e) => {
    e.preventDefault();
    try {
      let users = await  createUserWithEmailAndPassword(auth ,email, password).then((userCredential) => {
        // Signed in 
        console.log(userCredential);
        const user = userCredential.user
        updateProfile(auth.currentUser, {
          displayName: displayName, photoURL: "https://firebasestorage.googleapis.com/v0/b/kitopiaa.appspot.com/o/users%2Fktopia.png?alt=media&token=255b238b-2d1e-418c-837f-98d15705d951",
          parentName :displayName
        }).then(() => {
          // Profile updated!
          toast("All in! Welcome in Kitopia");
        }).catch((error) => {
          toast(error)
        });
        console.log(user)
        // ...
      })
    } catch (e) {
      setErroer(e.message);
      toast(error);
      console.log(error.error)
    }
  };

  const [selectedImages, setSelectedImages] = useState([]);

  const onSelectFile = (event) => {
    event.preventDefault();
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);
    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedImages((previousImages) => previousImages.concat(imagesArray));
  };
  const uploadImg = (e) => {
    e.preventDefault();
    document.getElementById("selectFile").click();
  };
  return (
    <div className="container cont">
      <div className="row">
        <div className="offset-md-2 col-md-8">
          <Form className="w-10 mt-5 pt-3 px-5 auth rounded-5">
            <div className="row ">
            <h2 className="text-warning text-center text-capitalize">registration form</h2>
              {/* parent & child */}
              <div className="col-md-6 rounded-5 parent-child w-100 m-auto  card shadow py-4">
                {/* parent */}
                <div className="parent d-flex justify-content-around">
                  <div className="image mb-3 d-flex  align-items-center">
                    <img
                      className="paimg"
                      src={parentImg}
                      alt=""
                    />
                  </div>
                  <div className="iputs">
                    {/* parent Name */}
                    <Form.Group className="mb-3 inp" >
                      <Form.Control
                        type="text"
                        id="parentName"
                        className=""
                        placeholder="Parent Name"
                        onChange={handlechange}
                      />
                      {error && <div> parent name is requried</div>}
                    </Form.Group>
                    {/* email */}
                    <Form.Group className="mb-3 inp" >
                      <Form.Control
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        id="email"
                        placeholder="Email"
                      />
                      {error && <div>email is required</div>}
                    </Form.Group>
                    {/*password */}
                    <Form.Group
                      className="mb-3 inp"
                     
                    >
                      <Form.Control
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        id="password"
                        placeholder="password"
                      />
                      {error && <div>pssaword is required</div>}
                    </Form.Group>
                    {/*Date */}
                    <Form.Group
                      className="mb-3 inp"
                     
                    >
                      <Form.Control
                        type="date"
                        id="parentDate"
                        placeholder="date"
                        onChange={handlechange}
                      />
                      {error && <div> parent date is requried</div>}
                    </Form.Group>
                  </div>
                </div>
                {/* child */}
                <div className="child d-flex justify-content-around">
                  <div className="image mb-3 d-flex  align-items-center">
                    <img
                      className="chimg"
                      src={childImg}
                      alt=""
                    />
                  </div>
                  <div className="iputs">
                    {/* child Name */}
                    <Form.Group className="mb-3" >
                      <Form.Control
                      
                        type="text"
                        id="childName"
                        className="inp"
                        placeholder="Child Name "
                        onChange={(e) => setDisplayName(e.target.value)}
                      />
                      {error && <div> child name is requried</div>}
                    </Form.Group>

                    {/* child age */}
                    <Form.Group className="mb-3" >
                      <Form.Control
                        type="number"
                        id="childAge"
                        className="inp"
                        placeholder="Child Age"
                        onChange={handlechange}
                      />
                      {error && <div> parent age is requried</div>}
                    </Form.Group>

                    {/* upload image*/}
                    <Form.Group className="mb-3" >
                      <section>
                        <div className="uploading">
                          <div className="row">
                            <div className="col-md-6 ">
                              <input
                                type="file"
                                className="w-100 text-light"
                                onChange={onSelectFile}
                                id="selectFile"
                              />
                              <button
                                onClick={uploadImg}
                                className="btn btn-warning text-white fs-6 fw-bold rounded-3"
                              >
                                Upload Child Image
                              </button>
                            </div>
                            <div className="col-md-6">
                              <div className="images w-100">
                                {selectedImages &&
                                  selectedImages.map((image) => {
                                    return (
                                      <div key={image} className="image ">
                                        <img
                                          src={image}
                                          className="w-100 card"
                                          alt="upload"
                                        />
                                      </div>
                                    );
                                  })}
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      
                      {errors?.email?.type === "required" && (
                        <p className="text-danger">phone number is required</p>
                      )}
                    </Form.Group>
                  </div>
                </div>
              </div>
            </div>
            <div className="submit text-center ">
              
              <Button
                onClick={savechanges}
                className="my-3 sign px-5 rounded-3"
                type="submit"
                disabled={ !email ||  !displayName ||  !password?true:false}
              >
                Sign Up
              </Button>

              <p className="pb-2">
                Already have an account?
                <span>
                  <Link className="link" to="/login">
                    Login
                  </Link>
                </span>
              </p>
            </div>
          </Form>
        </div>
      </div>
      <div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default SignUp;
