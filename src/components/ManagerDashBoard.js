import React, { useState } from "react";
import { Button, Card, Modal } from 'react-bootstrap';
import woman2 from '../assets/woman2.png'
import '../styles/ManagerDashBoard.css'

function ManagerDashBoard() {
  const employees = [{
    "id": "77777",
    "name": "Beanie",
    "gender": "Female",
    "techStack": [
      "React JS",
      "Javascript",
      "Selinium"
    ],
    "upVotes": 1,
    "upVoteStack": [
      "Jessica"
    ],
    "previousProject": [
      "LBG",
      "IIIT"
    ],
    "jobDescription": "Highly talented associat with an impeccable expertise in React Js",
    "__v": 0,
    image: woman2
  }, {
    "id": "72347",
    "name": "Beanie",
    "gender": "Female",
    "techStack": [
      "React JS",
      "Javascript",
      "Selinium"
    ],
    "upVotes": 1,
    "upVoteStack": [
      "Jessica"
    ],
    "previousProject": [
      "LBG",
      "IIIT"
    ],
    "jobDescription": "Highly talented associat with an impeccable expertise in React Js",
    "__v": 0,
    image: woman2

  }, {
    "id": "723477",
    "name": "Beanie",
    "gender": "Female",
    "techStack": [
      "React JS ",
      " Javascript",
      " Selinium"
    ],
    "upVotes": 1,
    "upVoteStack": [
      "Jessica"
    ],
    "previousProject": [
      "LBG",
      "IIIT"
    ],
    "jobDescription": "Highly talented associat with an impeccable expertise in React Js",
    "__v": 0,
    image: woman2

  }]
  // for  modal
  const [show, setShow] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState([])
  const handleClose = () => setShow(false);
  const handleShow = (empId) => {
    setShow(true);
    setSelectedEmployee(employees.filter(employee => employee.id === empId))
    console.log(selectedEmployee);
  }
  return <div className="vh-100 d-flex justify-content-center align-items-center gap-3">
    {employees.map(employee => (<Card style={{ width: '18rem' }} onClick={() => handleShow(employee.id)} className="cursor-pointer">
      <Card.Img variant="" src={employee.image} />
      {/* <img src={employee.image}></img> */}
      <Card.Body>
        <Card.Title>{employee.name}</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
        <p>  {employee.techStack.map(tech => tech)}</p>

        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>))}
    {
      selectedEmployee.map(selectedEmployee => (<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>{selectedEmployee.jobDescription}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>))
    }

  </div>;
}

export default ManagerDashBoard;
