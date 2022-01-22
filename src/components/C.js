import React, {useState} from 'react';
import './C.css';
import Card from './Card.js';
import $ from 'jquery';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebookF,
    faTwitter,
    faInstagram,
    faSpotify,
    faLinkedin,
    faTwitch
  } from "@fortawesome/free-brands-svg-icons";
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
                    <a href = "https://twitter.com/dj_ji3" className = "twitter px-3 col-1" target="_blank">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href = "https://www.instagram.com/dj_ji/" className = "instagram px-3 col-1" target="_blank">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href = "https://www.linkedin.com/in/eric-ji-b96775192/" className = "linkedin px-3 col-1" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href = "https://open.spotify.com/user/qbm4hmd1ob4xw6rwf7bs09vso" className = "spotify px-3 col-1" target="_blank">
                <FontAwesomeIcon icon={faSpotify} size="2x" />
            </a>
            <a href = "https://www.twitch.tv/dj_ji3" className = "twitch px-3 col-1" target="_blank">
                <FontAwesomeIcon icon={faTwitch} size="2x" />
            </a>
            </div>
        </div>
        

    )
}

export default Home;