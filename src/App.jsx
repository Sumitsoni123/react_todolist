import React, { useState } from 'react';
import './index.css';
import Todolist from './Todolist';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () =>
{
    const [inputList, setInputList] = useState("");
    const [items,setItems] = useState([]);

    const itemEvent = (event) =>
    {
        setInputList(event.target.value);
    };
    const listofItems = () =>
    {
        if(inputList != ""){
            setItems((olditem) =>{
                return [...olditem,inputList];
            });
        }
        setInputList("");
    };

    const deleteItem = () =>
    {
        console.log("deleted");

    };
    return(
        <>
            <div className="main_div">
                <div className="center_div">
                    <br/><h1>ToDo List</h1><br/>
                    <input type='text' value={inputList} placeholder='add item' onChange={itemEvent}/>
                    <Button onClick={listofItems}><AddIcon/></Button><hr/>
                    <ul>
                        {items.map((val,index)=>{
                            return <Todolist
                            text = {val}
                            id = {index}
                            key = {index}
                            // onSelect = {deleteItem}
                             />
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default App;