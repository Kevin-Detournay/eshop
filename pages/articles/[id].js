/* eslint-disable react/button-has-type */
import Head from 'next/head';
import axios from 'axios';
import Link from 'next/link';
import PropTypes from 'prop-types';

export async function getStaticProps({ params }) {
  const response = await axios.get(`https://fakestoreapi.com/products/${params.id}`);
  const article = response.data;
  return {
    props: {
      article,
    },
  };
}

export async function getStaticPaths() {
  const response = await axios.get('https://fakestoreapi.com/products/');
  const articles = response.data;

  return {
    paths: articles.map((article) => ({
      params: { id: article.id.toString() },
    })),
    fallback: false,
  };
}

export default function Article({ article }) {
  return (
    <>
      <Head>
        <title>{article.title}</title>
      </Head>

      <div className="bg-green-900 w-full flex items-center text-center p-5 lg:p-10 overflow-hidden relative">
        <div className="w-full max-w-6xl rounded mt-10 bg-white shadow-xl p-10 lg:p-20 mx-auto text-green-800 relative md:text-left">
          <div className="md:flex items-center -mx-10">
            <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
              <div className="relative">
                <img src={article.image} className="w-full relative z-10" alt="" />
                <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0" />
              </div>
            </div>
            <div className="w-full md:w-1/2 px-10">
              <div className="mb-10">
                <h1 className="font-bold uppercase text-2xl mb-5">{article.title}</h1>
                <p className="text-sm"> {article.description}</p>
              </div>
              <div>
                <div className="inline-block align-bottom mr-5 mb-4">
                  <span className="text-2xl leading-none align-baseline">€</span>
                  <span className="font-bold text-5xl leading-none align-baseline">{article.price}</span>

                </div>
                <div className="flex flex-col ">
                  <button
                    className="snipcart-add-item bg-green-500 opacity-75 hover:opacity-100 text-green-900 hover:text-green-900 rounded-full px-10 py-2 font-semibold"
                    data-item-id={article.id}
                    data-item-price={article.price}
                    data-item-url={`/articles/${article.id}`}
                    data-item-description={article.description}
                    data-item-image={article.image}
                    data-item-name={article.title}
                  ><i className="mdi mdi-cart -ml-2 mr-2" /> BUY NOW
                  </button>
                  <Link href="/"><a className="p-5 mt-5 self-center uppercase hover:text-green-300">← retour a l'Accueil</a></Link>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

Article.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    description: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,

};
