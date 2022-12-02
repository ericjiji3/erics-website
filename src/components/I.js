import React from 'react';
import './I.css';
import Card from './Card.js';

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
        <div className="cards justify-content-center">
            <a className="link" href="https://github.com/ericjiji3" target="_blank" rel="noreferrer">
            <Card
                    title='GitHub'
                    imageURL=''
                    body=''
                    className="github"
                />
                </a>
                <a className="link" href="https://gitlab.com/ej6638" target="_blank" rel="noreferrer">
                <Card
                    title='GitLab'
                    imageURL=''
                    body=''
                    className="gitlab"
                />
                </a>
                <a className="link" href="https://ej6638.itch.io/" target="_blank" rel="noreferrer">
                <Card
                    title='itch IO'
                    imageURL=''
                    body=''
                    className="itch"
                />
                </a>
        </div>
        </div>
    )
}

export default Home;