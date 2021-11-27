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
    var e = false;
    var r = false;
    var i = false;
    var c = false;
    // const [e,setE] = useState(false);
    // const [r,setR] = useState(false);
    // const [i,setI] = useState(false);
    // const [c,setC] = useState(false);
    const eArray = ['E','X','T','R','A','T','E','R','R','E','S','T','R','I','A','L'];
    const rArray = ['R','E','S','P','O','N','S','I','V','E'];
    const iArray = ['I','M','A','G','I','N','A','T','I','V','E'];
    const cArray = ['C','O','O','L'];

    function handleClick(letter){
        if(letter == "E"){
            e = !e;
            console.log(e)
            if(e){
                //get the welcome msg element
                var $all_msg = $('.E');
                //get a list of letters from the welcome text
                //clear the welcome text msg
                $all_msg.text("");
                //loop through the letters in the $wordList array
                $.each(eArray, function(idx, elem) {
                    //create a span for the letter and set opacity to 0
                    var newEL = $("<span/>").text(elem).css({
                    opacity: 0
                    });
                    //append it to the welcome message
                    newEL.appendTo($all_msg);
                    //set the delay on the animation for this element
                    newEL.delay(idx * 70);
                    //animate the opacity back to full 1
                    newEL.animate({
                    opacity: 1
                    }, 1100);
                });
                $('.EletterCards').addClass('active');
                $('.EletterCards.active').slideDown(1000, function(){
                    // $('.home').css('height', '100%');
                });
                
        } else{
                var $all_msg = $('.E');
                $all_msg.text("");
                var newEL = $("<span/>").text('E').css({
                opacity: 0
                });
                newEL.appendTo($all_msg);
                newEL.animate({
                opacity: 1
                }, 1100);
                $('.E.active').removeClass('active');
                // $('.home').css('height', '100vh');
                $('.EletterCards.active').slideUp(1000, function(){
                    $('.EletterCards').removeClass('active');
                });
        }
        }
        if(letter == "R"){
            r = !r;
            if(r){
                var $r_message = $('.R');
                $r_message.text("");
                $.each(rArray, function(idx, elem) {
                    var newR = $("<span/>").text(elem).css({
                    opacity: 0
                    });
                    newR.appendTo($r_message);
                    newR.delay(idx * 70);
                    newR.animate({
                    opacity: 1
                    }, 1100);
                });
                $('.R').addClass('active');
                $('.RletterCards').addClass('active');
                $('.RletterCards.active').slideDown(1000, function(){
                    // $('.home').css('height', '100%');
                });
            } else{
                var $r_message = $('.R');
                $r_message.text("");
                var newR = $("<span/>").text('R').css({
                opacity: 0
                });
                newR.appendTo($r_message);
                newR.animate({
                opacity: 1
                }, 1100);
                    $('.R.active').removeClass('active');
                    // $('.home').css('height', '100vh');
                    $('.RletterCards.active').slideUp(1000, function(){
                        $('.RletterCards').removeClass('active');
                    });
            }
        }
        if(letter == "I"){
            i = !i;
            if(i){
                var $i_message = $('.I');
                $i_message.text("");
                $.each(iArray, function(idx, elem) {
                    var newI = $("<span/>").text(elem).css({
                    opacity: 0
                    });
                    newI.appendTo($i_message);
                    newI.delay(idx * 70);
                    newI.animate({
                    opacity: 1
                    }, 1100);
                });
                $('.I').addClass('active');
                $('.IletterCards').addClass('active');
                $('.IletterCards.active').slideDown(1000, function(){
                    // $('.home').css('height', '100%');
                });
            } else{
                var $i_message = $('.I');
                $i_message.text("");
                var newR = $("<span/>").text('I').css({
                opacity: 0
                });
                newR.appendTo($i_message);
                newR.animate({
                opacity: 1
                }, 1100);
                    $('.I.active').removeClass('active');
                    // $('.home').css('height', '100vh');
                    $('.IletterCards.active').slideUp(1000, function(){
                        $('.IletterCards').removeClass('active');
                    });
            }
        }
        if(letter == "C"){
            c = !c;
            if(c){
                var $c_message = $('.C');
                $c_message.text("");
                $.each(cArray, function(idx, elem) {
                    var newC = $("<span/>").text(elem).css({
                    opacity: 0
                    });
                    newC.appendTo($c_message);
                    newC.delay(idx * 70);
                    newC.animate({
                    opacity: 1
                    }, 1100);
                });
                $('.C').addClass('active');
                $('.CletterCards').addClass('active');
                $('.CletterCards.active').slideDown(1000, function(){
                    // $('.home').css('height', '100%');
                });
            } else{
                var $c_message = $('.C');
                var $wordList = $c_message.text().split("");
                $c_message.text("");
                var newC = $("<span/>").text('C').css({
                opacity: 0
                });
                newC.appendTo($c_message);
                newC.animate({
                opacity: 1
                }, 1100);
                    $('.C.active').removeClass('active');
                    // $('.home').css('height', '100vh');
                    $('.CletterCards.active').slideUp(1000, function(){
                        $('.CletterCards').removeClass('active');
                    });
            }
        }
    }
    return(
        <div className="home">
            <div className="name-container row justify-content-center">
                {/*<h1>I am</h1>*/}
                {/* - create loop for text being added
                - setInterval equal to transition time
                - add data-attribute to each letter for the word */}

                <p className="E" onClick={() => handleClick('E')}>E</p>
                <div className='EletterCards'>
                    <E/>
                </div>
                <span className="R" onClick={() => handleClick('R')}>R</span>
                <div className='RletterCards'>
                    <R/>
                </div>
                <span className="I" onClick={() => handleClick('I')}>I</span>
                <div className='IletterCards'>
                    <I/>
                </div>
                <span className="C" onClick={() => handleClick('C')}>C</span>
                <div className='CletterCards'>
                    <C/>
                </div>
            </div>
        </div>
    )
}

export default Home;