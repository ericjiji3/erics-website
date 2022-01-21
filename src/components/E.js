import React, {useState} from 'react';
import './E.css';
import Card from './Card.js';
import $ from 'jquery';
import { EmojiProvider, Emoji } from 'react-apple-emojis';
import emojiData from 'react-apple-emojis/lib/data.json';

function Home(){

    return(
        <div>
            <div className="row">
                <div className="d-flex justify-content-center">
                    <span className="globe">🌎</span>
                    <span className="title">My work is out of this world!</span>
                    <span className="globe">🌎</span>
                </div>
        
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