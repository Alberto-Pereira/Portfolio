import React from 'react';

class Contact extends React.Component{
    render(){
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
                                    <form>
                                        <input type='text' className='form-control mb-1' placeholder='Nome'/>
                                        <input type='email' className='form-control mb-1' placeholder='Email'/>
                                        <input type='text' className='form-control mb-1' placeholder='Assunto'/>
                                        <textarea type='text' className='form-control mb-2' placeholder='Mensagem' rows='4'/>
                                        <button className="btn custom-contact-section-btn float-end" 
                                                style={{width:'30%'}}>Enviar</button>
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