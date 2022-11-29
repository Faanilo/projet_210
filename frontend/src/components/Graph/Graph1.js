import React from 'react'
import Donutss from './ModelDonut'
import useFetch from './useFetch'

function Donut() {
const { error, isPending, data:stat } = useFetch('http://localhost:8000/api/student')
  return (
    <div className="home">
        { error && <div>{ error }</div> }
        { isPending && <div>
                            <div className="spinner">
                                <div className="rect1"></div>
                                <div className="rect2"></div>
                                <div className="rect3"></div>
                                <div className="rect4"></div>
                                <div className="rect5"></div>
                            </div>
                        </div> 
        }
        {stat && <Donutss stat={stat} />}
    </div>
  )
}

export default Donut