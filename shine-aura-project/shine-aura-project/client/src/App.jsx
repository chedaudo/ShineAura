import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import './assets/css/global.css'
import Navbar from './components/common/nav-bar/nav-bar';
import Footer from './components/common/footer/footer';
import ScrollToTop from "./utils/scroll-to-top/scroll-to-top";
import Signin from './pages/signin/signin';
import ForgotPassword from './pages/forgot-password/forgot-password-page';
import Signup from './pages/signup/signup';
import Homepage from './pages/homepage/homepage';
import AboutUsPage from './pages/about-us/about-us-page';
import PolicyPage from './pages/policy/policy'
import  Contact from "./pages/contact/contact-page";
import Payment from "./pages/payment/paymentpage";
import User from "./pages/userdetail/userdetail";
// import Productpage from "./pages/";
import Cart from "./pages/cartpage/Cartpage"
function App() {
  const [load] = useState(true);
  return (
    <Router>
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
          <ScrollToTop />
          <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgotpass" element={<ForgotPassword />} />
              <Route path="/about-us" element={<AboutUsPage />} />
              <Route path="/policy" element={<PolicyPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/payment" element={<Payment />} />
              {/* <Route path="/product" element={<Productpage />} /> */}
              <Route path="/cart" element={<Cart />} />
              <Route path="/user" element={<User />} />
          </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App