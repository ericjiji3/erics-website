import React, {useEffect, useState} from 'react';
import './Home.css';
import Card from './Card.js';
import E from './E.js';
import R from './R.js';
import I from './I.js';
import C from './C.js';
import $ from 'jquery';
import { CSSTransition, SwitchTransition } from "react-transition-group";

function Home(){
    const [e,setE] = useState(false);
    const [r,setR] = useState(false);
    const [i,setI] = useState(false);
    const [c,setC] = useState(false);
    const eArray = ['X','T','R','A','T','E','R','R','E','S','T','R','I','A','L'];

    useEffect(()=>{
        console.log(e);
        if(e){
                $('.E').addClass('active');
                $('.EletterCards').addClass('active');
                $('.EletterCards.active').slideDown(1000);
                
        } else{
                $('.E.active').removeClass('active');
                $('.EletterCards.active').slideUp(1000, function(){
                    $('.EletterCards').removeClass('active');
                });
        }
        if(r){
            $('.R').addClass('active');
            $('.RletterCards').addClass('active');
            $('.RletterCards.active').slideDown(1000);
        } else{
                $('.R.active').removeClass('active');
                $('.RletterCards.active').slideUp(1000, function(){
                    $('.RletterCards').removeClass('active');
                });
        }
        if(i){
            $('.I').addClass('active');
            $('.IletterCards').addClass('active');
            $('.IletterCards.active').slideDown(1000);
        } else{
            $('.I.active').removeClass('active');
                $('.IletterCards.active').slideUp(1000, function(){
                    $('.IletterCards').removeClass('active');
                });
        }
        if(c){
            $('.C').addClass('active');
            $('.CletterCards').addClass('active');
            $('.CletterCards.active').slideDown(1000);
        } else{
            $('.C.active').removeClass('active');
            $('.CletterCards.active').slideUp(1000, function(){
                $('.CletterCards').removeClass('active');
            });
        }
        })
    return(
        <div className="home">
            <div className="name-container row justify-content-center">
                {/*<h1>I am</h1>*/}
                {/* - create loop for text being added
                - setInterval equal to transition time
                - add data-attribute to each letter for the word */}

                <p className="E" onClick={() => setE(e => !e)}>{e ? 'Extraterrestrial' : 'E'}</p>
                <div className='EletterCards'>
                    <E/>
                </div>
                <span className="R" onClick={() => setR(!r)}>{r ? 'Responsive' : 'R'}</span>
                <div className='RletterCards'>
                    <R/>
                </div>
                <span className="I" onClick={() => setI(!i)}>{i ? 'Imaginative' : 'I'}</span>
                <div className='IletterCards'>
                    <I/>
                </div>
                <span className="C" onClick={() => setC(!c)}>{c ? 'Cool' : 'C'}</span>
                <div className='CletterCards'>
                    <C/>
                </div>
            </div>
        </div>
    )
}

export default Home;