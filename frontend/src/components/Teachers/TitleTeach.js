import React from 'react'
import Typewriter from 'typewriter-effect'
import Swal from "sweetalert2";
function TitleTeach() {
  return (
    <h1 className="d-flex justify-content-center font-size-1100">
    <Typewriter
    onInit={(typewriter)=>{
        typewriter.typeString('List Teachers').callFunction(()=>{Swal.fire({
            title: 'List Teachers',
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

export default TitleTeach