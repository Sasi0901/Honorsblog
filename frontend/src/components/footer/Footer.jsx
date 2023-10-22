import React from "react";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";

export const Footer = () => {
  return (
    <>
      <footer className="boxItems">
        <div className="container flex">
          <p>Sasi Rachapotu</p>
          <div className="social">
            <a href="https://instagram.com/r_sasi03?igshid=NzMyMjgxZWIzNw==">
              <RiInstagramFill className="icon" />
            </a>
            <a href="https://twitter.com/SRachapotu">
              <AiFillTwitterCircle className="icon" />
            </a>
            <a href="https://www.linkedin.com/in/sasi-rachapotu-810798231">
              <AiFillLinkedin className="icon" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
