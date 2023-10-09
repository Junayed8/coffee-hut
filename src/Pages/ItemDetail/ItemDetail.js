import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './ItemDetail.css';

const ItemDetail = () => {
    const {itemId}= useParams();

    return (
        <div className='item-detail'>
            <h2>All items here:{itemId}</h2> 
           <div className='text-center'>
           <Link to='/checkout'>
            <button className='button '>Pay to order</button>
            </Link>
           </div>
        </div>
    );
};

export default ItemDetail;