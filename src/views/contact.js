import React from 'react';

import emailjs from '@emailjs/browser';
import { mensagemSucesso, mensagemErro } from '../components/toastr-cp'

class Contact extends React.Component{

    state = {
        name:'',
        email:'',
        subject:'',
        message:''
    }

    sendEmail = (e) => {
        e.preventDefault();

        const msgs = this.validar();

        if(msgs && msgs.length > 0){
            msgs.forEach((msg) => {
                mensagemErro(msg)
            })
            return false
        }

        emailjs.sendForm('gmail', 'template_8dh8oek', e.target, 'user_DsrRZtscvm0Z9gDWH3kWe')
            .then((result) => {
                console.log(result.text);
                mensagemSucesso("Sucesso", "Mensagem enviada!");
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
    }

    validar(){
        console.log("Metodo foi chamado!");
        const msgs = []

        console.log(this.state)

        const validarNome = /^([A-Za-z]{1}[a-z]+\s?)+$/;
        const validarEmail = /^[a-z0-9._]+[@]{1}[a-z0-9]+[.]{1}[a-z]+$/;

        if(!this.state.name){
            msgs.push('O campo Nome é obrigatório.')
        }else if(!this.state.name.match(validarNome)){
            msgs.push('Informe um nome válido.')
        }

        if(!this.state.email){
            msgs.push('O campo Email é obrigatório.')
        }else if(!this.state.email.match(validarEmail)){
            msgs.push('Informe um email válido.')
        }

        console.log(this.state)

        return msgs;
    }


    render(){
        return(
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-8 col-lg-4 offset-md-2 offset-lg-4'>
                        <div className='d-flex flex-column align-content-center justify-content-center min-vh-100'>
                            <div className='card text-white bg-secondary scale-up-center-other-pages'>
                                <div className='card-header'>
                                    <h4 className='custom-card-header-text'>Como posso ajudar?</h4>
                                </div>
                                <div className='card-body'>
                                    <form onSubmit={this.sendEmail}>
                                        <input type='text' className='form-control mb-1' placeholder='Nome' name='name' 
                                               onChange={e => this.setState({name: e.target.value})} required={true}/>
                                        <input type='email' className='form-control mb-1' placeholder='Email' name='email'
                                               onChange={e => this.setState({email: e.target.value})} required={true}/>
                                        <input type='text' className='form-control mb-1' placeholder='Assunto' name='subject'
                                               onChange={e => this.setState({subject: e.target.value})} required={true}/>
                                        <textarea type='text' className='form-control mb-2' placeholder='Mensagem' rows='4' name='message'
                                               onChange={e => this.setState({message: e.target.value})} required={true}/>
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