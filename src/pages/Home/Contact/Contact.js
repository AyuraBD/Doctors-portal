import React from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import './Contact.css';

const Contact = () => {
    return (
        <section className='py-16 contact'>
            <div className="contact-heading text-center mb-3">
                <h4 className='text-xl font-bold uppercase text-primary'>Contact</h4>
                <h2 className='text-white text-4xl'>Stay connected with Us</h2>
            </div>
            <div className="contact-form">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="text" placeholder="Subject" />
                                </Form.Group>
                                <FloatingLabel controlId="floatingTextarea2">
                                    <Form.Control
                                        as="textarea"  className='mb-3'
                                        placeholder="Your Message"
                                        style={{ height: '100px' }}
                                    />
                                </FloatingLabel>
                                <div className="contact-btn text-center">
                                <button type="submit" className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Submit</button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Contact;