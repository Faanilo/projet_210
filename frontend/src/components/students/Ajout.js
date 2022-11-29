import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
function Ajout() {
  const [name, setName] = useState([]);
  const [mail, setMail] = useState([]);
  const [phone, setPhone] = useState([]);
  const [age, setAge] = useState([]);
  const [gender, setGender] = useState('');
  const [grade, setGrade] = useState('L1');
  const [groupe, setGroupe] = useState('');
  const [school_year, setSchool_Year] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const Student = {
      name,
      mail,
      phone,
      age,
      gender,
      grade,
      groupe,
      school_year,
    };

    const res = await axios.post('http://localhost:8000/api/student', Student);
    if (res.data.etat === 1) {
      Swal.fire({
        icon: "success",
        title: "Student Added",
        showConfirmButton: true,
      });
    } 
  };
  /*await axios.post('http://localhost:8000/api/student', Student)
            .then(
                response => console.log((JSON.stringify(response.data)))
                )
            .catch(error => {
                console.log("ERROR:: ",error.response.data);
                
                });
    }*/


  return (
    <div>
      <h2 className="page-header text-center">Add Student</h2>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group mb-3">
                    <label>Name</label>
                    <input
                      type="text"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="form-control"
                    ></input>
                  </div>

                  <div className="form-group mb-3">
                    <label>Mail</label>
                    <input
                      type="text"
                      name="mail"
                      className="form-control"
                      value={mail}
                      onChange={(e) => setMail(e.target.value)}
                    ></input>
                  </div>

                  <div className="form-group mb-3">
                    <label>Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      className="form-control"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    ></input>
                  </div>
                  <div className="form-group mb-3">
                    <label>Age</label>
                    <input
                      type="number"
                      name="age"
                      className="form-control"
                      min={1}
                      max={99}
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                    ></input>
                  </div>
                  <div>
                    <label>Grade</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      name="grade"
                      value={grade}
                      onChange={(e) => setGrade(e.target.value)}
                    >
                      <option value="L1">L1</option>
                      <option value="L2">L2</option>
                      <option value="L3">L3</option>
                      <option value="M1">M1</option>
                      <option value="M2">M2</option>
                    </select>
                  </div>
                  <div>
                    <label>Groupe</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      name="groupe"
                      value={groupe}
                      onChange={(e) => setGroupe(e.target.value)} 
                    >
                    {
                      (grade=='L1') ?
                      <>
                      <option value="G1">G1</option>
                      <option value="G2">G2</option>
                      </>:
                      <>
                      <option value="iDEV">iDEV</option>
                      <option value="RSI">RSI</option>
                      </>                      
                    }
                    </select>
                  </div>
                  <div>
                    <label>Gender</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      name="gender"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <option value="M">H</option>
                      <option value="F">F</option>
                    </select>
                  </div>
                  <div className="form-group mb-3">
                    <label>School Year</label>
                    <input
                      type="number"
                      name="school_year"
                      value={school_year}
                      onChange={(e) => setSchool_Year(e.target.value)}
                      className="form-control"
                      min={2018}
                      max={2028}
                    ></input>
                  </div>
                  <div className="form-group mb-3 text-center">
                    <button
                      type="submit"
                      value="Envoyer"
                      className="btn btn-primary"
                      onSubmit={handleSubmit}
                    >
                      Enregistrer
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ajout;
