import React from 'react';

function ContactForm() {
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
                                    <form method='post'>
                                        <div className='mb-3'>
                                            <input id='name-2' className='form-control form-styles' type='text' name='name' placeholder='Name'/>
                                        </div>
                                        <div className='mb-3'>
                                            <input id='email-2' className='form-control form-styles' type='email' name='email' placeholder='Email'/>
                                        </div>
                                        <div className='mb-3'>
                                            <textarea id='message-2' className='form-control form-styles' rows='6' name='message' placeholder='Message'/>
                                        </div>
                                        <div>
                                            <button className='btn btn-primary d-block w-100 form-styles' type='submit'>
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