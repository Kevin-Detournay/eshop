import Link from 'next/link';
import PropTypes from 'prop-types';

const Navbar = ({ openMenu }) => (
  <nav className={
        openMenu
          ? 'h-auto flex flex-col md:flex-row text-white text-center items-center '
          : 'hidden md:h-auto md:flex text-white text-center items-center'
       }
  >
    <Link href="/"><a className="p-2 m-1 self-center uppercase rounded-md hover:bg-indigo-700 duration-500">Accueil</a></Link>
    <Link href="/categories"><a className="p-2 m-1 self-center uppercase rounded-md hover:bg-indigo-700 duration-500">Categories</a></Link>

    <div className="flex align-center p-2 rounded-md hover:bg-indigo-700 duration-500">
      { /* eslint-disable-next-line react/button-has-type */}
      <button className="snipcart-checkout"><i className="mdi mdi-cart ml-2 mr-2" />Mon Panier (<span className="snipcart-items-count" />)
      </button>
    </div>
  </nav>
);

export default Navbar;

Navbar.propTypes = {
  openMenu: PropTypes.bool.isRequired,
};
