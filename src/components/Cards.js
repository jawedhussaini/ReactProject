import React from 'react';
import CardItem from './CardItem';
import './Card.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>check out EPEC Destination</h1>
            <div className="cards__container">
                <div className="cards__wraper">
                    <ul className="cards__items">
                        <CardItem 
                        src="images/img-9.jpg"
                        text="Explore the hiden waterfall deep inside the amazon jungle"
                        label='Adventure'
                        path='/sevices'/>
                          <CardItem 
                        src="images/img-2.jpg"
                        text="Explore the hiden waterfall deep inside the amazon jungle"
                        label='Adventure'
                        path='/sevices'/>
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src="images/img-8.jpg"
                        text="Explore the hiden waterfall deep inside the amazon jungle"
                        label='Adventure'
                        path='/sevices'/>
                          <CardItem 
                        src="images/img-7.jpg"
                        text="Explore the hiden waterfall deep inside the amazon jungle"
                        label='Adventure'
                        path='/sevices'/>
                          <CardItem 
                        src="images/img-6.jpg"
                        text="Explore the hiden waterfall deep inside the amazon jungle"
                        label='Adventure'
                        path='/sevices'/>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Cards;
