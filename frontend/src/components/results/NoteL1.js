import React, { useState, useEffect } from "react";
import axios from "axios";
import AnimatedPage from "../AnimatedPage";
import HeaderN from "./HeaderN"
import "../../assets/Btn.css"


function NoteL1() {
  let grade = "L1";
  //let year = "2022";
  const [data, setData] = useState([]);
  let [loading, setIsLoading] = useState(true);

 
  useEffect(() => {
    axios.get(`http://localhost:8000/api/student/all/avg/${grade}`).then((res) => {
      console.log(res.data);
      setTimeout(() => {
        setData(res.data);
        setIsLoading(false);
      }, 3000);
    });
  }, []);

  return (
    <AnimatedPage>
      {loading ? (
        <center>
          <div className="lds-spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </center>
      ) : (
        <>
          <div>
            <HeaderN />
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Grade</th>
                  <th scope="col">Groupe</th>
                  <th scope="col">School_year</th>
                  <th scope="col">Moyenne</th>
                </tr>
              </thead>
              <tbody>
                {data.map((data) => {
                  return (
                    <tr scope="row" key={data.student.id}>
                      <td>{data.student.name}</td>
                      <td>{data.student.grade}</td>
                      <td>{data.student.gender}</td>
                      <td>{data.student.school_year}</td>
                      <td>{data.moyenne[0].avg}</td>
                    </tr>
                  );
                })}
                
              </tbody>
            </table>
          </div>
        </>
      )}
    </AnimatedPage>
  );
}

export default NoteL1;
