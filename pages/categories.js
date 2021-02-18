import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout'
import utilStyles from '../styles/utils.module.css'
import axios from 'axios'
import Link from 'next/link'
import Card from '../components/Card'

export async function getStaticProps() {
    const response = await axios.get('https://fakestoreapi.com/products/categories')
    const categories= response.data
    
  
  return {
    props: {
      categories,
     
    }
  }
}


export default function Categories({categories}) {

  return (
   <Layout home>
    <Head>
    <title>{siteTitle}</title>
    </Head>
  
    
    <section className="flex flex-wrap justify-between p-10" >
    
    {categories.map((category)=>(
        <Link key={category} href={`/categories/${category}`}>
         <a>
           {category}
         </a>
        </Link>
         
        )
      )
    } 
    </section>

    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
    
    </section>
  </Layout>
  
    )
  }

  