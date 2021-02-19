import Link from 'next/link'
import styles from './navBar.module.scss'
import {useState,useEffect} from 'react'
import axios from 'axios'





const Navbar=()=>{
 

    return(
    <nav className="flex text-white text-center">
    <Link href="/" ><a className={styles.navBar__link}>Acceuil</a></Link>
    <Link href="/categories" ><a className={styles.navBar__link}>Categories</a></Link>
    
   
    <div className="">
        <button className="snipcart-checkout"><i className="mdi mdi-cart -ml-2 mr-2"         
         >Mon Panier</i>(<span className="snipcart-items-count"></span>)</button>
    </div>
   </nav>
    )
}

export default Navbar
