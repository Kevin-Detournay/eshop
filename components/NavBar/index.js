import Link from 'next/link'



const Navbar=({openMenu})=>{
 

    return(
    <nav className={
        openMenu 
       ? "h-auto flex flex-col md:flex-row text-white text-center items-center "
       :"hidden md:h-auto md:flex text-white text-center items-center"
       }>
    <Link href="/" ><a className="p-2 m-1 self-center uppercase rounded-md hover:bg-indigo-700 duration-500">Accueil</a></Link>
    <Link href="/categories" ><a className="p-2 m-1 self-center uppercase rounded-md hover:bg-indigo-700 duration-500">Categories</a></Link>
    
   
    <div className="flex align-center p-2 rounded-md hover:bg-indigo-700 duration-500">
        <button className="snipcart-checkout"><i className="mdi mdi-cart ml-2 mr-2"         
         ></i>Mon Panier (<span className="snipcart-items-count"></span>)</button>
    </div>
   </nav>
    )
}

export default Navbar
