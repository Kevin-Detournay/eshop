import Head from 'next/head'




export default function Snipcart({ children}) {
  return (
  <>
    <Head>
    <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.30/default/snipcart.css" />
    
    <script async src="https://cdn.snipcart.com/themes/v3.0.30/default/snipcart.js"></script>
    </Head>
    <div>
        {children}
    </div>
    <div id="snipcart" data-config-modal-style="side" data-api-key="NTZiZjlkNjEtMGQ5Yi00ZmU0LThiYWMtNDIxZTEzZWMwNDFmNjM3NDkxODUyMjE4MzE4ODU4" data-currency="eur" hidden>

    </div>
   
    </>
  )
}