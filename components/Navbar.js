import Link from "next/link";
import styles from "../styles/Navbar.module.css"

const Navbar = () => {
    return(
        <>
            <nav className={styles.nav}>
                <ul className={styles.breadcrumb}>
                    <li>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/helloworld">
                            <a>Hello Word</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/counterapp">
                            <a>CounterApp</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/calculator">
                            <a>calculator</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/centerstopbutton">
                            <a>STOP Button</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/todolist">
                            <a>Todolist</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;