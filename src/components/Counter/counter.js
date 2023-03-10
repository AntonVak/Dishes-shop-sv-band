// import { useState } from "react";
import '../../App.css';



const Counter = (props) => {
    const {handlerInc, value} = props;

    let clazz = value === 0?'danger' : 'primary' 
    const formatCount = () => {
      return value ===0 ? "empty" : value
    }
    const handlerIncrement = () => {
      handlerInc(props.id)
    }

    const handleDelet = () => {
      props.onDelete(props.id)
    }
   
    return (
      <div className="app">
        <h2 className='name'>{props.name}</h2>
        <h3>
          <span className={`count badge m-2 bg-${clazz}`}>{formatCount()}</span>
        </h3>
        <button className="btn btn-primary btn-lg m-2" onClick={handlerIncrement}>
          +
        </button>
        <button className="btn btn-primary btn-lg m-2" >
          -
        </button>
        <button className="btn btn-danger btn-lg m-2" onClick={handleDelet} >Delet</button>
      </div>
    );
}

export default Counter;