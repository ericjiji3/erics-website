import React, {useState} from 'react';
import './C.css';
import Card from './Card.js';
import $ from 'jquery';

function Home(){

    return(
        <div>
            <div className="row mb-4">
                <div className="d-flex justify-content-center">
                    <span className="sunglasses1">😎</span>
                    <span className="title">Especially during the winter</span>
                    <span className="sunglasses2">😎</span>
                </div>
                
                <h2 className="text">If you are curious what I'm up to outside of work, look no further!</h2>
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