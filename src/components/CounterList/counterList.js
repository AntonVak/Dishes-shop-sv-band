import { useState } from "react";
import Counter from "../Counter/counter";


const CounterList = () => {
    const initialState = [
        { id: 0, value: 0, name:'Ложка', price: 200 },
        { id: 1, value: 0, name: 'Вилка' },
        { id: 2, value: 0, name: 'Тарелка' },
        { id: 3, value: 0, name: 'Набор посуды' },
      ]
     

    const handleDelet = (id) => {
       
    }
    const handleReset = () => {
       
    }

    const handlerInc = (id) => {
     
    }
    const handlerDec = (id) => {
       
    }
    return (
      <>
        
          <Counter 
          onDelete={handleDelet}
          handlerInc={handlerInc}
          handlerDec={handlerDec} />
        
        <button className="btn btn-danger btn-lg m-2">Reset</button>
      </>
    );
}

export default CounterList;