import React, { useState, forwardRef,useRef } from 'react'
import SignIn from './Signin'
import { Link, useNavigate } from "react-router-dom";
import { Container, Form, Button, Row, Col, Modal } from 'react-bootstrap'
import signin_image from '../assets/signin_image.svg'
import home_background from '../assets/home_background.svg'
import '../styles/Home.css'
import { useContext } from "react";
import contextObject from "../letsContext";
import ContactUs from './ContactUs';
import About from './About';
const Home = forwardRef((props, ref) => {
 
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
  // for the modal pop up
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
    handleClose()
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
    else {
      errors.usermail = ""
    }
    if (!formValues.password) {
      errors.password = "Password is required !"
    }
    return errors;
  }

  return (
    <Container ref={ref} id='homeSection' className='w-100 d-flex align-items-center justify-content-even mt-0 pt-0'>
      <Row className="justify-content-md-center align-items-md-center">
        <Col md={4} id="home-left-container">
          <Row className="justify-content-md-start">Welcome to,</Row>
          <Row className="justify-content-md-start h1 job-wizard">Job Wizard</Row>
          <Row className='h6'>Lorem Ipsum is simply dummy cimen book. It has survived not only five centuries, but al</Row>
          <Row className="justify-content-md-start mt-4">
            <Col md={4} className="justify-content-md-start">
              <Button className='p-3' onClick={handleShow}>Sign In</Button>

            </Col>
            <Col md={5}>
              <Button as={Link} to='/sign' className='p-3'>New here ?</Button>

            </Col>
          </Row>
        </Col>
        <Col md={6} >
          <img src={signin_image} id='signin_image' />
        </Col>
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                onChange={handleChange}
                name="usermail"
              />
              {<p>{error.usermail}</p>}
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                placeholder="Enter Password"
                type="password"
                onChange={handleChange}
                name="password"
              />
              {error.password ? <p>{error.password}</p> : null}

            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Forgot Password
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Sign In
          </Button>
        </Modal.Footer>
      </Modal>
      {/* <About ref={about} />
      <ContactUs ref={contact} /> */}
    </Container>
  );
});

export default Home