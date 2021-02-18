import Layout from '../../components/Layout'
import Head from 'next/head'
import axios from 'axios'



export async function getStaticProps({params}) {
  
  await console.log(params.id)
  const response = await axios.get(`https://rickandmortyapi.com/api/character/${params.id}`)

  const article=response.data
  

  return {
    props: {
     article
    }
  }
}

export async function getStaticPaths() {
  const response = await axios.get('https://rickandmortyapi.com/api/character/')
  const posts= response.data.results
 
  
  return {
    paths:posts.map(post=>({
      params:{id:post.id.toString()}
    })),
    fallback: false
  }
}


export default function Post({ article }) {
  return (
    <Layout>
    <Head>
      <title>{article.name}</title>
     
    </Head>
    
<style>@import url(https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css);</style>
<div className="min-w-screen min-h-screen bg-yellow-300 flex items-center p-5 lg:p-10 overflow-hidden relative">
    <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
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
                    <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing, elit. Eos, voluptatum dolorum! Laborum blanditiis consequatur, voluptates, sint enim fugiat saepe, dolor fugit, magnam explicabo eaque quas id quo porro dolorum facilis... <a href="#" className="opacity-50 text-gray-900 hover:opacity-100 inline-block text-xs leading-none border-b border-gray-900">MORE <i className="mdi mdi-arrow-right"></i></a></p>
                </div>
                <div>
                    <div className="inline-block align-bottom mr-5">
                        <span className="text-2xl leading-none align-baseline">$</span>
                        <span className="font-bold text-5xl leading-none align-baseline">129</span>
                        <span className="text-2xl leading-none align-baseline">.00</span>
                    </div>
                    <div className="inline-block align-bottom">
                        <button className="snipcart-add-item bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold"
                         data-item-id={article.id}
                         data-item-price={129}
                         data-item-url="/"
                         data-item-description={`High-quality sticker of ${article.name}.`}
                         data-item-image={article.image}
                         data-item-name={article.name}
                        ><i className="mdi mdi-cart -ml-2 mr-2"
 
                       
                          
                         ></i> BUY NOW</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
    <div>
        <a title="Buy me a beer" href="https://www.buymeacoffee.com/scottwindon" target="_blank" className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
            <img className="object-cover d object-center w-full h-full rounded-full" src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg"/>
        </a>
    </div>
</div>

  </Layout>
)
}