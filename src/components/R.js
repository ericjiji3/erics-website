import React, {useState} from 'react';
import './E.css';
import Card from './Card.js';
import $ from 'jquery';

function Home(){

    return(
        <div>
            <div className="row">
                <span className="title">I respond fast... just like this website!</span>
                <h2 className="text">I am a software developer who specializes in making websites for my passionate clients! You can check out some of my work below.</h2>
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