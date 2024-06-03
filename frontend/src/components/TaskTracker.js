import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
export const trash =<i className='fa-solid fa-trash'></i>

const TaskTracker = () => {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('');
  const [date, setDate] = useState('');
  const [tasks,setTasks]=useState([])
  const [hoveredTask, setHoveredTask] = useState(null);
  const {_id}= useParams()
  console.log(_id)
  useEffect(()=>{
    const fecthTasks = async()=>{
      try{
        const response = await  axios.get('http://localhost:5000/api/pro/get-task')
        setTasks(response.data)
      }catch(error){
        console.error('Error fecthing Tasks')
      }
    };
    fecthTasks()
    
  },[])
  const deleteTask = async()=>{
    const res = await axios.delete(`http://localhost:5000/api/pro/delete-task/${_id}`)
  }
  




  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  const handleDateChange = (e) => {
    const inputDate = e.target.value;
   
      setDate(inputDate);
  

  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Here you can submit the form data to your backend or perform any other action
   /* console.log('Task:', task);
    console.log('Priority:', priority);
    console.log('Date:', date);
    // Reset form fields
    setTask('');
    setPriority('low');
    setDate('');*/
    try {
      // Make a POST request to your backend endpoint using Axios
      const response = await  axios.post('http://localhost:5000/api/pro/task', {
        task: task,
        priority:priority,
        date:date
      });

      // Handle successful response
      console.log('Task added:', response.data);
      
      // Reset form fields
      setTask('');
      setPriority('');
      setDate('');
    } catch (error) {
      // Handle error
      console.error('Error adding task:', error);
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
      <div>
        <label htmlFor="taskInput" style={{ display: 'block', marginBottom: '5px' }}>Task:</label>
        <input
          type="text"
          id="taskInput"
          value={task}
          onChange={handleTaskChange}
          required
          style={{ width: '100%', padding: '5px', borderRadius: '3px', border: '1px solid #ccc' }}
        />
      </div>
      <div>
        <label htmlFor="prioritySelect" style={{ display: 'block', marginBottom: '5px' }}>Priority:</label>
        <select
          id="prioritySelect"
          value={priority}
          onChange={handlePriorityChange}
          style={{ width: '100%', padding: '5px', borderRadius: '3px', border: '1px solid #ccc' }}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <div>
        <label htmlFor="dateInput" style={{ display: 'block', marginBottom: '5px' }}>Date :</label>
        <input
          type="text"
          id="dateInput"
          value={date}
          onChange={handleDateChange}
         placeholder='YYYY/MM/DD'
          required
          style={{ width: '100%', padding: '5px', borderRadius: '3px', border: '1px solid #ccc' }}
        />
      </div>
      <button type="submit" style={{ marginLeft: '10px', marginTop: '10px',marginBottom:'10px', padding: '5px 10px', backgroundColor: 'Green', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>Add Task</button>
    </form>

    <div className='TaskContainer' >
      {tasks.map(split=>(
        <div key={split.id}  style={{
          backgroundColor:'green', 
          padding: '10px', 
          marginBottom: '10px', 
          borderRadius: '5px',
        
        }} >
          <p>Task:{split.task}</p>
          <p>Priority:{split.priority}</p>
          <p>Date:{split.date}</p>
          <div>
        <button icon={trash} color={'black'} bpad={'1rem'} bRad={'50%'} onClick={()=>deleteTask(_id)}>Delete</button>
      </div>
          </div> 
         
      ))}
      
    </div>
    </>
  );
};

export default TaskTracker;
