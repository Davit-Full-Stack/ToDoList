import { useState, useEffect } from "react";
import styles from "./NewTaskCard.module.css";

function NewTaskCard({ addTask, onClose }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [startDate, setStartDate] = useState("");
    const [finishDate, setFinishDate] = useState("");
       const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsOpen(true), 10); // փոքր ուշացում՝ transition-ի համար
    }, []);

    const handleSave = () => {
        if (!title.trim() || !description.trim()) {
            alert("Title and Description are required.");
            return;
        }

        addTask({
            title,
            description,
            startDate,
            finishDate
        });
    }

      const handleClose = () => {
        setIsOpen(false);
        setTimeout(onClose, 320); // transition-ի տևողությանը համապատասխան
    };

    return (
        <div className={styles.pageContainer}>
            <div className={`${styles.cardContainer} ${isOpen ? styles.open : ""}`}>
                <div className={styles.closeContainerDiv}>
                    <button className={styles.closeSpanButton} onClick={handleClose}>
                        <span className={styles.closeSpan1}></span>
                        <span className={styles.closeSpan2}></span>
                    </button>
                </div>
                <h1>New Task</h1>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={10}
                />
                <div className={styles.dateContainer}>
                    <label>
                        Start date:
                        <input
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                        />
                    </label>
                    <label>
                        Finish date:
                        <input
                            type="date"
                            value={finishDate}
                            onChange={(e) => setFinishDate(e.target.value)}
                        />
                    </label>
                </div>
                <button onClick={handleSave}>Add task</button>
            </div>
        </div>
    );
}

export default NewTaskCard;