import React, {useState} from 'react';
import './E.css';
import Card from './Card.js';
import $ from 'jquery';

function Home(){

    return(
        <div className="cards row justify-content-center">
            <Card
                    title='Card Title'
                    imageURL=''
                    body=''
                />
                <Card
                    title='Card Title'
                    imageURL=''
                    body=''
                /><Card
                title='Card Title'
                imageURL=''
                body=''
            />
                <Card
                    title='Card Title'
                    imageURL=''
                    body=''
                />
        </div>

    )
}

export default Home;