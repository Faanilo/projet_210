
import React, { useState } from 'react'
import Student from './ListStudent';
import L1 from '../students/L1'
import L2 from '../students/L2'
import L3 from '../students/L3'
import M1 from '../students/M1'
import M2 from '../students/M2'
function YearList(props) {
    let[year, setYear] = useState(2022);
    
    let Previous = ()=>{
        if (year !==  2019) {
            setYear(year-1)   
        }
        else{
            alert("Pas d'année scolaire correspondant");
        }
    }

    let Next = ()=>{
        if (year <  2022) {
            setYear(year+1)   
        }
        else{
            alert("Pas d'année scolaire correspondant");
        }
    }
  return (
    <>
       {/** Choose the year */}
       <div className='row'>
                <div className="col-4"></div>
                <div className='col-8'>
                    <ul class="pagination">
                        <li class="page-item"><a class="page-link" href="#"
                        onClick={Previous}>Previous</a></li> {
                            (year === 2019) ? 
                            <li className="page-item active" id='2019'><a className="page-link" href="#"
                            onClick={() => setYear(2019)}>2019</a></li>
                            :
                            <li className="page-item" id='2019'><a className="page-link" href="#"
                            onClick={() => setYear(2019)}>2019</a></li>
                        }
                        
                        {
                            (year === 2020) ? 
                        <li className="page-item active"><a className="page-link" href="#"
                        onClick={() => setYear(2020)}>2020</a></li>
                        :
                        <li className="page-item"><a className="page-link" href="#"
                        onClick={() => setYear(2020)}>2020</a></li>
                        }
    
                        {
                            (year === 2021) ? 
                        <li className="page-item active"><a className="page-link" href="#"
                        onClick={() => setYear(2021)}>2021</a></li>
                        :
                        <li className="page-item"><a className="page-link" href="#"
                        onClick={() => setYear(2021)}>2021</a></li>
                        }
    
                        {
                            (year === 2022) ? 
                        <li className="page-item active"><a className="page-link" href="#"
                        onClick={() => setYear(2022)}>2022</a></li>
                        :
                        <li className="page-item"><a className="page-link" href="#"
                        onClick={() => setYear(2022)}>2022</a></li>
                        }
    
                        <li class="page-item"><a class="page-link" href="#"
                        onClick={Next}>Next</a></li>
                    </ul>
                </div>
        </div>
        <Student grade={props.grade} school_year={year}/>
    </>
  )
}

export default YearList
