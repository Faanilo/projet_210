import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Home from "../src/components/Home";
import Student from "./components/Student";
import Ajout from "./components/students/Ajout";
import L1 from "./components/students/L1";
import L2 from "./components/students/L2";
import L3 from "./components/students/L3";
import M1 from "./components/students/M1";
import AjoutMods from "../src/components/modules/AjoutMods"
import M2 from "./components/students/M2";
import AnimatedPage from "./components/AnimatedPage";
import Modules from "./components/Modules";
import Teachers from "./components/Teachers";
import AjoutTeach from "../src/components/Teachers/AjoutTeach"
import Results from "./components/Results";
import AddMarks from "../src/components/students/marks/AddMarks"
import Marks from "../src/components/students/marks/Marks"
import NoteL1 from "../src/components/results/NoteL1"
import NoteL2 from "../src/components/results/NoteL2"
import NoteL3 from "../src/components/results/NoteL3"
import NoteM1 from "../src/components/results/NoteM1"
import NoteM2 from "../src/components/results/NoteM2"
import MoyenneL1 from "./components/results/MoyenneL1";



function App() {
  return (
    <AnimatedPage>
    <div className="App">
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link className="nav-link active" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/students">
            Students
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/modules">
            Modules
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/results">
          Results
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/teachers">
            Teachers
          </Link>
        </li>
      </ul>
      <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/students" element={< Student />}/>
            <Route path="/L1" element={< L1 />}/>
            <Route path="/L2" element={< L2 />}/>
            <Route path="/L3" element={< L3 />}/>
            <Route path="/M1" element={< M1 />}/>
            <Route path="/M2" element={< M2 />}/>
            <Route path="/results" element={< Results />}/>
            <Route path="/ajoutstud" element={<Ajout/>}/>
            <Route path = '/modules' element={<Modules/>}/>
            <Route path = '/addmods' element={< AjoutMods/>}/>
            <Route path = '/teachers' element={< Teachers/>}/>
            <Route path='/addteach' element={<AjoutTeach/>}/>
            <Route path='/addmarks' element={<AddMarks/>}/>
            <Route path='/marks/:id' element={< Marks/>}/>
            <Route path='/moyennel1/:id' element={< MoyenneL1/>}/>
            <Route path="/nL1" element={< NoteL1 />}/>
            <Route path="/nL2" element={< NoteL2 />}/>
            <Route path="/nL3" element={< NoteL3 />}/>
            <Route path="/nM1" element={< NoteM1 />}/>
            <Route path="/nM2" element={< NoteM2 />}/>
          </Routes>
      </div>
    </div>
    </AnimatedPage>
  );
}

export default App;
