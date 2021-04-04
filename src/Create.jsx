import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';




const Create = (props) => {

    const [expand, setExpand] = useState(false);

    const[addValue, setAddValue] = useState({
      title: '',
      content: '',
      date: ''
    })

      const InputEvent = (event) => {
        
        const{name, value} = event.target;

        setAddValue( (prevData) => {
            return {
              ...prevData,
              [name] : value,
            };
        });
  };


  const addEvent = () => {
 
      props.passTask(addValue);
      setAddValue({
        title: "",
        content: "",
        date: ""
       });
      
       toast.success("Your Note is added successfully ✔️ ");
  };

  const dataPush = (event) => {
    event.preventDefault();
    const newApp = {
      
      title: addValue.title,
      content: addValue.content,
      date: addValue.date
    }
    axios.post('http://localhost:3001/app/React-EasyKeepApp-cloneGooglekeep', newApp)
    .then(res => console.log(res.data))
  }

    const expanded = () => {
          setExpand(true);
    };

    const extraExpand = () => {
        setExpand(false);
    };


      return (
        <>

        
            <div className = 'main_div' onDoubleClick = {extraExpand}>
                <form onSubmit = {dataPush}>
                {expand ?
                <input 
                className='titleDetail'
                type = 'text' placeholder='Title'
                 autoComplete = 'off'
                 name = 'title'
                 value={addValue.title}
                 onChange = {InputEvent}/>  : null} <br />

                  <textarea rows ="" column=""
                  name = 'content'
                  value = {addValue.content}
                  onChange = {InputEvent}
                   placeholder='Write a note...' onClick={expanded} />
                   <DatePickerComponent name='date' value={addValue.date} 
                   style={{position: 'relative', top: '10rem'}}
                    onChange={InputEvent} placeholder='Enter Date' format="dd-MM-yy"
                     className='pickDate' /> 
                
                   
                <Button  onClick = {addEvent} >
                        <AddIcon className='plus' />
                </Button>

                 <ToastContainer />
                
                </form>
            </div>

        </>

      )
}


export default Create;