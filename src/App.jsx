import { Header } from "./components/header/Header";
import { Hero } from "./components/hero/Hero";
import { Main } from "./components/main/Main";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";
import { useEffect, useState } from "react";

const up = () => {
  if (window.scrollY >= 100) {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth",
    });
  }
};

function App() {
  const [showUpBtn, setShowUpBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () =>
      window.scrollY >= 100 ? setShowUpBtn(true) : setShowUpBtn(false)
    );
  }, []);

  return (
    <div className="myPage container">
      <Header />
      <div className="divider" />
      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />

      <button
        style={{
          opacity: showUpBtn ? 0.7 : 0,
          pointerEvents: showUpBtn ? "auto" : "none",
        }}
        className="icon-keyboard_arrow_up go-up"
        onClick={up}
      ></button>
    </div>
  );
}

export default App;
