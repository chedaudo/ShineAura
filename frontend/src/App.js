import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import ScrollToTop from "./Components/ScrollToTop";
import Signin from './Pages/Signin/Signin';
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword';
import Signup from './Pages/Signup/Signup';
// import Homepage from './Pages/Homepage/Homepage';s
// import AboutUsPage from './Pages/AboutUs/AboutUsPage'; 
// import PolicyPage from './Pages/Policy/Policy';
// import  Contact from "./Pages/Contactpage/Contactpage";
// import Payment from "./Pages/Payment/Payment";
// import Productpage from "./Pages/Productpage/Productpage";

function App() {
  const [load] = useState(true);

  return (
    <Router>
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotpass" element={<ForgotPassword />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/policy" element={<PolicyPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
