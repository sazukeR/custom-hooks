import { useState } from "react";



export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue)

    const increment = (value = 1) => {
        setCounter((counter) => counter+value); // esta seccion se modifica para hacer la prueba en useCounter.test.js paso de estar setCounter(counter+valua)... esto con el objetivo de mantener el valor actualizado en las pruebas y poder usar varias veces la funcion, haciendolo mas dinamico y evitando falsos positivos en las pruebas
    }

    const reset = () => {
        setCounter(initialValue);
    }

    const decrement = (value = 1) => {
         if(counter === 0) return
        setCounter((counter) => counter-value); // se ha cambiado para poder tomar los valores actualizados en el test
    }

    return {
        counter,
        increment,
        reset,
        decrement,
    }
}