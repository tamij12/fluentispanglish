"use client";
import AboutMe from "./AboutMe";
import Benefits from "./Benefits";
import Footer from "./Footer";
import Hero from "./Hero";
import Info from "./Info";
import More from "./More";
import NavBar from "./NavBar";
import Testimonials from "./Testimonials";

import { Fade, Slide } from "react-awesome-reveal";

export default function Home() {
  return (
    <div className="min-w-80">
      <NavBar />
      <Hero />
      <Fade cascade damping={0.2}>
      <Info />
        <AboutMe />
        <Testimonials />
      </Fade>
      <Slide>
        <Benefits />
      </Slide>
      <More />
      <Footer />
    </div>
  );
}
