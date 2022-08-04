import React from "react";
import cl from "./styles/Header.module.css"

interface IHeaderProps{
    value: string;
    setValue: (value: string) => void
    addTodo: (value: string) => void
}

const Header: React.FC<IHeaderProps> = (props) => {
    const {value, setValue, addTodo} = props
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value)
    }

    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if(e.key === "Enter"){
            addTodo(value)
        }
    }

    return(
        <div className={cl.header}>
            <input className={cl.input} placeholder="Введите запись" value={value} onChange={handleChange} onKeyDown={handleKeyDown}/>
            
            <div className={cl.button} onClick={() => addTodo(value)}>+</div>
        </div>
    )
}

export {Header}