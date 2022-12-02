import React from 'react';
import './Home.css';
import E from './E.js';
import R from './R.js';
import I from './I.js';
import C from './C.js';
import $ from 'jquery';

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
        var $all_msg;
        var $r_message;
        var $i_message;
        var $c_message;

        if(letter === "E"){
            e = !e;
            console.log(e)
            if(e){
                //get the welcome msg element
                $all_msg = $('.E');
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
                    newEL.delay(idx * 10);
                    //animate the opacity back to full 1
                    newEL.animate({
                    opacity: 1
                    }, 750);
                });
                $('.E').addClass('active');
                $('.EletterCards').addClass('active');
                $('.EletterCards.active').slideDown(750, function(){
                    // $('.home').css('height', '100%');
                });
                
        } else{
                $all_msg = $('.E');
                $all_msg.text("");
                var newEL = $("<span/>").text('E').css({
                opacity: 0
                });
                newEL.appendTo($all_msg);
                newEL.animate({
                opacity: 1
                }, 750);
                $('.E.active').removeClass('active');
                // $('.home').css('height', '100vh');
                $('.EletterCards.active').slideUp(750, function(){
                    $('.EletterCards').removeClass('active');
                });
        }
        }
        if(letter === "R"){
            r = !r;
            if(r){
                $r_message = $('.R');
                $r_message.text("");
                $.each(rArray, function(idx, elem) {
                    var newR = $("<span/>").text(elem).css({
                    opacity: 0
                    });
                    newR.appendTo($r_message);
                    newR.delay(idx * 10);
                    newR.animate({
                    opacity: 1
                    }, 750);
                });
                $('.R').addClass('active');
                $('.RletterCards').addClass('active');
                $('.RletterCards.active').slideDown(750, function(){
                    // $('.home').css('height', '100%');
                });
            } else{
                $r_message = $('.R');
                $r_message.text("");
                var newR = $("<span/>").text('R').css({
                opacity: 0
                });
                newR.appendTo($r_message);
                newR.animate({
                opacity: 1
                }, 750);
                    $('.R.active').removeClass('active');
                    // $('.home').css('height', '100vh');
                    $('.RletterCards.active').slideUp(750, function(){
                        $('.RletterCards').removeClass('active');
                    });
            }
        }
        if(letter === "I"){
            i = !i;
            if(i){
                $i_message = $('.I');
                $i_message.text("");
                $.each(iArray, function(idx, elem) {
                    var newI = $("<span/>").text(elem).css({
                    opacity: 0
                    });
                    newI.appendTo($i_message);
                    newI.delay(idx * 10);
                    newI.animate({
                    opacity: 1
                    }, 750);
                });
                $('.I').addClass('active');
                $('.IletterCards').addClass('active');
                $('.IletterCards.active').slideDown(750, function(){
                    // $('.home').css('height', '100%');
                });
            } else{
                $i_message = $('.I');
                $i_message.text("");
                var newR = $("<span/>").text('I').css({
                opacity: 0
                });
                newR.appendTo($i_message);
                newR.animate({
                opacity: 1
                }, 750);
                    $('.I.active').removeClass('active');
                    // $('.home').css('height', '100vh');
                    $('.IletterCards.active').slideUp(750, function(){
                        $('.IletterCards').removeClass('active');
                    });
            }
        }
        if(letter === "C"){
            c = !c;
            if(c){
                $c_message = $('.C');
                $c_message.text("");
                $.each(cArray, function(idx, elem) {
                    var newC = $("<span/>").text(elem).css({
                    opacity: 0
                    });
                    newC.appendTo($c_message);
                    newC.delay(idx * 10);
                    newC.animate({
                    opacity: 1
                    }, 750);
                });
                $('.C').addClass('active');
                $('.CletterCards').addClass('active');
                $('.CletterCards.active').slideDown(750, function(){
                    // $('.home').css('height', '100%');
                });
            } else{
                $c_message = $('.C');

                $c_message.text("");
                var newC = $("<span/>").text('C').css({
                opacity: 0
                });
                newC.appendTo($c_message);
                newC.animate({
                opacity: 1
                }, 750);
                    $('.C.active').removeClass('active');
                    // $('.home').css('height', '100vh');
                    $('.CletterCards.active').slideUp(750, function(){
                        $('.CletterCards').removeClass('active');
                    });
            }
        }
    }
    return(
        <div className="home">
            <div className="name-container row justify-content-center text-center mx-auto">
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