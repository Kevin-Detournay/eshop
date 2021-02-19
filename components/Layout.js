import Head from 'next/head'
import LoginForm from './LogingForm'
import Image from 'next/image'

import Link from 'next/link'
import NavBar from './NavBar/index.js'

 export const siteTitle= "eshop"

export default function Layout({ children}) {
  return (
  <>
    <Head>
    <link rel="icon" href="/favicon.ico" />
    <style>@import url(https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css);</style>
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
    <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.30/default/snipcart.css" />
    
    <script async src="https://cdn.snipcart.com/themes/v3.0.30/default/snipcart.js"></script>
    </Head>
      <header className="z-20 p-3 flex flex-col md:flex-row justify-between items-center bg-indigo-900 bg-opacity-75 fixed left-0 right-0 ">
        <h2 className="">
          <Link href="/">
            <a> 
              <Image
                src="/images/profile.png"
                alt="main logo"
                width={50}
                height={50}
                />
            </a>
          </Link>
        </h2>
        
        <NavBar />
        
      </header>
    
    <main className="flex justify-center" >
        {children}
    </main>
    <div id="snipcart" data-config-modal-style="side" data-api-key="NTZiZjlkNjEtMGQ5Yi00ZmU0LThiYWMtNDIxZTEzZWMwNDFmNjM3NDkxODUyMjE4MzE4ODU4" data-currency="eur" hidden>

    </div>
   
    </>
  )
}









