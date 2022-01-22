import React, {useState, useRef} from 'react';
import './R.css';
import Card from './Card.js';
import $ from 'jquery';
import emailjs from 'emailjs-com';
function Home(){
    const form = useRef();
    function validateFields(data){
        var validate = true;
        $.each(data, function(i, field){
            if(field.name == 'from_email'){
                var email = field.value;
                email.toLowerCase();
                if(!email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) || !email){
                    validate = false;
                }
            }
            if(field.name == 'from_name'){
                if(!field.value){
                    validate = false;
                }
            }
            if(field.name == 'from_subject'){
                if(!field.value){
                    validate = false;
                }
            }
            if(field.name == 'message'){
                if(!field.value){
                    validate = false;
                }
            }
        })
        return validate;
    }


    function sendEmail(e){
        e.preventDefault();
        $('.form .button').prop('disabled', true);
        var data = $('.form').serializeArray();
        if(validateFields(data)){
            emailjs.sendForm('service_2dt5qs8', 'template_2j5t0ph', e.target, 'user_C7gzVm4ecUCU38p1wXg1v')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                $('.form .button').val("✔");
                $('.form .button').addClass('correct');
            }, (error) => {
                console.log(error.text);
                e.target.reset();
            });
        } else{
            $('.form .button').val("✖");
            $('.form .button').addClass('incorrect');
            e.target.reset();
            alert("Oops, looks like something went wrong! Refresh the page and make sure all the fields have the correct information.");
        }
        
    }

    return(
        <div>
            <div className="row mb-4">
                <div className="d-flex justify-content-center">
                    <span className="mail1">✉️</span>
                    <span className="title">I respond fast... just like this website!</span>
                    <span className="mail2">✉️</span>
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
                <div className="block">
                    <label className="form-label">Subject</label>
                    <input className="form-input" type="text" autocomplete="off" name="from_subject" />
                </div>
                <div>
                    <h2 className="message-label">Message</h2>
                    <textarea className="form-message-input"   name="message" />
                </div>
            
                <input className="button" type="submit" value="Submit" />
            </form>
        </div>

        </div>

    )
}

export default Home;