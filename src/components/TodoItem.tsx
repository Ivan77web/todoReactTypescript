import React from "react";
import { ITodo } from "../types/data";
import cl from "./styles/TodoItem.module.css"

interface ITodoItemProps extends ITodo{
    toggleCheck: (id: number) => void,
    removeTodo: (id: number) => void
}

const TodoItem: React.FC<ITodoItemProps> = (props) => {
    const{id, title, complete, toggleCheck, removeTodo} = props

    return(
        <div className={cl.item}>
            <input type="checkbox" checked={complete} onChange={ () => toggleCheck(id)} className={cl.checkbox}/>
            
            <div className={cl.title}>{title}</div>

            <div className={cl.button} onClick={ () => removeTodo(id)}>
                <div className={cl.cross}><div className={cl.one}/><div className={cl.two}/></div>
            </div>
        </div>
    )
}

export {TodoItem}