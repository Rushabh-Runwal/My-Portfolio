import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Head from "./components/Header";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";
import About from "./components/About";
import MyWork from "./components/MyWork";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

const App = () => {
  AOS.init({
    duration: 1200,
  });

  return (
    <div>
      <Head />
      <NavBar />
      <About />
      <MyWork />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
