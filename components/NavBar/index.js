import Link from 'next/link'
import styles from './navBar.module.scss'
const Navbar=()=>(
    <nav className={styles.navBar}>
    <Link href="/" ><a className={styles.navBar__link}>Acceuil</a></Link>
  
    <Link href="/about"><a className={styles.navBar__link}>A Propos</a></Link>
    </nav>
)

export default Navbar