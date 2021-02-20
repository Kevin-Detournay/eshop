import PropTypes from 'prop-types';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import NavBar from './NavBar';

export const siteTitle = 'eshop';

export default function Layout({ children, onClick, openMenu }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <style>@import url(https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css);</style>
        <meta
          name="description"
          content="mock-eshop projet perso "
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.30/default/snipcart.css" />

        <script async src="https://cdn.snipcart.com/themes/v3.0.30/default/snipcart.js" />
      </Head>
      <header className="z-20 p-3 md:px-8 flex flex-col md:flex-row justify-between items-center bg-green-900 fixed left-0 right-0 top-0">
        <h2 className="m-2">
          <Link href="/">
            <a>
              <Image
                src="/images/profile.png"
                alt="main logo"
                width={50}
                height={50}
              />
            </a>
          </Link>
        </h2>

        <NavBar openMenu={openMenu} />

        {/* eslint-disable-next-line react/button-has-type */}
        <button onClick={onClick} className="md:hidden inline-flex items-center justify-center w-8 h-8 text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800">
          <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" fillRule="evenodd" /></svg>
        </button>
      </header>

      <main className="flex justify-center mt-20">
        {children}
      </main>
      <div id="snipcart" data-config-modal-style="side" data-api-key="NTZiZjlkNjEtMGQ5Yi00ZmU0LThiYWMtNDIxZTEzZWMwNDFmNjM3NDkxODUyMjE4MzE4ODU4" data-currency="eur" hidden />

    </>
  );
}

Layout.propTypes = {
  openMenu: PropTypes.bool.isRequired,
  children: PropTypes.any.isRequired,
  onClick: PropTypes.func.isRequired,
};
