import React from 'react';
import './E.css';
import Card from './Card.js';
import Tooltip from "./Tooltip";
function Home(){

    return(
        <div>
            <div className="row">
                <div className="d-flex justify-content-center">
                    <span className="globe">&#127758;</span>
                    <span className="title">My work is out of this world!</span>
                    <span className="globe">&#127758;</span>
                </div>
        
                <h2 className="text">I am a software developer who loves creating web applications for myself and my passionate clients! You can check out some of my projects below.</h2>
            </div>
            <div className="cards justify-content-center">
            <Tooltip content="progress html-90 css-90 javascript-75 react-50 https://www.jordon-inrwav.com/" direction="bottom">
                {window.innerWidth < 850 ? 
                    <Card
                            title='Jordon'
                            imageURL=''
                            body='Artist'
                            className="jordon"
                        />
                    
                    : 
                    <a className="link" href="https://www.jordon-inrwav.com/" target="_blank" rel="noreferrer">
                    <Card
                            title='Jordon'
                            imageURL=''
                            body='Artist'
                            className="jordon"
                        />
                        </a>
                }
            </Tooltip>
            <Tooltip content="progress wordpress-60 html-30 php-20 css-50 javascript-10 https://southcloudramen.com/" direction="bottom">
            {window.innerWidth < 850 ? 
                <Card
                title='SouthCloud Ramen'
                imageURL=''
                body='Restaurant'
                className="southcloud"
                />
                :
                <a className="link" href="https://southcloudramen.com/" target="_blank" rel="noreferrer">
                    <Card
                        title='SouthCloud Ramen'
                        imageURL=''
                        body='Restaurant'
                        className="southcloud"
                    />
                </a>
                }
            </Tooltip>
            <Tooltip content="progress next-70 html-30 javascript-30 scss-30 https://mahone.netlify.app/" direction="bottom">
            {window.innerWidth < 850 ? 
            <Card
            title='Austin Mahone'
            imageURL=''
            body='Singer'
            className="mahone"
            />
            :
            <a className="link" href="https://mahone.netlify.app/" target="_blank" rel="noreferrer">
            <Card
                    title='Austin Mahone'
                    imageURL=''
                    body='Singer'
                    className="mahone"
                />
            </a>
            }
               </Tooltip> 
               <Tooltip content="progress threejs-70 react-70 blender-40 https://trippy-triangle.netlify.app/" direction="bottom">
            {window.innerWidth < 850 ? 
            <Card
            title='Trippy Triangle'
            imageURL=''
            body='Art'
            className="triangle"
            />
            :
            <a className="link" href="https://trippy-triangle.netlify.app/" target="_blank" rel="noreferrer">
            <Card
                    title='Trippy Triangle'
                    imageURL=''
                    body='Art'
                    className="triangle"
                />
            </a>
            }
               </Tooltip> 
            <Tooltip content="progress html-30 phaser-90 javascript-90 https://cooperfryar.itch.io/space-raiders" direction="bottom">
            {window.innerWidth < 850 ? 
                <Card
                title='Space Raiders'
                imageURL=''
                body='Video Game'
                className="space-raiders"
                />
                :
                <a className="link" href="https://cooperfryar.itch.io/space-raiders" target="_blank" rel="noreferrer">
                    <Card
                        title='Space Raiders'
                        imageURL=''
                        body='Video Game'
                        className="space-raiders"
                    />
                </a>
                }
            </Tooltip>
            <Tooltip content="progress html-90 bootstrap-90 javascript-75 react-50 https://jeffrey-macas-website.herokuapp.com/" direction="bottom">
            {window.innerWidth < 850 ? 
            <Card
            title='Jeffrey'
            imageURL=''
            body='Comedian'
            className="jeffrey"
            />
            :
            <a className="link" href="https://jeffrey-macas-website.herokuapp.com/" target="_blank" rel="noreferrer">
            <Card
                    title='Jeffrey'
                    imageURL=''
                    body='Comedian'
                    className="jeffrey"
                />
            </a>
            }
               </Tooltip> 
            <Tooltip content="progress html-90 bootstrap-50 javascript-25 react-75 https://www.diary-of-a-wimpy-kid.com/" direction="bottom">
            {window.innerWidth < 850 ? 
                <Card
                title='Diary of a Wimpy Kid'
                imageURL=''
                body='Blog'
                className="diary-of-a-wimpy-kid"
                />
                :
                <a className="link" href="https://www.diary-of-a-wimpy-kid.com/" target="_blank" rel="noreferrer">
                    <Card
                        title='Diary of a Wimpy Kid'
                        imageURL=''
                        body='Blog'
                        className="diary-of-a-wimpy-kid"
                    />
                </a>
                }
            </Tooltip>
            </div>
            
        </div>

    )
}

export default Home;