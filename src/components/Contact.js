const Contact = () => {
    return (
    <div className="d-flex flex-column">
        <div className="">
            <h1>Contact</h1>
        </div>
        <div className="d-flex flex-column flex-xl-row">
            <div className="col-12 col-xl-4 p-2 m-2 contact-left">
                <h4 className="russo-text">Let's talk about everything!</h4>
                <p>Don't like forms? Send me an <a className="text-danger" href="mailto:rizkemail@gmail.com">email.</a></p>
            </div>
            <div className="d-flex flex-column col-12 col-xl-7 p-2 m-2 russo-text">
                <form>
                    <div className="d-flex flex-row justify-content-between col-12 my-3 ">
                        <div className="col-6"><input className="form-control rounded-pill p-3 m-0" name="name" type="text" placeholder="Your Name"></input></div>
                        <div className="col-5"><input className="form-control rounded-pill p-3 m-0" name="email" type="emait" placeholder="E-mail address"></input></div>
                    </div>
                    <div className="my-3">
                        <input className="form-control rounded-pill p-3" name="subject" type="text" placeholder="Subject"></input>
                    </div>
                    <div className="my-3">
                        <textarea className="form-control p-3 message-area" placeholder="Message" name="message" rows="9"></textarea>
                    </div>
                    <div>
                         <button className="btn-danger rounded-pill home-button" type="submit" >Submit</button>
                    </div>

                </form>
            </div>
        </div>
    </div>)
}

export default Contact;