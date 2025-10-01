// @ts-nocheck
import React, { useEffect, useState } from "react";
import "./header.css";
const initialMode = localStorage.getItem("mode")
  ? localStorage.getItem("mode")
  : "dark";

export const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [mode, setMode] = useState(initialMode);
  useEffect(() => {
    if (localStorage.getItem("mode") == "light") {
      document.body.classList.remove("dark");
      document.body.classList.add(localStorage.getItem("mode"));
    } else if (localStorage.getItem("mode") == "dark") {
      document.body.classList.remove("light");
      document.body.classList.add(localStorage.getItem("mode"));
    }
  }, [mode]);

  const handleModeTheme = (modeTheme) => {
    setMode(modeTheme);
    localStorage.setItem("mode", modeTheme);
  };
  
  return (
    <header>
      <i className="icon-bars menu" onClick={() => setShowModal(true)}></i>
      <div />
      <nav>
        <ul>
          <li>
            <a href="./about">About</a>
          </li>
          <li>
            <a href="./articles">Articles</a>
          </li>
          <li>
            <a href="./projects">Projects</a>
          </li>
          <li>
            <a href="./speaking">Speaking</a>
          </li>
          <li>
            <a href="./contact">Contact</a>
          </li>
        </ul>
      </nav>
      {mode == "dark" ? (
        <i
          className="icon-moon-o mode moon"
          onClick={() => handleModeTheme("light")}
        ></i>
      ) : (
        <i
          className="icon-sun mode sun"
          onClick={() => handleModeTheme("dark")}
        ></i>
      )}
      {showModal && (
        <div className="fixed">
          <ul className="modal">
            <li>
              <i
                className="icon-cross close-modal"
                onClick={() => setShowModal(false)}
              ></i>
            </li>
            <li>
              <a href="./about">About</a>
            </li>
            <li>
              <a href="./articles">Articles</a>
            </li>
            <li>
              <a href="./projects">Projects</a>
            </li>
            <li>
              <a href="./speaking">Speaking</a>
            </li>
            <li>
              <a href="./contact">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
