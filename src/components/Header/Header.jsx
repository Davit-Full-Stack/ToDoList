import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../assets/react.svg";

function Header() {
return (
<div className={styles.container}>
<Link to="/">
<img src={logo} alt="Logo" className={styles.logo} />
</Link>
<h1 className={styles.text}>ToDo</h1>
<nav className={styles.nav}>
<Link to="/" className={styles.link}>Home</Link>
<Link to="/todo" className={styles.link}>ToDo</Link>
</nav>
</div>
);
}

export default Header;