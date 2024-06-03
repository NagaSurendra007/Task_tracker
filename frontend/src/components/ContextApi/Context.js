import React ,{useContext, useState} from 'react'
import axios from 'axios'

const BASE_URL = "http://localhost:5000/api/pro"

const Context = React.createContext()


export const GlobalProvider =({children})=> {

    const [tasks,setTask]=useState([]);
    const [error,setError]=useState(null);

    const addTasks = async(task)=>{
        const response = await axios.post(`${BASE_URL}task`,task)
        .catch((err)=>{
            setError(err.response.data.message)
        })
    }
    return(
        <Context.Provider value ={{addTasks,tasks}}>
            {children}
        </Context.Provider>
    )
}
export const useGlobalContext=()=>{
    return useContext(Context)
}