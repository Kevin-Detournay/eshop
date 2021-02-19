import '../styles/global.css'
import Layout from '../components/Layout'
import {useState} from 'react'


export default function App({ Component, pageProps }) {
  const[openMenu,setOpenMenu]=useState(false)
  const handleBurger=()=>{
    setOpenMenu(!openMenu)
    }

    return <Layout openMenu={openMenu} onClick={handleBurger}><Component {...pageProps} /></Layout>
     
  }

 