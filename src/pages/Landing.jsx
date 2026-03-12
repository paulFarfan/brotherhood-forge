import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import Problem from "../components/sections/Problem";
import Solution from "../components/sections/Solution";
import FocusMode from "../components/sections/FocusMode";
import Community from "../components/sections/Community";
import Features from "../components/sections/Features";
import Experts from "../components/sections/Experts";
import Events from "../components/sections/Events";
import CTA from "../components/sections/CTA";
import Footer from "../components/layout/Footer";

export default function Landing() {
  return (
    <>
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <FocusMode />
      <Community />
      <Features />
      <Experts />
      <Events />
      <CTA />
      <Footer />
    </>
  );
}
