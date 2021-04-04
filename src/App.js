import React, { useState } from 'react';
import Header from './Header';
import Create from './Create';
import Task from './Task';



const App = () => {

   const [addTask, setAddTask] = useState([]);

  const addPassTask = (addValue) => {
   // alert('I am Clicked')
      setAddTask( (preValue) => {
          return [...preValue, addValue]
      })
         console.log(addValue)
  };


    const taskDeleted = (id) => {
        setAddTask( (oldTasks) =>
            oldTasks.filter( (curValue, indx) => {
              return indx !== id
            })
        )
    };

      return (

        <>         
        <Header />
        

        <Create passTask={addPassTask} />

        { addTask.map((val, index) => {
          return (
          <Task 
              key={index}
              id={index}
              title={val.title}
              content={val.content}
              date={val.date}
              deleteItem={taskDeleted}
            
          />
          
          )
        })
       }
     </>
  
      )
}

export default App