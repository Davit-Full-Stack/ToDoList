import { useState } from "react";
import styles from "./ToDoCard.module.css";

const formatDate = (dateStr) => {
    if (!dateStr) return "N/A";
    const date = new Date(dateStr);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
};

function ToDoCard({ taskData, updateTask, deleteTask}) {
    const [title, setTitle] = useState(taskData.title);
    const [description, setDescription] = useState(taskData.description);
    const [startDate, setStartDate] = useState(taskData.startDate);
    const [finishDate, setFinishDate] = useState(taskData.finishDate);
    const [isEdit, setIsEdit] = useState(true);
    
    const handleClickDisable = () => {
        setIsEdit(prevState => !prevState)
    }

    const handleSave = () => {
        updateTask({
            id:taskData.id,
            title,
            description,
            startDate,
            finishDate,
        });
        setIsEdit(prevState => !prevState);
    }

const handleDelete = () => {
    deleteTask(taskData.id);
}

    return (
        <div className={styles.cardContainer}>
            <input
                type="text"
                disabled={isEdit}
                value={title}
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="text"
                disabled={isEdit}
                value={description}
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)}
            />
            <div>
                <label >
                    Start Date:
                    <input
                        type="date"
                        value={startDate}
                        disabled={isEdit}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                </label>
                <label >
                    Finish Date:
                    <input
                        type="date"
                        value={finishDate}
                        disabled={isEdit}
                        onChange={(e) => setFinishDate(e.target.value)}
                    />
                </label>
            </div>

            <div className={styles.edit_save_div}>
                {
                    isEdit && <button onClick={handleClickDisable}>Edit</button>
                }
                {
                    !isEdit && <button onClick={handleSave}>Save</button>
                }
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )

}

export default ToDoCard