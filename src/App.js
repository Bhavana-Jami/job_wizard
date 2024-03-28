import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import SignUp from "./components/Signup";
import SignIn from "./components/Signin";
import { OurContextProvider } from "./letsContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import Explore from "./components/Explore";
import EmpDashBoard from "./components/EmpDashBoard";
import ManagerDashBoard from "./components/ManagerDashBoard";
import Footer from "./components/Footer";
import ForgotPsd from "./components/ForgotPsd";
import { Container } from 'react-bootstrap'
import Home from "./components/Home";
import { useRef } from "react";
import About from "./components/About";

{/* <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
  integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
  crossorigin="anonymous"
/> */}
function App() {
  const home = useRef(null)
  const about = useRef(null)
  const contact = useRef(null)
  return (
    <Container className=" d-flex flex-column" fluid>
      <OurContextProvider>
        <BrowserRouter>
          <NavBar home={home} about={about} contact={contact} />
          <Home ref={home} />
          <About ref={about} />
          <ContactUs ref={contact} />
          <Routes>
            <Route path="/employeeDashboard" element={<EmpDashBoard />} />
            <Route path="/managerDashboard" element={<ManagerDashBoard />} />
            {/* <Route path="/contactUs" element={<ContactUs ref={contact} />} /> */}
            {/* <Route path="/" element={<Home ref={home}  />} /> */}
            {/* <Route path="/about" element={<About ref={about} />} /> */}

            {/* <Route path="/" element={<SignIn />} /> */}

            {/* <Route path="/" element={<ManagerDashBoard />} />

            <Route path="contactUs" element={<ContactUs />} />
            <Route path="profile" element={<Profile />} />
            <Route path="explore" element={<Explore />} />
           
            <Route path="navBar" element={<NavBar />} />
            <Route path="footer" element={<Footer />} />
            <Route path="signUp" element={<SignUp />} />
            <Route path="forgotPsd" element={<ForgotPsd />} /> */}

          </Routes>
          {/* <Footer /> */}
        </BrowserRouter>
      </OurContextProvider>
    </Container>
  );
}

export default App;
