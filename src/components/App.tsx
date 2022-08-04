import { useState } from "react";
import { Header } from "./Header";
import { TodoList } from "./TodoList";
import { ITodo } from "../types/data";

import cl from "./styles/App.module.css"

const App = () => {
    const [todos, setTodos] = useState<ITodo[]>([])
    const [value, setValue] = useState("")

    const addTodo = (value: string): void => {
        if(value){
            setTodos([...todos, {
                id: Date.now(),
                title: value,
                complete: false
            }])

            setValue("")
        }
    }

    const toggleCheck = (id: number) => {
        setTodos(todos.map( todo => {
            if(todo.id !== id){
                return todo
            }

            return {
                ...todo,
                complete: !todo.complete
            }
        }))
    }

    const removeTodo = (id: number) => {
        setTodos(todos.filter( todo => todo.id !== id))
    }

    return(
        <div className={cl.app}>
            <Header value={value} setValue={setValue} addTodo={addTodo}/>
            <TodoList toggleCheck={toggleCheck} removeTodo={removeTodo} todos={todos}/>
        </div>
    )
}

export {App}