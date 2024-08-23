import React, { useEffect } from "react";
import logo from "./images/logo.svg";
import "./header.css";

interface NavItem {
  href: string;
  text: string;
}

const navItems: NavItem[] = [
  { text: "home", href: "/home" },
  { text: "profile", href: "/profile" },
  { text: "message", href: "/message" },
  { text: "camera", href: "/camera" },
  { text: "settings", href: "/settings" },
];

export const Header = () => {

  useEffect(() => {
    const handleScroll = () => {
      let header = document.querySelector("header");
      if (header) {
        header.classList.toggle("sticky", window.scrollY > 0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main>
      <header>
        <a className="logo" href="/">
          <img src={logo} alt="logo" />
        </a>
        <nav>
          {navItems.map((item) => (
            <a key={item.text} href={item.href}>
              {item.text}
            </a>
          ))}
        </nav>
      </header>
      <section className="banner"></section>  
      <footer>g.aleprojetos</footer>   
    </main>
  );
};
