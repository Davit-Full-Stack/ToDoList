const BASE_URL = "http://localhost:3001/tasks"

export async function fetchTasks() {
    try {
    const res = await fetch(BASE_URL);
    if (!res.ok) {
    throw new Error("Failed to fetch tasks");
    }
    
    return res.json();
    } catch (error) {
    console.error(error.message);
    return [];
    }
    }

    export async function createTask(taskInfo){
        try {
        const res = await fetch(BASE_URL,
        {
        method:"POST",
        headers:{
        "Content-Type":"aplication/json"
        },
        body:JSON.stringify(taskInfo)
        }
        )
        
        if(!res.ok){
        throw new Error("Failed to create task");
        }
        
        return await res.json();
        } catch (error) {
        console.error(error.message);
        return null;
        }
        }

        export async function updateTaskService(taskId, updatedInfo) {
            try {
              
              const res = await fetch(`${BASE_URL}/${taskId}`, {
                method: "PATCH", 
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedInfo), 
              });
          
              
              if (!res.ok) {
                throw new Error("Failed to update task");
              }
          
              return await res.json(); 
            } catch (error) {
              console.error(error.message);
              return null; 
            }
          }
          // services.js

export async function deleteTaskService(taskId) {
    try {
      const res = await fetch(`${BASE_URL}/${taskId}`, {
        method: "DELETE", 
      });
  
      if (!res.ok) {
        throw new Error("Failed to delete task");
      }
  
      return true; 
    } catch (error) {
      console.error(error.message);
      return false; լ
    }
  }