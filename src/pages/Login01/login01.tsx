import React from "react";
import "./login01.css";
import bg from "./images/bg.jpg";
import girl from "./images/girl.png";
import trees from "./images/trees.png";
import leaf_01 from "./images/leaf_01.png";
import leaf_02 from "./images/leaf_02.png";
import leaf_03 from "./images/leaf_03.png";
import leaf_04 from "./images/leaf_04.png";

export const Login01 = () => {
  return (
    <section>
      <div className="Leaves">
        <div className="set">
          <div><img src={leaf_01} alt=""/></div>
          <div><img src={leaf_02} alt=""/></div>
          <div><img src={leaf_03} alt=""/></div>
          <div><img src={leaf_04} alt=""/></div>
          <div><img src={leaf_01} alt=""/></div>
          <div><img src={leaf_02} alt=""/></div>
          <div><img src={leaf_03} alt=""/></div>
          <div><img src={leaf_04} alt=""/></div>
        </div>
      </div>
      <img className="bg" src={bg} alt="" />
      <img className="girl" src={girl} alt="" />
      <img className="trees" src={trees} alt="" />
      <div className="Login">
        <h2>Sign In</h2>
        <div className="inputBox">
          <input type="text" placeholder="Username" name="username" />
        </div>
        <div className="inputBox">
          <input type="password" placeholder="Password" name="password" />
        </div>
        <div className="inputBox">
          <input type="submit" id="bnt" className="btn" value="Login" />
        </div>
        <div className="group">
          <a href="/forgetPassword">Forget Password</a>
          <a href="/signUp">Sign Up</a>
        </div>
      </div>
    </section>
  );
};
