import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import NavBar from './NavBar/index.js'

const name = 'e-shop'
export const siteTitle = 'eshop'

export default function Layout({ children, home,categories }) {
  return (
    <div className={styles.container}>
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
      </Head>
      <header className={styles.header}>
        
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.png"
              className=""
              height={280}
              width={280}
              alt={name}
            />
            <h1 className={utilStyles.headingXl}>{name}</h1>
          </>
        ) : (
          <>   
          <Image
          priority
          src="/images/profile.png"
          className=""
          height={144}
          width={144}
          alt={name}
        />     
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
        <NavBar categories={categories}/>
      </header>
      <main className={styles.mainContent}>{children}</main>
      

    </div>
  )
}