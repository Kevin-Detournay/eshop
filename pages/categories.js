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

  return (
   <>
    <Head>
    <title>{siteTitle}</title>
    </Head>
  
    
    <section className="flex flex-wrap justify-between " >
    
    {newCat.map((category)=>(
        <Link key={category.categorie} href={`/categories/${category.categorie}`}>
         <a className='mx-auto'>
         <div className="transition duration-500 ease-in-out transform hover:scale-101 transform hover:opacity-50 flex flex-col flex-wrap mx-auto p-1">
           
           <div className=" flex flex-col justify-end max-w-xs bg-white shadow-lg rounded-lg overflow-hidden my-10">
           
             <div className="px-4 py-2">
               <h1 className="text-gray-900 font-bold text-center text-2xl uppercase">{category.categorie}</h1>
              
             </div> 
             
             <img className="h-56 justify-self-end w-full object-contain mt-2" src={category.image} alt=""/>
             
             <div className="flex items-center justify-center px-4 py-2 bg-indigo-900">
           
               <button className=" px-3 py-1 bg-gray-200  text-sm text-gray-900 font-semibold rounded "
               >Voir la categorie </button>
             </div>
           </div>
         </div>

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

  