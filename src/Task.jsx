import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { css } from '@emotion/css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Task = (props) => {

    
    const[color, setColor] = useState("#fff");

    
    const setSecondary = (color) => {
        setColor(color);
       
   }

   const setSuccess = (color) => {
    setColor(color);
   
}

const setDanger = (color) => {
    setColor(color);
   
}
const setInfo = (color) => {
    setColor(color);  
}

    const card = css`
        .divTask{
            background-color: ${color}
        }`;
    
    const HideTask = () => {
        props.deleteItem(props.id);
        toast.error("Your Note is Deleted successfully ⚔️ ");

    };


    return (
            <>
            <div className={card}>
        <div className = 'divTask'>
         <div className='stickTop'>
            <Button onClick={HideTask}>
                    <DeleteForeverIcon className = 'Delete' /> 
            </Button>
            <h1 className = 'titleTask' > {props.title} </h1>
         </div>
            <p> {props.content} </p>
            <h4 className='taskFoot'> {props.date.toString().split('00')[0]} </h4>

            <div className='container-fluid color_div'>
                    <button type="button" className='btn btn-secondary'
                     onClick={()=>{setSecondary('#6c757d')}}></button>
                    <button type="button" class="btn btn-success" 
                    onClick={()=>{setSuccess('#28a745')}}></button>
                    <button type="button" class="btn btn-danger"
                    onClick={()=>{setDanger('#dc3545')}}></button>
                    <button type="button" class="btn btn-info"
                    onClick={()=>{setInfo('#17a2b8')}}></button>
                 </div>
        </div>
      </div>
        </>
    );
};


export default Task;