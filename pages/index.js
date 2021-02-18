import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import axios from 'axios'
import Link from 'next/link'
import Card from '../components/Card'

export async function getStaticProps() {
    const response = await axios.get('https://rickandmortyapi.com/api/character/')
  const articles= response.data.results
  
  return {
    props: {
      articles

    }
  }
}


export default function Home({articles}) {

  return (
    <Layout home>
    <Head>
    <title>{siteTitle}</title>
    <link rel="preconnect" href="https://app.snipcart.com"/>
      <link rel="preconnect" href="https://cdn.snipcart.com"/>
      <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.30/default/snipcart.css" />
      

    </Head>
  
    
    <section className="flex flex-wrap justify-between p-10" >
    
    {articles.map((article)=>(
        <Link key={article.id} href={`/articles/${article.id}`}>
         <a>
           <Card  article={article} />
         </a>
        </Link>
         
        )
      )
    } 
    </section>
    
  )
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
    
    </section>
  
    </Layout>
    )
  }