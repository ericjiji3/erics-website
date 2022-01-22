import React, {useState} from 'react';
import './I.css';
import Card from './Card.js';
import $ from 'jquery';

function Home(){

    return(
        <div>
        <div className="row mb-4">
                <div className="d-flex justify-content-center">
                    <span className="lightbulb1">💡</span>
                    <span className="title">The best way to have a good idea is to have lots of ideas</span>
                    <span className="lightbulb2">💡</span>
                </div>
                
                <h2 className="text">I am constantly exploring new innovations in technology and software development. Check out some of my small creative projects!</h2>
            </div>
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
        </div>
    )
}

export default Home;