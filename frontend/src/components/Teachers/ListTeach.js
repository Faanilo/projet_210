import React, { useEffect, useState } from 'react'
import AnimatedPage from '../AnimatedPage'
import axios from 'axios'
import Swal from "sweetalert2";
function ListTeach() {
const [data,setData]=useState([])
useEffect(() => {
  const res = axios
    .get(`http://localhost:8000/api/teacher`)
    .then((res) => {
      console.log(res);
      setData(res.data);
    });
}, []);
const deleteteach = async (e, id) => {
  e.preventDefault();
  const click = e.currentTarget;
  click.innerText = "Deleting";
  const res = await axios.delete(`http://localhost:8000/api/teacher/${id}`);
  if (res.data.status === 200) {
    click.closest("tr").remove();
    Swal.fire({
      text: "Teacher Deleted",
      icon: "error",
      confirmButtonText: "Ok",
    });
  }
};
  return (
    <div>
    <AnimatedPage>
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Diploma</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
        {data.map((teach) => {
          return (
            <tr scope="row" key={teach.teacher.id}>
              <td>{teach.teacher.name}</td>
              <td>{teach.teacher.email}</td>
              <td>{teach.teacher.diploma}</td>
            <td>
              <button
                type="submit"
                value="Envoyer"
                className="btn btn-danger"
                onClick={(e) => deleteteach(e, teach.teacher.id)}
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
    </AnimatedPage>
    </div>
  )
}

export default ListTeach