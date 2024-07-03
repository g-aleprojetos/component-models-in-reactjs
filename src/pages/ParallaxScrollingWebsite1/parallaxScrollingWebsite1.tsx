import React, { useEffect } from "react";
import "./parallaxScrollingWebsite1.css";
import image1 from "./images/01.png";
import image2 from "./images/02.png";
import image3 from "./images/03.png";
import image4 from "./images/04.png";

export const ParallaxScrollingWebsite1 = () => {

  useEffect(() => {
    const handleScroll = () => {
      let text = document.getElementById("text");
      let img1 = document.getElementById("img1");
      let img2 = document.getElementById("img2");
      let img3 = document.getElementById("img3");
  
      let value = window.scrollY;
  
      if (text) text.style.marginTop = value * -1.5 + "px";
      if (img1) img1.style.top = value * 0.75 + "px";
      if (img2) img2.style.top = value * 0.5 + "px";
      if (img3) img3.style.top = value * 0.25 + "px";
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main>
      <header id="header">
        <a href="#logo" className="logo">
          Ramadan
        </a>
        <ul>
          <li>
            <a href="#home" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#donate">Donate</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </header>
      <section id="scene">
        <h2 id="text">Ramadan Kareen</h2>
        <img src={image1} alt="" id="img1" />
        <img src={image2} alt="" id="img2" />
        <img src={image3} alt="" id="img3" />
        <img src={image4} alt="" id="img4" />
      </section>
      <div className="sec">
        <h2>Parallax Scrolling Effects</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
          dicta delectus sunt alias ducimus neque, laudantium ipsam. Totam
          blanditiis dolores in debitis magni sed obcaecati itaque ullam
          deserunt nobis! Delectus id, exercitationem beatae magni totam animi
          provident odit cupiditate inventore est architecto nulla hic
          recusandae doloremque quia neque modi consectetur. Nobis accusantium
          quam, eveniet debitis quisquam ad, voluptatibus temporibus ratione
          fuga iusto voluptates quia vitae harum non, atque dolore natus aliquid
          porro ex consectetur tempora quasi? Temporibus excepturi perferendis
          ad, provident assumenda soluta id ullam sed repellendus veniam.
          Nesciunt, inventore ab. Aliquid accusantium beatae fuga tempore
          cupiditate deserunt placeat? Mollitia nulla inventore explicabo illo
          obcaecati? Reiciendis, quasi, vero iure animi enim distinctio odit
          saepe in nemo dolores maiores esse nulla rem nisi eveniet quod soluta?
          Veniam, aut nihil at quos itaque libero iusto rerum, incidunt,
          consequuntur repellat aperiam voluptas expedita. <br />
          <br />
          Eum minima reiciendis ipsa corrupti placeat nulla veniam? Quam
          voluptatem nulla fugit molestiae consequuntur nemo, possimus officia
          asperiores laborum ut quisquam distinctio accusamus enim velit
          accusantium dolor ad, deleniti sint. Voluptatibus delectus ab numquam
          qui, dolore cupiditate veniam tenetur animi minima eaque omnis
          nesciunt magnam sunt consectetur quos dolorem, suscipit vitae
          voluptas, incidunt nam iusto id sapiente beatae? Corporis, dignissimos
          minus eius molestias ratione nihil. <br />
          <br /> Cum officiis eius ipsum laborum, eum quisquam consequatur
          ratione soluta minus quaerat harum in cupiditate voluptatem ab fugit
          ut atque esse unde eaque veniam voluptas quasi placeat aliquid!
          Pariatur voluptates aliquid ipsam quisquam! Magnam suscipit alias
          aliquid sit sapiente ut placeat laborum doloremque accusamus tenetur
          obcaecati magni, porro non deserunt excepturi in dolorem culpa libero
          repellendus, amet nihil nesciunt doloribus. Nihil harum laboriosam
          blanditiis voluptas porro illo distinctio fuga voluptates ad labore.
          Aut dolorem, temporibus modi vel qui pariatur! Ipsum voluptates atque
          culpa eveniet doloribus laudantium dolore omnis, ipsa dolorem quis,
          vitae veritatis dignissimos labore!
        </p>
      </div>
    </main>
  );
};
