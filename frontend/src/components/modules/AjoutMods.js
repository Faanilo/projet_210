import React from "react";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
function AjoutMods() {
  const [coefficient, setCoefficient] = useState('');
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [hour, setHour] = useState('');
  const [semestre,setSemestre] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    const Module = {
      name,
      code,
      hour,
      coefficient,
      semestre
    };

    const res = await axios.post("http://localhost:8000/api/module", Module);
    if (res.data.etat === 1) {
      Swal.fire({
        icon: "success",
        title: "Mods Added",
        showConfirmButton: true,
      });
    }
  };

  return (
    <div>
      <div>
        <h2 className="page-header text-center">Add Modules</h2>
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
                      <label>Code</label>
                      <input
                        type="text"
                        name="code"
                        className="form-control"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                      ></input>
                    </div>
                    <div className="form-group mb-3">
                    <label>Semester</label>
                    <input
                      type="text"
                      name="semestre"
                      value={semestre}
                      onChange={(e) => setSemestre(e.target.value)}
                      className="form-control"
                    ></input>
                  </div>


                    <div className="form-group mb-3">
                      <label>Hour</label>
                      <input
                        type="text"
                        name="hour"
                        className="form-control"
                        value={hour}
                        onChange={(e) => setHour(e.target.value)}
                      ></input>
                    </div>
                    <div className="form-group mb-3">
                      <label>Credit</label>
                      <input
                        type="number"
                        name="coefficient"
                        className="form-control"
                        value={coefficient}
                        onChange={(e) => setCoefficient(e.target.value)}
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
