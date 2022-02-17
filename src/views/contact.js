import React from 'react';
import emailjs from '@emailjs/browser';

class Contact extends React.Component{
    render(){
        const sendEmail = (e) => {
            e.preventDefault();

            emailjs.sendForm('gmail', 'template_8dh8oek', e.target, 'user_DsrRZtscvm0Z9gDWH3kWe')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
                e.target.reset();
        }

        return(
            <div className='container-fluid custom-bg-color'>
                <div className='row'>
                    <div className='col-md-8 col-lg-4 offset-md-2 offset-lg-4'>
                        <div className='d-flex flex-column align-content-center justify-content-center min-vh-100'>
                            <div className='card text-white bg-secondary'>
                                <div className='card-header'>
                                    <h4 className='custom-card-header-text'>Como posso ajudar?</h4>
                                </div>
                                <div className='card-body'>
                                    <form onSubmit={sendEmail}>
                                        <input type='text' className='form-control mb-1' placeholder='Nome' name='name'/>
                                        <input type='email' className='form-control mb-1' placeholder='Email' name='email'/>
                                        <input type='text' className='form-control mb-1' placeholder='Assunto' name='subject'/>
                                        <textarea type='text' className='form-control mb-2' placeholder='Mensagem' rows='4' name='message'/>
                                        <button className="btn custom-contact-section-btn float-end" 
                                                style={{width:'30%'}} type="submit" value="Send">Enviar</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;