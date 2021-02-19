import Head from 'next/head'
import LoginForm from './LogingForm'
import Image from 'next/image'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import NavBar from './NavBar/index.js'

 export const siteTitle= "eshop"

export default function Layout({ children}) {
  return (
  <>
    <Head>
    <link rel="icon" href="/favicon.ico" />
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
      <header className="text-center">
      
        <Image
        src="/images/profile.png"
        alt="main logo"
        width={200}
        height={200}
        />
        
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{siteTitle}</a>
              </Link>
            </h2>
        
       
        <NavBar/>
      </header>
    
    <main>
        {children}
    </main>
    <div id="snipcart" data-config-modal-style="side" data-api-key="NTZiZjlkNjEtMGQ5Yi00ZmU0LThiYWMtNDIxZTEzZWMwNDFmNjM3NDkxODUyMjE4MzE4ODU4" data-currency="eur" hidden>

    </div>
   
    </>
  )
}









