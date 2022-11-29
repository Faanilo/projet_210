import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../../../src/assets/loading.css";
function MoyenneL1() {
  const navigate = useNavigate();
  const { id } = useParams();
  let [data, setData] = useState([]);
  let [loading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/student/average/L1/${id}`)
      .then((res) => {
        console.log(res.data);
        setTimeout(() => {
          setData(res.data);
          setIsLoading(false);
        }, 3000);
      });
  }, []);

  return (
    <div>
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
          <h2 className="page-header text-center">Your average </h2>
            <h3>
            
           
            </h3>;
        </>
      )}
    </div>
  );
}

export default MoyenneL1;
