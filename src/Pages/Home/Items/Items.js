import React from 'react';
import './Items.css';
import Item from '../Item/Item';
import Cappucino from '../../../Images/Cappuccino.jpg';
import Espresso from '../../../Images/Espresso.jpg';
import Irish from '../../../Images/Irish Coffe.jpg';
import Machiato from '../../../Images/Macchiato.jpg';
import Americano from '../../../Images/Americano.jpg';
import Black from '../../../Images/Black coffee.jpg';


//* making data to show item *//

const items= [
    {id:1, name: 'Cappucino', description: 'Amazing flavor', price: '70', img: Cappucino},
    {id:2, name: 'Espresso', description: 'Elegant taste', price: '90', img: Espresso},
    {id:3, name: 'Irish Coffee', description: 'Irish flavor', price: '100', img: Irish},
    {id:4, name: 'Machiato', description: 'Exclusive flavor', price: '120', img: Machiato},
    {id:5, name: 'Americano', description: 'Royal flavor', price: '120', img: Americano},
    {id:6, name: 'Black Coffee', description: 'Dark flavor', price: '120', img: Black}
]

const Items = () => {
    return (
        <div id='items'>
            <h2 className='items-title'>Our coffees</h2>
          <div className='items-container'>
          {
                items.map(item=> <Item
                key={item.id}
                item={item}
                ></Item>)
            }
          </div>
        </div>
    );
};

export default Items;