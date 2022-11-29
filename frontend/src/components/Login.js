import React from "react";
import "../assets/login.css";
import { useState } from "react";
function Login() {
  
  const [password, setPassword] = useState([]);
  const [user, setUser] = useState([]);

  const submitForm = () => {
    //console.log(user + "" + password);
  };
  return (
    <div>
      <div className="wrapper">
        <div className="logo">
          <img
            src="https://scontent.ftnr5-1.fna.fbcdn.net/v/t39.30808-6/295172192_569907241275864_4836967235312635095_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFdMOmLrnFrSghq2BYNYFmdgsJcjclmQF6CwlyNyWZAXsViRUS_Rvrv3sacS5snszoH4KX_aJWNxD-XS7uUEIZV&_nc_ohc=6xZN5Y83G2MAX80LyQD&_nc_ht=scontent.ftnr5-1.fna&oh=00_AT9_msO_59OVPc1Adtb9qu1RsWH0Dlca7Q4j5hmmhadUVg&oe=6351F2A7"
            alt=""
          />
        </div>
        <div className="text-center mt-4 name">ESTI</div>
        <form className="p-3 mt-3">
          <div className="form-field d-flex align-items-center">
            <span className="far fa-user"></span>
            <input
              type="text"
              name="user"
              placeholder="Username"
              onChange={(e) => setUser(e.target.value)}
            />
          </div>
          <div className="form-field d-flex align-items-center">
            <span className="fas fa-key"></span>
            <input
              type="password"
              name="password"
              id="pwd"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="btn mt-3" onClick={submitForm}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
