import React from "react";
import "../assets/home.css";
import AnimatedPage from "./AnimatedPage";
import Donut from "./Graph/Graph1";
function Home() {
  return (
    <AnimatedPage>
      <div>
        <div className="wrapper">
          <div className="static-txt"></div>
          <ul className="dynamic-txts">
            <li>
              <span>Yo </span>
            </li>
            <li>
              <span>Welcome</span>
            </li>
            <li>
              <span>to</span>
            </li>
            <li>
              <span>ESTI</span>
            </li>
          </ul>
        </div>
        <Donut />
      </div>
    </AnimatedPage>
  );
}

export default Home;
