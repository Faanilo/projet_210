import React from 'react'
import Typewriter from 'typewriter-effect'
import Swal from "sweetalert2";
function Titlem() {
  return (
    <h1 className="d-flex justify-content-center font-size-1100">
    <Typewriter
    onInit={(typewriter)=>{
        typewriter.typeString('List of Mods').callFunction(()=>{Swal.fire({
            title: 'List of mods',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })}).pauseFor(2000).deleteAll().start();
    }}
    />
    </h1>
  )
}

export default Titlem