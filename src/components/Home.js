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

    useEffect(()=>{
        console.log(e);
        if(e){
                $('.EletterCards').addClass('active');
                $('.EletterCards.active').slideDown(1000);
        } else{
                $('.EletterCards.active').slideUp(1000, function(){
                    $('.EletterCards').removeClass('active');
                });
        }
        if(r){
            $('.RletterCards').addClass('active');
            $('.RletterCards.active').slideDown(1000);
        } else{
                $('.RletterCards.active').slideUp(1000, function(){
                    $('.RletterCards').removeClass('active');
                });
        }
        if(i){
            $('.IletterCards').addClass('active');
            $('.IletterCards.active').slideDown(1000);
        } else{
                $('.IletterCards.active').slideUp(1000, function(){
                    $('.IletterCards').removeClass('active');
                });
        }
        if(c){
            $('.CletterCards').addClass('active');
            $('.CletterCards.active').slideDown(1000);
        } else{
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

                <span className="E" onClick={() => setE(e => !e)}>{e ? 'Extraterrestrial' : 'E'}</span>
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