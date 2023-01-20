import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';


function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');

    const { name, email, message } = formState;

    function handleChange(e) {

        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`Your ${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }


        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }

        // console.log('errorMessage', errorMessage);
    }

    // console.log(formState);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }



    return (
        <section>
            <section className='position-relative py-4 py-xl-5'>
                <div className='container position-relative'>
                    <div className='row d-flex justify-content-center'>
                        <div className='col-md-8 col-lg-6 col-xl-5 col-xxl-4'>
                            <div className='card mb-5'>
                                <div className='card-body p-sm-5'>
                                    <h2 className='text-center mb-4 h2-my-forms-title'>
                                        Get in touch with me
                                    </h2>
                                    <form method='post' onSubmit={handleSubmit}>
                                        <div className='mb-3'>
                                            <input id='name-2' className='form-control form-styles' type='text' defaultValue={name} onBlur={handleChange} name='name' placeholder='Name' />
                                        </div>
                                        <div className='mb-3'>
                                            <input id='email-2' className='form-control form-styles' type='email' defaultValue={email} onBlur={handleChange} name='email' placeholder='Email' />
                                        </div>
                                        <div className='mb-3'>
                                            <textarea id='message-2' className='form-control form-styles' rows='6' defaultValue={message} onBlur={handleChange} name='message' placeholder='Message' />
                                        </div>
                                        {errorMessage && (
                                            <div>
                                                <p className="error-text">{errorMessage}</p>
                                            </div>
                                        )}
                                        <div>
                                            <button className='btn contactBtn d-block w-100 form-styles' type='submit'>
                                                Send
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            {/*  */}
            {/* <h1>Contact</h1> */}
            {/* <form id='contact-form'>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' name='name' />
                </div>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' name='email'/>
                </div>
                <div>
                    <label htmlFor='message'>Message:</label>
                    <textarea name='message' rows='5' />
                </div>
                <button type='submit'>Send</button>
            </form> */}
        </section>
    );

}

export default ContactForm;