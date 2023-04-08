import data from "../data.json";
import { images } from "./Images";
import { useState, useEffect } from "react";
import hamburgerIcon from "./assets/icon-hamburger.svg";
import closeIcon from "./assets/icon-close.svg";
import chevronIcon from "./assets/icon-chevron.svg";

function App() {
  const [headingText, setHeadingText] = useState(data[0].name);
  const [text, setText] = useState(data[0].overview.content);
  const [source, setSource] = useState(data[0].overview.source);
  const [rotationText, setRotationText] = useState(data[0].rotation);
  const [revolutionText, setRevolutionText] = useState(data[0].revolution);
  const [radiusText, setRadiusText] = useState(data[0].radius);
  const [temperatureText, setTemperatureText] = useState(data[0].temperature);
  const [bigImage, setBigImage] = useState(images[0][0]);
  const [smallImage, setSmallImage] = useState(images[0][2]);
  const [mainIndex, setMainIndex] = useState(0);
  const [isLinksActive, setIsLinksActive] = useState(false);

  useEffect(() => {
    setHeadingText(data[mainIndex].name);
    setText(data[mainIndex].overview.content);
    setSource(data[mainIndex].overview.source);
    setBigImage(images[mainIndex][0]);
    setSmallImage(images[mainIndex][2]);
    setRotationText(data[mainIndex].rotation);
    setRevolutionText(data[mainIndex].revolution);
    setRadiusText(data[mainIndex].radius);
    setTemperatureText(data[mainIndex].temperature);
    document.querySelector(".btn").className = `btn ${data[mainIndex].name}`;
  }, [mainIndex]);

  function ChangeData(e) {
    document
      .querySelectorAll(".link")
      .forEach((item) => item.classList.remove("active"));
    e.target.classList.add("active");
    document
      .querySelectorAll(".btn")
      .forEach((item) => (item.className = "btn"));

    setMainIndex(e.target.tabIndex);

    document.querySelector(".btn").className = `btn ${data[mainIndex].name}`;
    setHeadingText(data[mainIndex].name);
    setText(data[mainIndex].overview.content);
    setSource(data[mainIndex].overview.source);
    setBigImage(images[mainIndex][0]);
    setSmallImage(images[mainIndex][2]);
    setRotationText(data[mainIndex].rotation);
    setRevolutionText(data[mainIndex].revolution);
    setRadiusText(data[mainIndex].radius);
    setTemperatureText(data[mainIndex].temperature);
    document.querySelector(".small-image").style.display = "none";
    ToggleLinks();
  }

  function ChangeFirstPlanetData(e) {
    document
      .querySelectorAll(".btn")
      .forEach((item) => (item.className = "btn"));
    e.target.className = `btn ${data[mainIndex].name}`;
    setText(data[mainIndex].overview.content);
    setSource(data[mainIndex].overview.source);
    setBigImage(images[mainIndex][0]);
    document.querySelector(".small-image").style.display = "none";
  }

  function ChangeSecondPlanetData(e) {
    document
      .querySelectorAll(".btn")
      .forEach((item) => (item.className = "btn"));
    e.target.className = `btn ${data[mainIndex].name}`;
    setText(data[mainIndex].structure.content);
    setSource(data[mainIndex].structure.source);
    setBigImage(images[mainIndex][1]);
    document.querySelector(".small-image").style.display = "none";
  }

  function ChangeThirdPlanetData(e) {
    document
      .querySelectorAll(".btn")
      .forEach((item) => (item.className = "btn"));
    document.querySelector(".small-image").style.display = "block";
    e.target.className = `btn ${data[mainIndex].name}`;
    setText(data[mainIndex].geology.content);
    setSource(data[mainIndex].geology.source);
    setBigImage(images[mainIndex][0]);
  }

  function ToggleLinks() {
    setIsLinksActive(!isLinksActive);
  }

  return (
    <>
      <nav className="nav-bar">
        <h1 className="logo">THE PLANETS</h1>

        <div className={`links ${isLinksActive ? "active" : ""}`}>
          <h3 className="link active" tabIndex={0} onClick={ChangeData}>
            MERCURY
            <img src={chevronIcon} alt="chevron-icon" />
          </h3>
          <h3 className="link" tabIndex={1} onClick={ChangeData}>
            VENUS
            <img src={chevronIcon} alt="chevron-icon" />
          </h3>
          <h3 className="link" tabIndex={2} onClick={ChangeData}>
            EARTH
            <img src={chevronIcon} alt="chevron-icon" />
          </h3>
          <h3 className="link" tabIndex={3} onClick={ChangeData}>
            MARS
            <img src={chevronIcon} alt="chevron-icon" />
          </h3>
          <h3 className="link" tabIndex={4} onClick={ChangeData}>
            JUPITER
            <img src={chevronIcon} alt="chevron-icon" />
          </h3>
          <h3 className="link" tabIndex={5} onClick={ChangeData}>
            SATURN
            <img src={chevronIcon} alt="chevron-icon" />
          </h3>
          <h3 className="link" tabIndex={6} onClick={ChangeData}>
            URANUS
            <img src={chevronIcon} alt="chevron-icon" />
          </h3>
          <h3 className="link" tabIndex={7} onClick={ChangeData}>
            NEPTUNE
            <img src={chevronIcon} alt="chevron-icon" />
          </h3>
        </div>

        <img
          src={isLinksActive ? closeIcon : hamburgerIcon}
          alt="links-btn"
          className="links-btn"
          onClick={ToggleLinks}
        />
      </nav>
      <main className="main-section">
        <div className="image-content">
          <img src={bigImage} alt="big-image" className="big-image" />
          <img src={smallImage} alt="small-image" className="small-image" />
        </div>
        <div className="text-content">
          <div className="content">
            <h2 className="heading">{headingText}</h2>
            <p className="text">{text}</p>
            <h4 className="source">
              Source :
              <a href={source} target="_blank">
                Wikipedia
              </a>
            </h4>
          </div>
          <div className="buttons">
            <button className="btn Mercury" onClick={ChangeFirstPlanetData}>
              <span>01</span> OVERVIEW
            </button>
            <button className="btn" onClick={ChangeSecondPlanetData}>
              <span>02</span> INTERNAL STRUCTURE
            </button>
            <button className="btn" onClick={ChangeThirdPlanetData}>
              <span>03</span> SURFACE GEOLOGY
            </button>
          </div>
        </div>
      </main>
      <footer className="footer">
        <div className="item">
          <h3 className="name">Rotation Time</h3>
          <h3 className="details">{rotationText}</h3>
        </div>
        <div className="item">
          <h3 className="name">Revolution Time</h3>
          <h3 className="details">{revolutionText}</h3>
        </div>
        <div className="item">
          <h3 className="name">Radius</h3>
          <h3 className="details">{radiusText}</h3>
        </div>
        <div className="item">
          <h3 className="name">Average Temp</h3>
          <h3 className="details">{temperatureText}</h3>
        </div>
      </footer>
    </>
  );
}

export default App;
