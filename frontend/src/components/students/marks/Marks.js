import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../../../assets/loading.css";

function Marks() {
  const { id } = useParams();
  let [data, setData] = useState([]);
  let [loading, setIsLoading] = useState(true);
  let [avg,setAvg]= useState([])

  useEffect(() => {
    axios.get(`http://localhost:8000/api/student/marks/${id}`).then((res) => {
      console.log(res.data);
      setTimeout(() => {
        setData(res.data);
        setIsLoading(false);
      }, 3000);
    });
  }, []);
  useEffect(() => {
    axios.get(`http://localhost:8000/api/student/avg/${id}`).then((res) => {
      console.log(res.data);
      setTimeout(() => {
        setAvg(res.data);
        setIsLoading(false);
      }, 3000);
    });
  }, []);

  /*useEffect(()=>{
    axios.get(`http://localhost:8000/api/student/avg/${id}`)
    console.log(res.data)
    setTimPeout(()=>{
      setAvg(res.data);
      setIsLoading(false)
    })
  })*/

  return (
    <div>
      {loading ? (
        <center>
        <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </center>
      ) : (
        <>
      
          <h2 className="page-header text-center">Your marks</h2>
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card__body">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Mods Code</th>
                        <th scope="col">Score</th>
                        <th scope="col">Retake</th>
                        <th scope="col">Credit</th>
                        <th scope="col">Semester</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((data) => {
                        return (
                          <tr scope="row" key={data.mark.id}>
                            <td>{data.mark.module.code}</td>
                            <td>{data.mark.score}</td>
                            <td>{data.mark.retake}</td>
                            <td>{data.mark.module.coefficient}</td>
                            <td>{data.mark.module.semestre}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                {avg.map((moyenne)=>{
                  return(
                    <h6 class="text-right">Average  :  {moyenne.avg}</h6>
                  )
                })}
              </div>
            </div>
          </div>
          
        </>
      )}
    </div>
  );
}

export default Marks;
