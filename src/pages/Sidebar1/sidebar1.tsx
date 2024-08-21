import React from "react";
import "./sidebar1.css";
import { IonIcon } from "@ionic/react";
import {
  home,
  person,
  chatbubble,
  camera,
  settings,
} from "ionicons/icons";
import logo from "./images/logo.svg";

type NavItem = {
  icon: string;
  text: string;
};

const navItems: NavItem[] = [
  { text: "home", icon: home },
  { text: "profile", icon: person },
  { text: "message", icon: chatbubble },
  { text: "camera", icon: camera },
  { text: "settings", icon: settings },
];

export const Sidebar1 = () => {
  const [active, setActive] = React.useState(0);

  const handleNavigation = (index: number) => setActive(index);

  return (
    <section>
      <aside className="sidebar">
        <div className="inner">
          <div className="header">
            <img src={logo} alt="logo" />
            <h1>Teams.co</h1>
          </div>
          <nav
            className="menu"
            style={{ "--top": `${active * 56}px` } as React.CSSProperties}
          >
            {navItems.map((item, index) => (
              <button
                key={index}
                className={active === index ? "active" : ""}
                onClick={() => handleNavigation(index)}
              >
                <span><IonIcon icon={item.icon} size="large"></IonIcon></span>
                <p>{item.text}</p>
              </button>
            ))}
          </nav>
        </div>
      </aside>
    </section>
  );
};
