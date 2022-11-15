import child from "../../../assets/images/home/contact_us/child.png";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import {  FaChild } from "react-icons/fa";
import "./ContactUS.scss";
const ContactUS = () => {
    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <section className="contact-us-section mb-5">
          <div className="section-title d-flex justify-content-center text-uppercase position-relative mb-5">
            <h2>contact us</h2>
            <FaChild className="child-icon position-absolute" />
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-8">
                <div className="contact rounded-5 p-5 mb-md-0 mb-4">
                  <Form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                      <div className="offset-md-2 col-md-4 mb-2">
                        <Form.Group className="mb-3" controlId="formBasicFName">
                          <Form.Control
                            {...register("FName", {
                              required: true,
                            })}
                            type="text"
                            placeholder="Enter First Name"
                          />
                          {errors?.FName?.type === "required" && (
                            <Form.Text className="text-warning fw-bold">
                              first name is required
                            </Form.Text>
                          )}
                        </Form.Group>
                      </div>
                      <div className="col-md-4 mb-2">
                        <Form.Group className="mb-3" controlId="formBasicLName">
                          <Form.Control
                            {...register("LName", {
                              required: true,
                            })}
                            type="text"
                            placeholder="Enter Last Name"
                          />
                          {errors?.FName?.type === "required" && (
                            <Form.Text className="text-warning fw-bold">
                              Last name is required
                            </Form.Text>
                          )}
                        </Form.Group>
                      </div>

                      <div className="offset-md-2 col-md-8 mb-2">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Control
                            className="py-2"
                            {...register("email", {
                              required: true,
                              pattern:
                                /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                            })}
                            type="email"
                            placeholder="Enter Email"
                          />
                          {errors?.email?.type === "required" && (
                            <Form.Text className="text-warning fw-bold">
                              Email is required
                            </Form.Text>
                          )}
                          {errors?.email?.type === "pattern" && (
                            <Form.Text className="text-warning fw-bold">
                              Email is Not Vaild
                            </Form.Text>
                          )}
                        </Form.Group>
                      </div>

                      <div className="offset-md-2 col-md-8 mb-2">
                        <Form.Group
                          className="mb-3"
                          controlId="formBasiSubject"
                        >
                          <Form.Control
                            className="py-2"
                            {...register("subject", {
                              required: true,
                            })}
                            type="text"
                            placeholder="Enter Subject"
                          />
                          {errors?.subject?.type === "required" && (
                            <Form.Text className="text-warning fw-bold">
                              Subject is required
                            </Form.Text>
                          )}
                        </Form.Group>
                      </div>

                      <div className="offset-md-2 col-md-8 mb-2">
                        <Form.Group
                          className="mb-3"
                          controlId="messageForm.ControlTextarea1"
                        >
                          <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Enter your message"
                            {...register("message", {
                              required: true,
                            })}
                          />
                          {errors?.message?.type === "required" && (
                            <Form.Text className="text-warning fw-bold">
                              message is required
                            </Form.Text>
                          )}
                        </Form.Group>
                      </div>
                    </div>

                    <button
                      className="submit btn btn-warning text-white d-flex m-auto fs-5 rounded-5"
                      type="submit"
                    >
                      send message
                    </button>
                  </Form>
                </div>
              </div>
              <div className="col-md-4">
                <figure>
                  <img className="w-100" src={child} alt="child" />
                </figure>
              </div>
            </div>
          </div>
        </section>
  )
}

export default ContactUS
