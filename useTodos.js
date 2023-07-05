import { useReducer, useEffect } from "react";
import { todoReducer } from "../08-useReducer/todoReducer.js";



export const useTodos = (initialState = []) => {

     /* const initialState = [
        {
    id: 1,
    description: 'Recolectar la piedra del alma',
    done: false,
    },
    {
    id: 2,
    description: 'Recolectar la piedra del poder',
    done: false,
    } 
    ] */


    const init = () => {
    //la primera vez que se carga la aplicacion, esto puede sr nulo, por eso el 'or||'
    return JSON.parse(localStorage.getItem('todos')) || []
    }



    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
    localStorage.setItem('todos', JSON.stringify( todos ))


    }, [todos])


    const handleNewTodo = (todo) => {
    const action = {
    type: '[TODO] Add Todo',
    payload: todo,
    }
    dispatch(action)
    }

    const handleDeleteTodo = (id) => {

    dispatch({
    type: '[TODO] Remove Todo',
    payload: id,
    }) 
    }

    const handleToggleTodo = (id) => {
    dispatch({
    type: '[TODO] Toggle Todo',
    payload: id,
    }) 
    }

    const todosCount = todos.length;

    const pendingTodosCount = todos.filter(todo => !todo.done).length;









  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    todosCount,
    pendingTodosCount,
  }
}


