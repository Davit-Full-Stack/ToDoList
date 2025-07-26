import { useState } from "react";
import ToDoCard from "../ToDoCard/ToDoCard";
import styles  from "./ToDoItems.module.css"

function ToDoItems({tasksData, updateTask, deleteTask}){
  
    return(
        <div className={styles.cardsContainer}>
         {
            tasksData && tasksData.map((task, index)=>{
                return(
                    <ToDoCard key={index} taskData={task} updateTask={updateTask} deleteTask={deleteTask}/>
                )
            })
         }
        </div>
    )
}

export default ToDoItems