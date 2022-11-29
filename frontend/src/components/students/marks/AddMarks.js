import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
function AjoutMods() {
  const [name, setName] = useState("");
  const [module, setModule] = useState("");
  const [score, setScore] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const Mark = {
      name,
      module,
      score,
    };

    const res = await axios.post("http://localhost:8000/api/mark", Mark);
    if (res.data.etat === 1) {
      Swal.fire({
        icon: "success",
        title: "Marks Added",
        showConfirmButton: true,
      });
    }
   
  };

  return (
    <div>
      <div>
        <h2 className="page-header text-center">Add Marks</h2>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                      <label>Student Name</label>
                      <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                    <div className="form-group mb-3">
                      <label>Score</label>
                      <input
                        type="number"
                        name="score"
                        className="form-control"
                        value={score}
                        min={0}
                        max={20}
                        onChange={(e) => setScore(e.target.value)}
                      ></input>
                    </div>
                    <div className="form-group mb-3">
                      <label>MODS</label>
                      <input
                        type="text"
                        name="module"
                        className="form-control"
                        value={module}
                        onChange={(e) => setModule(e.target.value)}
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
    </div>
  );
}

export default AjoutMods;
