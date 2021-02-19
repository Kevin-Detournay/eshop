import Head from 'next/head'
import LoginForm from './LogingForm'
import Image from 'next/image'

import Link from 'next/link'
import NavBar from './NavBar/index.js'

 export const siteTitle= "eshop"

export default function Layout({ children,onClick,openMenu}) {
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
      <header className="z-20 p-3 flex flex-col md:flex-row justify-between items-center bg-indigo-900 fixed left-0 right-0 top-0">
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
        
        <NavBar openMenu={openMenu} />
       
        <button onClick={onClick} className="md:hidden inline-flex items-center justify-center w-8 h-8 mr-2 mt-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
  <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" fillRule="evenodd"></path></svg>
</button>
      </header>
    
    <main className="flex justify-center mt-20" >
        {children}
    </main>
    <div id="snipcart" data-config-modal-style="side" data-api-key="NTZiZjlkNjEtMGQ5Yi00ZmU0LThiYWMtNDIxZTEzZWMwNDFmNjM3NDkxODUyMjE4MzE4ODU4" data-currency="eur" hidden>

    </div>
   
    </>
  )
}









