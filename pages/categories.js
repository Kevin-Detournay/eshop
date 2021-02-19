import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout'
import utilStyles from '../styles/utils.module.css'
import axios from 'axios'
import Link from 'next/link'
import Image from 'next/image'

export async function getStaticProps() {
    const response = await axios.get('https://fakestoreapi.com/products/categories')
    const categories= response.data
    
      const thumbnails= await Promise.all(categories.map(async(categorie)=>{
      const r= await axios.get(`https://fakestoreapi.com/products/category/${categorie}?limit=1`)
      const thumb= r.data.[0].image
      return thumb
      }
    )
  )
  

 
    const newCat=categories.map((categorie,index)=>(
      {
         categorie,image:thumbnails[index]
      }
     
  
    ))

  return {
    props: {
      newCat,
     
    }
  }
}


export default function Categories({newCat}) {
console.log(newCat)
  return (
   <Layout >
    <Head>
    <title>{siteTitle}</title>
    </Head>
  
    
    <section className="flex flex-wrap justify-between p-10" >
    
    {newCat.map((category)=>(
        <Link key={category.categorie} href={`/categories/${category.categorie}`}>
         <a className='flex flex-col flex-wrap mx-auto p-1'>
           
           <h1 className='mb-2 text-center'>{category.categorie}</h1>
           <div className='w-40' 
           >
             <img src={category.image} alt=""/></div>
        
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

  