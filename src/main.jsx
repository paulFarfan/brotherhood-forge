import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MotionConfig } from "framer-motion";
import "./index.css";
import App from "./App.jsx";
import Lenis from "@studio-freight/lenis";

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

let lenis = null;

if (!prefersReducedMotion) {
  lenis = new Lenis({
    duration: 1.6,
    smooth: true,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}

document.addEventListener("click", (e) => {
  const anchor = e.target.closest("a[href^='#']");
  if (!anchor) return;

  e.preventDefault();

  const target = anchor.getAttribute("href");
  if (!target || target === "#") return;

  const el = document.querySelector(target);
  if (!el) return;

  if (lenis) {
    lenis.scrollTo(target);
  } else {
    el.scrollIntoView({ behavior: "auto", block: "start" });
  }
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MotionConfig reducedMotion="user">
      <App />
    </MotionConfig>
  </StrictMode>,
);
