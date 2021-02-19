import Layout, { siteTitle } from '../../components/Layout'
import Head from 'next/head'
import axios from 'axios'
import Link from 'next/link'
import Card from '../../components/Card'
import utilStyles from '../../styles/utils.module.css'

export async function getStaticProps({params}) {
  
 
  const response = await axios.get(`https://fakestoreapi.com/products/category/${params.category}`)

  const articles=response.data
  

  return {
    props: {
     articles
    }
  }
}

export async function getStaticPaths() {
  const response = await axios.get(`https://fakestoreapi.com/products/`)
  const articles = response.data
 
  
  return {
    paths:articles.map(article=>({
      params:{category:article.category}
    })),
    fallback: false
  }
}


export default function Post({ articles }) {
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
