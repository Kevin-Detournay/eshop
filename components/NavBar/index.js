import Link from 'next/link'
import styles from './navBar.module.scss'






const Navbar=()=>{
 

    return(
    <nav className="flex flex-col md:flex-row text-white text-center">
    <Link href="/" ><a className={styles.navBar__link}>Acceuil</a></Link>
    <Link href="/categories" ><a className={styles.navBar__link}>Categories</a></Link>
    
   
    <div className="flex align-center">
        <button className="snipcart-checkout"><i className="mdi mdi-cart ml-2 mr-2"         
         ></i>Mon Panier (<span className="snipcart-items-count"></span>)</button>
    </div>
   </nav>
    )
}

export default Navbar
