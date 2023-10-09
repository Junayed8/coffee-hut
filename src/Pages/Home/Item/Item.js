import React from 'react';
import './Item.css';
import { useNavigate } from 'react-router-dom';

const Item = ({item}) => {
    const {id,name, img, price, description}= item;
    const navigate = useNavigate();

    const navigateToServiceDetail= id=>{
            navigate(`/item/${id}`);
    }
    return (
         <div className="card" style={{width: "25rem"}}>
                <img src={img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <p>Price: ${price}</p>
                    <button onClick={()=>navigateToServiceDetail(id)} className="btn btn-primary">Checkout</button>
                </div>
       </div>
    
    );
};

export default Item;