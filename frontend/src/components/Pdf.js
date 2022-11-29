import React from 'react'
import {useRef} from 'react';


function Print() {
    const PDF =()=> {
        const element = document.getElementById('pdf');
         var opt = {
         /*  width:        522, */
          margin:       -1,
          filename:     'releve.pdf',
          image:        { type: 'jpeg', quality: 0.98 },
          html2canvas:  { scale: 2 },
          jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
        }; 
       
         html2pdf().set(opt).from(element).save(); 
        
    } 
    
  return (
    <div>
    <button onClick={PDF}>Get mark to pdf</button>
    </div>
  )
}

export default Print