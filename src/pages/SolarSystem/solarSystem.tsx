import React from "react";
import "./solarSystem.css";

export const SolarSystem = () => {
  return (
    <section>
      <div className="Sun"></div>
      <div className="Orbit Mercury-Orbit">
        <div className="Mercury"></div>
      </div>
      <div className="Orbit Venus-Orbit">
        <div className="Venus"></div>
      </div>
      <div className="Orbit Earth-Orbit">
        <div className="Earth">
          <div className="Moon-Orbit">
            <div className="Moon"></div>
          </div>
        </div>
      </div>
      <div className="Orbit Mars-Orbit">
        <div className="Mars"></div>
      </div>
      <div className="Orbit Jupiter-Orbit">
        <div className="Jupiter"></div>
      </div>
      <div className="Orbit Saturn-Orbit">
        <div className="Saturn">
          <div className="Saturn-Ring"></div>
        </div>
      </div>
      <div className="Orbit Uranus-Orbit">
        <div className="Uranus"></div>
      </div>
      <div className="Orbit Neptune-Orbit">
        <div className="Neptune"></div>
      </div>
    </section>
  );
};
