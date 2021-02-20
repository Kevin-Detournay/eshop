import Head from 'next/head';
import axios from 'axios';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { siteTitle } from '../components/Layout';
import utilStyles from '../styles/utils.module.css';
import Card from '../components/Card';

export async function getStaticProps() {
  const response = await axios.get('https://fakestoreapi.com/products/');
  const articles = response.data;

  return {
    props: {
      articles,

    },
  };
}

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className="flex justify-center flex-wrap items-end justify-between md:p-10">

        {articles.map((article) => (
          <Link key={article.id} href={`/articles/${article.id}`}>
            <a className="mx-auto">
              <Card article={article} />
            </a>
          </Link>

        ))}
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`} />
    </>

  );
}

Home.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      image: PropTypes.string,
      description: PropTypes.string,
      title: PropTypes.string,
      price: PropTypes.number,
    }),
  ).isRequired,
};
