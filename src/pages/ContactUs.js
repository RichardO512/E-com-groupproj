import React from 'react'
import "../components/styles/ContactUs.css";
// import bg2 from '../components/images/bg2.png';
function ContactUs() {
    return (
        <div id='contactUs'>
            <div className="contactme" id="contact">
                <div className="contactOverlay">
                    <div className="container">
                        <div className="form">
                            <form action="" onSubmit="">
                                <div className="formWord">
                                    <h2>Say Hello!</h2>
                                    <span>Full Name</span>
                                    <br />
                                    <input className="input100" type="text" name="fullName" id="fullname" required />
                                    <br />
                                    <span>Phone Number</span>
                                    <br />
                                    <input className="input100" type="text" name="phone" id="phone" required />
                                    <br />
                                    <span>Enter Email</span>
                                    <br />
                                    <input className="input100" type="text" name="email" id="email" required />
                                    <br />
                                </div>
                                <div className="formWord">
                                    <span>Message</span>
                                    <br />
                                    <textarea name="message" id="message" required></textarea>
                                    <br />
                                    <button>SUBMIT</button>

                                    {/* <div className="row">All Done</div> */}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
