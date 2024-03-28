import React, { useEffect, useState } from "react";
import '../styles/SignIn.css'
// import { Verify } from "./veryify";
import { useContext } from "react";
import contextObject from "../letsContext";
import { Link, useNavigate } from "react-router-dom";
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import { useFetch } from "./useFetch";
import signin_image from '../assets/signin_image.svg'
function SignIn() {
  const credentials = [
    {
      email: "employee1@gmail.com",
      password: "employee1",
      tag: "employee",
    },
    {
      email: "employee2@gmail.com",
      password: "employee2",
      tag: "employee",
    },
    {
      email: "manager1@gmail.com",
      password: "manager1",
      tag: "manager",
    },
    {
      email: "manager2@gmail.com",
      password: "manager2",
      tag: "manager",
    }
  ];

  // const { isLoading, data, apiError } = useFetch("https://jsonplaceholder.typicode.com/users")
  const [formValues, setFormValues] = useState({
    usermail: "",
    password: "",
  });
  const [error, setError] = useState({})
  const [signInFlag, setSignInFlag] = useState(null)
  const [isManager, setIsManager] = useState(null)
  const [path, setPath] = useState(null)

  const userAuth = useContext(contextObject);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormValues(
      { ...formValues, [name]: value }
    );
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    setError(Validation(formValues))
    checkUser(formValues.usermail, formValues.password)
  };

  const navigate = useNavigate()

  const checkUser = (usermail, password) => {

    credentials.map((credential) => {
      if (credential.email == usermail && credential.password == password) {
        console.log("user is valid");
        if (credential.tag === "manager") {
          setIsManager(true);
          navigate("/managerDashboard");
          console.log("user is manager", isManager);
        } else if (credential.tag === "employee") {
          setIsManager(false);
          navigate("/employeeDashboard");
          console.log("user is an employee", isManager);
        }
      }
    });
  };

  const Validation = (formValues) => {
    const errors = {}
    if (!formValues.usermail) {
      errors.usermail = "Usermail is required !"
    }
    else{
      errors.usermail=""
    }
    if (!formValues.password) {
      errors.password = "Password is required !"
    }
    return errors;
  }

  return (

    <div className="h-100 d-flex justify-content-center align-items-center flex-column">
      <h2 className="mb-3">Sign In</h2>
      <Form className="">
        <Row className="justify-content-md-center mb-3">
          <Col lg={4}>
            <Form.Control
              placeholder="Enter Username"
              type="email"
              onChange={handleChange}
              name="usermail"
            />
          </Col>
        </Row>
        { <p>{error.usermail}</p> }
        <Row className="justify-content-md-center mb-3">
          <Col lg={4}>
            <Form.Control
              placeholder="Enter Password"
              type="password"
              onChange={handleChange}
              name="password"
            />
          </Col>
        </Row>
        {error.password ? <p>{error.password}</p> : null}

        <Row className="justify-content-md-center mb-3">
          <Col lg={4}>

            <Button className="w-100" type="submit" onClick={handleSubmit}>
              Sign In
            </Button>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col lg={4}>
            <a href="#" className="pe-4">New here?</a>
            <a href="#">Forgot Password?</a>
          </Col>
        </Row>
      </Form>
    </div>
  );


}

export default SignIn;
