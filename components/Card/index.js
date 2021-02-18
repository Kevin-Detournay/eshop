import Link from 'next/link'
export default function Card({article}){

   return (  
   <div className="flex flex-col justify-end max-w-xs bg-white shadow-lg rounded-lg overflow-hidden my-10">
  
  <div className="px-4 py-2">
    <h1 className="text-gray-900 font-bold text-3xl uppercase">{article.name}</h1>
    <p className="text-gray-600 text-sm mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus</p>
  </div> 
  
  <img className="h-56 justify-self-end w-full object-contain mt-2" src={article.image} alt=""/>
  
  <div className="flex items-center justify-between  px-4 py-2 bg-gray-900">
    <h1 className="text-gray-200 font-bold text-xl">$129</h1>
    <button className="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded "

    
    >Voir le produit</button>
  </div>
</div>
)
}
