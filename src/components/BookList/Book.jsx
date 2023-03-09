import React from 'react';
import { Link } from 'react-router-dom';
import "./BookList.css";

const Book = () => {
  return (
    <div className='book-item flex flex-column flex-sb'>
      <div className='book-item-img'>
        <img src = {require('../../images/about-img.jpg')} alt = "cover" />
      </div>
      <div className='book-item-info text-center'>
        <Link to = {`/book/2`} >
          <div className='book-item-info-item title fw-7 fs-18'>
            <span>dddddddddddddddddddddd</span>
          </div>
        </Link>

        <div className='book-item-info-item author fs-15'>
          <span className='text-capitalize fw-7'>Author: </span>
          <span>dddddddddddddddddddd</span>
        </div>

        <div className='book-item-info-item edition-count fs-15'>
          <span className='text-capitalize fw-7'>Total Editions: </span>
          <span>ddddddddddddddd</span>
        </div>

        <div className='book-item-info-item publish-year fs-15'>
          <span className='text-capitalize fw-7'>First Publish Year: </span>
          <span>dddddddddddddddd</span>
        </div>
      </div>
    </div>
  )
}

export default Book