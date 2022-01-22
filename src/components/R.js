import React, {useState, useRef} from 'react';
import './R.css';
import Card from './Card.js';
import $ from 'jquery';
import emailjs from 'emailjs-com';
function Home(){
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2dt5qs8', 'template_2j5t0ph', form.current, 'user_C7gzVm4ecUCU38p1wXg1v')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
    return(
        <div>
            <div className="row mb-4">
                <div className="d-flex justify-content-center">
                    <span className="mail">✉️</span>
                    <span className="title">I respond fast... just like this website!</span>
                    <span className="mail">✉️</span>
                </div>
                
                <h2 className="text">Feel free to send me a message about anything and I'll be sure to respond as fast as I can!</h2>
            </div>
            <div className="row justify-content-center text-center">
            <form className="form" ref={form} onSubmit={sendEmail} autocomplete="off">
                <div className="block">
                    <label className="form-label">Name</label>
                    <input className="form-input" type="text" autocomplete="off" name="from_name" />
                </div>
                <div className="block">
                    <label className="form-label">Email</label>
                    <input className="form-input" type="email" autocomplete="off" name="from_email" />
                </div>
                <div>
                    <h2 className="message-label">Message</h2>
                    <textarea className="form-message-input"   name="message" />
                </div>
            
                <input className="button" type="submit" value="Send" />
            </form>
        </div>

        </div>

    )
}

export default Home;