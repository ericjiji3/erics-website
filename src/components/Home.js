import React, {useState} from 'react';
import './Home.css';
import Card from './Card.js';
import E from './E.js';
import $ from 'jquery';

function Home(){
    const [e,setE] = useState(false);
    const [r,setR] = useState(false);
    const [i,setI] = useState(false);
    const [c,setC] = useState(false);

    function handleClick(data){
        if(data == 'E'){
                setE(!e);
                if(e){
                    $('.cards').addClass('active');
                    $('.letter.E').addClass('active');
                    $('.home').height($('.home').height() + $('.cards.active').height());
                } else{
                    $('.cards').removeClass('active');
                    $('.letter.E').removeClass('active');
                    $('.home').height($('.home').height() - $('.cards.active').height());
                }
        } else if(data == 'R'){

        } else if(data == 'i'){
            
        } else{
            
        }
    }
    return(
        <div className="home">
            <div className="name-container row justify-content-center">
                {/*<h1>I am</h1>*/}
                <span className="letter E" onClick={() => handleClick('E')}>E</span>
                <div className='cards'>
                    <E/>
                </div>
                <span className="letter R" onClick={() => handleClick('R')}>R</span>
                <span className="letter I" onClick={() => handleClick('I')}>I</span>
                <span className="letter C" onClick={() => handleClick('C')}>C</span>
            </div>
        </div>
    )
}

export default Home;