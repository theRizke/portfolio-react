import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import Modal from "react-bootstrap/Modal";

const Contact = () => {


    const [showModal, setShowModal] = useState(false);

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_tg1tewj', 'template_wwn7lgh', form.current, 'user_ia2DbEFv2doGS5tVcRjX8')
            .then((result) => {
                setShowModal(true);
            }, (error) => {
                alert(error.text);
            });
    };

    return(
    <section className="d-flex flex-column">
        <div className="">
            <h1>Contact</h1>
        </div>
        <div className="d-flex flex-column flex-xl-row">
            <div className="col-12 col-xl-4 p-2 m-2 contact-left">
                <h4 className="russo-text">Let's talk about everything!</h4>
                <p className="h6">Don't like forms? Send me an <a className="text-danger" href="mailto:rizkemail@gmail.com">email.</a></p>
            </div>
            <div className="d-flex flex-column col-12 col-xl-7 p-2 m-2 russo-text">
                <form ref={form} onSubmit={sendEmail}>
                    <div className="d-flex flex-row justify-content-between col-12 my-3 ">
                        <div className="col-6"><input className="form-control rounded-pill p-3 m-0" name="name" type="text" placeholder="Your Name" required></input></div>
                        <div className="col-5"><input className="form-control rounded-pill p-3 m-0" name="email" type="email" placeholder="E-mail address" required></input></div>
                    </div>
                    <div className="my-3">
                        <input className="form-control rounded-pill p-3" name="subject" type="text" placeholder="Subject" required></input>
                    </div>
                    <div className="my-3">
                        <textarea className="form-control p-3 message-area" placeholder="Message" name="message" rows="9" required></textarea>
                    </div>
                    <div>
                        <button className="btn-danger rounded-pill home-button" type="submit">Send</button>
                    </div>
                </form>
            </div>
        </div>
         <Modal size="lg" show={showModal} onHide={() => setShowModal(false)} aria-labelledby="example-modal-sizes-title-lg" centered>
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                    Message succesfully sent
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                    Thank you for your message, i will contact you soon. <p>Sincerely,</p> <p>David</p></Modal.Body>
        </Modal> 
    </section>)
}

export default Contact;