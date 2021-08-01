import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
        <h1>Check out these destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="images/amazon.jpg"
                        text="Explore hidden waterfalls deep inside the Amazon Jungle"
                        label='Adventure'
                        path='/services'
                        />
                        <CardItem 
                        src="images/maldives.jpg"
                        text="Swim in the eletric blue waters of the Maldives"
                        label='Adventure'
                        path='/services'
                        />
                        </ul>
                        <ul className="cards__items">
                        <CardItem 
                        src="images/castelmezzano.jpg"
                        text="Relax in the secluded town of Castelmenzzano in the southern province of Italy"
                        label='Adventure'
                        path='/services'
                        />
                        <CardItem 
                        src="images/matterhorn.jpg"
                        text="Climb the mythical mount Matterhorn in Switzerland"
                        label='Adventure'
                        path='/services'
                        />
                        <CardItem 
                        src="images/japan.jpg"
                        text="Eat your way through the street markets of Japan"
                        label='Adventure'
                        path='/services'
                        />                        
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
