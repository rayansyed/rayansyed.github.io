import "./contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import { useRef, useState } from "react"
import emailjs from 'emailjs-com';

const Contact = () => {
        const formRef = useRef();
        const [done, setDone] = useState(false);

        const handleSubmit = (e)=>{
            e.preventDefault();
            emailjs.sendForm('service_u5mc473', 'template_c4bq9i8', formRef.current, 'user_jw8K9I2IDksuAO4A15eId')
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
        }
    return (
        <div className="c">
            <div className="c-wrapper">
                <div className="c-right">
                    <h1 className="c-title">Let's Chat!</h1>
                    <form className="c-form" ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" name="user_name"/>
                        <input type="text" placeholder="Subject" name="user_subject"/>
                        <input type="text" placeholder="Email" name="user_email"/>
                        <textarea className="c-textarea" rows="5" placeholder="Message" name="message"/>
                        <br></br>
                        <button>Send</button>
                        {done && " Thank You!"}
                    </form>

                    <div className="c-info">
                        
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon" />
                            416-817-2134
                        </div>
                        <div className="c-info-item">
                            <img src={Email} alt="" className="c-icon" />
                            rayansyed41@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={Address} alt="" className="c-icon" />
                            Toronto, ON.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
