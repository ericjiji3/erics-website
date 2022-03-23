import React, {useState} from 'react';
import './E.css';
import Card from './Card.js';
import $ from 'jquery';
import { EmojiProvider, Emoji } from 'react-apple-emojis';
import emojiData from 'react-apple-emojis/lib/data.json';
import { usePopper } from 'react-popper';
import Tooltip from "./Tooltip";
function Home(){
    const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [{ name: 'arrow', options: { element: arrowElement } }],
  });
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
                    <a className="link" href="https://www.jordon-inrwav.com/" target="_blank">
                    <Card
                            title='Jordon'
                            imageURL=''
                            body='Artist'
                            className="jordon"
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
                <a className="link" href="https://cooperfryar.itch.io/space-raiders" target="_blank">
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
            <a className="link" href="https://jeffrey-macas-website.herokuapp.com/" target="_blank">
            <Card
                    title='Jeffrey'
                    imageURL=''
                    body='Comedian'
                    className="jeffrey"
                />
            </a>
            }
               </Tooltip> 
                    <Tooltip content="progress html-90 css-75 javascript-90 php-75 mysql-50 https://gitlab.com/ej6638/myvideogamelist" direction="bottom">
                    {window.innerWidth < 850 ? 
                    <Card
                    title='My Video Game List'
                    imageURL=''
                    body='Database'
                    className="my-video-game-list"
                />:
                    <a className="link" href="https://gitlab.com/ej6638/myvideogamelist" target="_blank">
                    <Card
                        title='My Video Game List'
                        imageURL=''
                        body='Database'
                        className="my-video-game-list"
                    />
                    </a>
                }
                    </Tooltip>
            <Tooltip content="progress html-90 bootstrap-90 javascript-75 react-50 https://las-muchachos.herokuapp.com/" direction="bottom">
            {window.innerWidth < 850 ? 
            <Card
            title='Las Muchachos'
            imageURL=''
            body='Production Company'
            className="las-muchachos"
        /> :
            <a className="link" href="https://las-muchachos.herokuapp.com/" target="_blank">
                    <Card
                        title='Las Muchachos'
                        imageURL=''
                        body='Production Company'
                        className="las-muchachos"
                    /> </a>
            }
            </Tooltip>
            <Tooltip content="progress html-90 bootstrap-50 javascript-25 react-75 https://cooperfryar.itch.io/space-raiders" direction="bottom">
            {window.innerWidth < 850 ? 
                <Card
                title='Diary of a Wimpy Kid'
                imageURL=''
                body='Blog'
                className="diary-of-a-wimpy-kid"
                />
                :
                <a className="link" href="https://www.diary-of-a-wimpy-kid.com/" target="_blank">
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