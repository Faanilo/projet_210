import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

function AjoutTeach() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [diploma, setDiploma] = useState("");
  const [module_id, setModule_id] = useState(1);
  const [data, setData] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const Teacher = {
      name,
      email,
      diploma,
      module_id,
    };

    const res = await axios.post("http://localhost:8000/api/teacher", Teacher);
    if (res.data.etat === 1) {
      Swal.fire({
        icon: "success",
        title: "Teacher Added",
        showConfirmButton: true,
      });
    }
  };
  useEffect(() => {
    axios.get("http://localhost:8000/api/module").then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <div>
      {" "}
      <div>
        <h2 className="page-header text-center">Add Teachers</h2>
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
                      <label>Email</label>
                      <input
                        type="text"
                        name="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      ></input>
                    </div>

                    <div className="form-group mb-3">
                      <label>Diploma</label>
                      <input
                        type="text"
                        name="diploma"
                        className="form-control"
                        value={diploma}
                        onChange={(e) => setDiploma(e.target.value)}
                      ></input>
                    </div>
                    <div className="form-group mb-3">
                        <span className="label-input100">Taught Module</span>
                        <select
                          className="form-control"
                          id="module_id"
                          name="module_id"
                          value={module_id}
                          onChange={(e) => setModule_id(e.target.value)}
                        >
                          {data.map((Item) => {
                            return (
                              <option value={Item.module.id}>
                                {Item.module.code}
                              </option>
                            );
                          })}
                        </select>
                      
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

export default AjoutTeach;
