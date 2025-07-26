import styles from "./Home.module.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to ToDo App!</h1>
      <p className={styles.desc}>
        Organize your tasks, set deadlines, and boost your productivity.<br />
        Start by adding your first task!
      </p>
      <Link to="/todo">
        <button className={styles.button}>Go to ToDo List</button>
      </Link>
    </div>
  );
}

export default Home;