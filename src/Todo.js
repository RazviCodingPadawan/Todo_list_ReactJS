import React from 'react'
import { useState } from 'react'
import './Todo.css'

const Todo = ({id, title, description, onDelete}) => {

    const [line_dec, setStyle ] = useState('none')

    const changeStyle = () => {
        //console.log("set style")
        if(line_dec === 'line-through')
            setStyle('none')
        else
            setStyle('line-through')
    }
    return (
        <div>
            <h3>
            <span style={{textDecorationLine: line_dec }}>{id}. {title}</span>
            <input className='checkbox' type="checkbox" onChange={changeStyle}/>
            <button className='deleteButton' onClick={() => onDelete(id)}>
            <i class="fa-solid fa-trash"></i>
            </button>
            </h3>
            <p>{description}</p>

        </div>
    )
}

export default Todo