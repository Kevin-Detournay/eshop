import Layout from '../../components/Layout'
import Head from 'next/head'
import axios from 'axios'



export async function getStaticProps({params}) {
  
  await console.log(params.id)
  const response = await axios.get(`https://fakestoreapi.com/products/${params.id}`)

  const article=response.data
  

  return {
    props: {
     article
    }
  }
}

export async function getStaticPaths() {
  const response = await axios.get('https://fakestoreapi.com/products/')
  const articles= response.data
 
  
  return {
    paths:articles.map(article=>({
      params:{id:article.id.toString()}
    })),
    fallback: false
  }
}


export default function Article({ article }) {
  return (
   <>
    <Head>
      <title>{article.name}</title>
     
    </Head>
   

<div className="bg-indigo-900 flex items-center text-center p-5 lg:p-10 overflow-hidden relative">
    <div className="w-full max-w-6xl rounded mt-10 bg-white shadow-xl p-10 lg:p-20 mx-auto text-indigo-800 relative md:text-left">
        <div className="md:flex items-center -mx-10">
            <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                <div className="relative">
                    <img src={article.image} className="w-full relative z-10" alt=""/>
                    <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                </div>
            </div>
            <div className="w-full md:w-1/2 px-10">
                <div className="mb-10">
                    <h1 className="font-bold uppercase text-2xl mb-5">{article.name}</h1>
                    <p className="text-sm"> {article.description}</p>
                </div>
                <div>
                    <div className="inline-block align-bottom mr-5">
                        <span className="text-2xl leading-none align-baseline">€</span>
                        <span className="font-bold text-5xl leading-none align-baseline">{article.price}</span>

                    </div>
                    <div className="inline-block align-bottom">
                        <button className="snipcart-add-item bg-indigo-500 opacity-75 hover:opacity-100 text-indigo-900 hover:text-indigo-900 rounded-full px-10 py-2 font-semibold"
                         data-item-id={article.id}
                         data-item-price={article.price}
                         data-item-url={`/articles/${article.id}`}
                         data-item-description={article.description}
                         data-item-image={article.image}
                         data-item-name={article.title}
                        ><i className="mdi mdi-cart -ml-2 mr-2"
 
                       
                          
                         ></i> BUY NOW</button>
                         
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


 </>
)
}
