import '../styles/global.css'
import Snipcart from '../components/Snipcart'
export default function App({ Component, pageProps }) {
    return <Snipcart><Component {...pageProps} /></Snipcart>
     
  }

 