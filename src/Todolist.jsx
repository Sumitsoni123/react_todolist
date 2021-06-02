import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

const Todolist = (props) =>
{
    const [line, setLine] = useState(false);

    const Cutline = () =>{
        // props.onSelect(props.id);
        console.log('deleted');
        setLine(true);
    };   
    return(
        <>
            <div className="todo_style">
                <DeleteIcon onClick={Cutline}/>
                <li style={{textDecoration: line ? "line-through": "none"}}>{props.text}</li>
            </div>
        </>
    );
}; 
export default Todolist;