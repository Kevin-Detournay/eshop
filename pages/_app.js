/* eslint-disable react/prop-types */
import '../styles/global.css';
import { useState } from 'react';
import Layout from '../components/Layout';

export default function App({ Component, pageProps }) {
  const [openMenu, setOpenMenu] = useState(false);
  const handleBurger = () => {
    setOpenMenu(!openMenu);
  };

  return <Layout openMenu={openMenu} onClick={handleBurger}><Component {...pageProps} /></Layout>;
}
