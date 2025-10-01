/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./main.css";
import { cards } from "./projects.js";
import { AnimatePresence, motion } from "motion/react";
export const Main = () => {
  const [projectCategory, setProjectCategory] = useState("all");
  const [projects, setProjects] = useState(cards);
  const handleClick = (category) => {
    setProjectCategory(category);
    let projectsFilter = cards.filter((card) =>
      card.category.includes(category)
    );
    setProjects(projectsFilter);
  };
  return (
    <main>
      <section className="filter">
        <div className="filter-buttons">
          <button
            onClick={() => {
              setProjectCategory("all");
              setProjects(cards);
            }}
            className={projectCategory === "all" ? "active" : ""}
          >
            All Projcts
          </button>
          <button
            onClick={() => handleClick("css")}
            className={projectCategory === "css" ? "active" : ""}
          >
            HTML & CSS
          </button>
          <button
            onClick={() => handleClick("js")}
            className={projectCategory === "js" ? "active" : ""}
          >
            JavaScript
          </button>
          <button
            onClick={() => handleClick("bootstrap")}
            className={projectCategory === "bootstrap" ? "active" : ""}
          >
            Bootstrap
          </button>
          <button
            onClick={() => handleClick("react")}
            className={projectCategory === "react" ? "active" : ""}
          >
            React & MUI
          </button>
        </div>
      </section>
      <section className="projects">
        {projects.map((card) => (
          <AnimatePresence mode="wait">
            <motion.article
              className="card"
              key={card.id}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <img src={card.imgPath} alt="" />
              <div className="box">
                <h2>{card.projectTitle}</h2>
                <p>
                  Real-time video streaming library, optimized for interstellar
                  transmission.
                </p>
                <div className="icons">
                  <div>
                    <a className="icon-link icon" href="" />
                    <a className="icon-github icon" href="" />
                  </div>
                  <a className="more" href="">
                    More
                    <i className="icon-arrow-right"></i>
                  </a>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        ))}
      </section>
    </main>
  );
};
