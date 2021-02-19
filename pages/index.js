import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout'
import utilStyles from '../styles/utils.module.css'
import axios from 'axios'
import Link from 'next/link'
import Card from '../components/Card'


export async function getStaticProps() {
    const response = await axios.get('https://fakestoreapi.com/products/')
  const articles= response.data
  const responseCat = await axios.get('https://fakestoreapi.com/products/categories')
    const categories= responseCat.data
  return {
    props: {
      articles,
        
    }
  }
}


export default function Home({articles}) {

  return (
   <>
    <Head>
    <title>{siteTitle}</title>
    </Head>
  
    
    <section className="flex flex-wrap items-end justify-between p-10" >
    
    {articles.map((article)=>(
        <Link key={article.id} href={`/articles/${article.id}`}>
         <a className="mx-auto">
           <Card  article={article} />
         </a>
        </Link>
         
        )
      )
    } 
    </section>

    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
    
    </section>
  </>
  
    )
  }

  