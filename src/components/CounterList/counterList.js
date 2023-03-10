import { useState } from "react";
import Counter from "../Counter/counter";


const CounterList = () => {
    const initialState = [
        { id: 0, value: 0, name:'Ложка', price: 200 },
        { id: 1, value: 0, name: 'Вилка' },
        { id: 2, value: 0, name: 'Тарелка' },
        { id: 3, value: 0, name: 'Набор посуды' },
    ]
  const [counters, setCounters] = useState(initialState);
     

    const handleDelet = (id) => {
       const itemDel = counters.filter((item) => item.id !== id);
       setCounters(itemDel);
    }
    const handleReset = () => {
       setCounters(initialState)
    }

    const handlerInc = (id) => {
      //поиск элемента по индексу
      const elementIndex = counters.findIndex(ind => ind.id ===id);
      //создадим новый массив который буде содержать текущее состояние
      const newCounters = [...counters];
      newCounters[elementIndex].value++
      setCounters(newCounters)
    }
    const handlerDec = (id) => {
      const elementIndex = counters.findIndex(ind => ind.id ===id);
      //создадим новый массив который буде содержать текущее состояние
      const newCounters = [...counters];
      newCounters[elementIndex].value--
      setCounters(newCounters)
    }
    return (
      <>
        {counters.map((count) => (
          <Counter
            key={count.id}
            onDelete={handleDelet}
            handlerInc={handlerInc}
            handlerDec={handlerDec}
            {...count}
          />
        ))}

        <button className="btn btn-danger btn-lg m-2" onClick={handleReset}>
          Reset
        </button>
      </>
    );
}

export default CounterList;