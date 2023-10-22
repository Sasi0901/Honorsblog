import React, { useContext } from "react";
import logo from "../../assets/images/srlogo.svg";
import "./header.css";
import { User } from "./User";
import { nav } from "../../assets/data/data";
import { Link } from "react-router-dom";

export const Header = () => {
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    header.classList.toggle("active", this.window.scrollY > 100);
  });

  return (
    <>
      <header className="header">
        <div className="scontainer flex">
          <div className="logo">
            <img
              src={logo}
              href="https://static.vecteezy.com/system/resources/thumbnails/008/533/803/small/sr-artistic-letter-logo-design-with-serif-font-in-black-and-white-colors-illustration-vector.jpg"
              width="80px"
            />
          </div>
          <nav>
            <ul>
              {nav.map((link) => (
                <li key={link.id}>
                  <Link to={link.url}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="account flexCenter">
            <User />
          </div>
        </div>
      </header>
    </>
  );
};
