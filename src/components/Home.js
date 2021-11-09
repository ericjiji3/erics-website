import React, {useEffect, useState} from 'react';
import './Home.css';
import Card from './Card.js';
import E from './E.js';
import $ from 'jquery';
import { CSSTransition, SwitchTransition } from "react-transition-group";

function Home(){
    const [e,setE] = useState(false);
    const [eText, setEText] = useState('E');
    const [r,setR] = useState(false);
    const [i,setI] = useState(false);
    const [c,setC] = useState(false);

    useEffect(()=>{
        console.log(e);
        if(e){
                $('.letterCards').addClass('active');
                let homeHeight = 100 + $('.cards.active').height();
                // $('.home').css('height', '100%');
                $('.letterCards.active').slideDown(1000);
                // $('.letter.E').text('Extraterrestrial');
        } else{
                // $('.home').css('height', '100vh');
                $('.letterCards.active').slideUp(1000, function(){
                    $('.letterCards').removeClass('active');
                });
                // $('.letterCards').removeClass('active');
                // $('.letter.E').text('E');
        }
    })
    return(
        <div className="home">
            <div className="name-container row justify-content-center">
                {/*<h1>I am</h1>*/}
                {/* - create loop for text being added
                - setInterval equal to transition time
                - add data-attribute to each letter for the word */}

                <span className="letter E" onClick={() => setE(e => !e)}>{e ? 'Extraterrestrial' : 'E'}</span>
                <div className='letterCards'>
                    <E/>
                </div>
                <span className="letter R" onClick={() => setR(!r)}>R</span>
                <span className="letter I" onClick={() => setI(!i)}>I</span>
                <span className="letter C" onClick={() => setC(!c)}>C</span>
            </div>
        </div>
    )
}

export default Home;