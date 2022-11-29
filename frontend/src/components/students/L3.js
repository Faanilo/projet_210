import React, { useState, useEffect } from "react";
import HeaderS from "../students/HeaderS";
import axios from "axios";
import Swal from "sweetalert2";
import AnimatedPage from "../AnimatedPage";

function L3() {
  let grade = "L3";
  //let year = "2022";
  const [data, setData] = useState([]);
  let [loading, setIsLoading] = useState(true);
  useEffect(() => {
    var year = window.prompt("Please choose a school year");
    if(year<2017){
      alert("Enter valid school year")
    }
    const res = axios
      .get(`http://localhost:8000/api/student/list/${grade}/${year}`)
      .then((res) => {
        console.log(res);
        setTimeout(() => {
          setData(res.data);
          setIsLoading(false);
        }, 3000);
        setData(res.data);
      });
  }, []);
  const deleteStudent = async (e, id) => {
    e.preventDefault();
    const click = e.currentTarget;
    click.innerText = "Deleting";
    const res = await axios.delete(`http://localhost:8000/api/student/${id}`);
    if (res.data.status === 200) {
      click.closest("tr").remove();
      Swal.fire({
        text: "Etudiant Supprimer ",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  };
  return (
    <AnimatedPage>
    {loading ? (
      <center>
      <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      </center>
    ): (
      <>
    
    <div>
      <HeaderS />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Age</th>
            <th scope="col">Phone</th>
            <th scope="col">Grade</th>
            <th scope="col">Groupe</th>
            <th scope="col">Gender</th>
            <th scope="col">School_year</th>
            <th scope="col" colSpan={2} className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((l3) => {
            return (
              <tr scope="row" key={l3.student.id}>
                <td>{l3.student.name}</td>
                <td>{l3.student.mail}</td>
                <td>{l3.student.age}</td>
                <td>{l3.student.phone}</td>
                <td>{l3.student.grade}</td>
                <td>{l3.student.groupe}</td>
                <td>{l3.student.gender}</td>
                <td>{l3.student.school_year}</td>
                <td>
                        <a href={`/marks/${l3.student.id}`}>
                          <button
                            type="submit"
                            value="Envoyer"
                            className="btn btn-success"
                          >
                            Voir Note
                          </button>
                        </a>
                      </td>
                      <td>
                        <button
                          type="submit"
                          value="Envoyer"
                          className="btn btn-danger"
                          onClick={(e) => deleteStudent(e,l3.student.id)}
                        >
                          Delete
                        </button>
                      </td>
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

export default L3;
