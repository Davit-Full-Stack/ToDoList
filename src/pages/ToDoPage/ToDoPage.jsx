import ToDoItems from "../../components/ToDoItems/ToDoItems";
import NewTaskCard from "../../components/NewTaskCard/NewTaskCard";
import styles from "./ToDoPage.module.css";
import { useState, useEffect } from "react";
import { fetchTasks, createTask, updateTaskService, deleteTaskService } from "../../services/services";

function ToDoPage() {
  const [tasksInfo, setTasksInfo] = useState([]);
  const [showNewTaskCard, setShowNewTaskCard] = useState(false);

  const toogleNewTaskCard = () => {
    setShowNewTaskCard(true);
  }

  const addTask = async (taskData) => {
    const newTask = await createTask(taskData);
    if (newTask) {
      setTasksInfo(prevTasks => [...prevTasks, newTask]);
      setShowNewTaskCard(false);
    }
  }

const updateTask = async (editedTask) => {
  const updated = await updateTaskService(editedTask.id, editedTask);
  if (updated) {
    setTasksInfo(prevTasks =>
      prevTasks.map(task =>
        task.id === editedTask.id ? { ...task, ...updated } : task
      )
    );
  }
};

 const handleDeleteTask = async (taskId) => {
  const success = await deleteTaskService(taskId);
  if (success) {
    setTasksInfo(tasksInfo => tasksInfo.filter(task => task.id !== taskId));
  }
};

  useEffect(()=>{
const loadTasks = async () => {
  let tasksData = await fetchTasks();
  setTasksInfo(tasksData);
}
loadTasks();
  },[])

  return (
    <>
    <div className={styles.AddTask}>
      <button
        style={{
          with: "200px",
          padding: "20px",
          background: "blue",
          color: "wheat",
          fontSize: "40px"
        }}
        onClick={toogleNewTaskCard}>
        Add Task
      </button>
      </div>
      {showNewTaskCard && <NewTaskCard addTask={addTask} onClose={() => setShowNewTaskCard(false)}/>}

      <div className={styles.CardsWrapper}>
        {tasksInfo.length > 0 && (
          <ToDoItems tasksData={tasksInfo} updateTask={updateTask}  deleteTask={handleDeleteTask}/>
        )}
      </div>
    </>
  );
}

export default ToDoPage;
