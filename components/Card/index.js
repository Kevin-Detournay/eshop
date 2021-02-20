import PropTypes from 'prop-types';

export default function Card({ article }) {
  return (
    <div className="transition duration-500 ease-in-out transform hover:scale-101 transform hover:opacity-50 flex flex-col justify-end max-w-xs bg-white shadow-lg rounded-lg overflow-hidden my-10">

      <div className="px-4 py-2">
        <h1 className="text-gray-900 font-bold text-2xl uppercase">{article.title}</h1>
        {/* eslint-disable-next-line react/prop-types */}
        <p className="text-gray-600 text-sm mt-1">{`${article.description.split(' ').slice(0, 30).join(' ')} ...`}</p>
      </div>

      <img className="h-56 justify-self-end w-full object-contain mt-2" src={article.image} alt="" />

      <div className="flex items-center justify-end  px-4 py-2 bg-green-900">
        <h1 className="text-gray-200 font-bold  text-xl">{article.price} €</h1>

      </div>
    </div>
  );
}

Card.propTypes = {
  article: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};
