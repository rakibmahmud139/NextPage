/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({book}) => {
    const {image, title, subtitle, price, isbn13} = book;
    return (
        <Link to={`../book/${isbn13}`}>
        <div className="overflow-hidden relative transition duration-500 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl">
        <img className='object-cover w-full h-56 md:h-64 xl:h-80' src={image} alt="book cover" />

        <div className='bg-black px-6 py-4 bg-opacity-75 hover:opacity-100 opacity-0 text-gray-300 absolute inset-0 transition-opacity duration-500 flex flex-col'>
            <p>{title}</p>
            <br />
            <p>{subtitle.substring(0,45)}...</p>
            <br />
            <p className='mt-auto'>Price: {price}</p>
        </div>
       </div>
        </Link>
    );
};

export default Book;