import React, { useEffect } from "react";
import "./NavigationMenuIndicator1.css";
import { IonIcon } from "@ionic/react";
import {
  homeOutline,
  personOutline,
  chatbubbleOutline,
  cameraOutline,
  settingsOutline,
} from "ionicons/icons";

export const NavigationMenuIndicator1 = () => {
  useEffect(() => {
    const list = document.querySelectorAll<HTMLElement>(".list");

    function activeLink(item: HTMLElement) {
      list.forEach((item) => item.classList.remove("active"));
      item.classList.add("active");
    }

    const handleClick = function (this: HTMLElement) {
      activeLink(this);
    };

    list.forEach((item) => item.addEventListener("click", handleClick));

    return () => {
      list.forEach((item) => item.removeEventListener("click", handleClick));
    };
  }, []);

  return (
    <main>
      <div className="navigation">
        <ul>
          <li className="list active">
            <a href="#home">
              <span className="icon">
                <IonIcon icon={homeOutline}></IonIcon>
              </span>
              <span className="text">Home</span>
            </a>
          </li>
          <li className="list">
            <a href="#profile">
              <span className="icon">
                <IonIcon icon={personOutline}></IonIcon>
              </span>
              <span className="text">Profile</span>
            </a>
          </li>
          <li className="list">
            <a href="#message">
              <span className="icon">
                <IonIcon icon={chatbubbleOutline}></IonIcon>
              </span>
              <span className="text">Message</span>
            </a>
          </li>
          <li className="list">
            <a href="#photo">
              <span className="icon">
                <IonIcon icon={cameraOutline}></IonIcon>
              </span>
              <span className="text">Photo</span>
            </a>
          </li>
          <li className="list">
            <a href="#settings">
              <span className="icon">
                <IonIcon icon={settingsOutline}></IonIcon>
              </span>
              <span className="text">Settings</span>
            </a>
          </li>
          <div className="indicator"></div>
        </ul>
      </div>
    </main>
  );
};
