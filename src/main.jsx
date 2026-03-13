import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Lenis from "@studio-freight/lenis";

const lenis = new Lenis({
  duration: 1.6,
  smooth: true,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// interceptar links con #
document.addEventListener("click", (e) => {
  const anchor = e.target.closest("a[href^='#']");
  if (!anchor) return;

  e.preventDefault();

  const target = anchor.getAttribute("href");

  lenis.scrollTo(target);
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
