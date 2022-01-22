import React, {useState} from 'react';
import './Card.css'
import { usePopper } from 'react-popper';

function Card({title, imageURL, body, className}){
    

    return(
            <div className={`card-container ${className}`}>
            {/* <div className='image-container'>
                <img src={imageURL} alt=''/>
            </div> */}
            <div className='content'>
                <div className='title-container'>
                    <h3>{title}</h3>
                    <p>{body}</p>
                </div>
                {/* <div className='body-container'>
                    <p>{body}</p>
                </div> */}
                {/* <div className='button'>
                    <button>
                        <a>View More</a>
                    </button>
                </div> */}
            </div>

        </div>

    )
}

export default Card;