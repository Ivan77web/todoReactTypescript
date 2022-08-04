import React from "react";
import {ITodo} from "../types/data"
import { TodoItem } from "./TodoItem";
import cl from "./styles/TodoList.module.css"

interface ITodoListProps{
    todos: ITodo[],
    toggleCheck: (id: number) => void,
    removeTodo: (id: number) => void
}

const TodoList: React.FC<ITodoListProps> = (props) => {
    const {todos, toggleCheck, removeTodo} = props
    
    return(
        <div className={cl.list}>
            {
                todos.map( todo => <TodoItem key={todo.id} {...todo} toggleCheck={toggleCheck} removeTodo={removeTodo}/>)
            }
        </div>
    )
}

export {TodoList}