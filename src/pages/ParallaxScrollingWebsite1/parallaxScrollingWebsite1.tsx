import React from "react";
import "./parallaxScrollingWebsite1.css";

export const ParallaxScrollingWebsite1 = () => {
  return (
    <main>
      <header id="header">
        <a href="#logo" className="logo">Ramadan</a>
        <ul>
            <li><a href="#home" className="active">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#donate">Donate</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
      </header>
      <section id="scene">
        <h2 id="text">Ramadan Kareen</h2>
      </section>
    </main>
  );
}