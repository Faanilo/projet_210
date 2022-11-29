import React from "react";
import HeaderS from "../components/students/HeaderS";
import BtnAjout from "./students/BtnAjout";
import AnimatedPage from "./AnimatedPage";
import BtnAddM from "./students/marks/BtnAddM";



function Student() {
  return (
    <AnimatedPage>
      <div>
        <HeaderS />
       <BtnAddM/>
        <BtnAjout />
      </div>
    </AnimatedPage>
  );
}

export default Student;
