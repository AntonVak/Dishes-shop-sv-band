// import { useState } from "react";
import '../../App.css';



const Counter = (props) => {
    
   
    return (
      <div className="app">
        <h2 className='name'></h2>
        <h3>
          <span className={`count badge m-2`}></span>
        </h3>
        <button className="btn btn-primary btn-lg m-2" >
          +
        </button>
        <button className="btn btn-primary btn-lg m-2" >
          -
        </button>
        <button className="btn btn-danger btn-lg m-2" >Delet</button>
      </div>
    );
}

export default Counter;