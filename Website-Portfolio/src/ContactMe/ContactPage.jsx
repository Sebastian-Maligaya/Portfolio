import "./ContactPage.css"

function ContactPage() {
    return (
        <div className="Contact-Section">
            <h1>Contact Me</h1>
            <div className="Contact-Form">
                <form>

                    <div className="Contact-1">
                        <div className="Contact-Left">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" placeholder="Your Name here" required />
                        </div>
                        
                        <div className="Contact-Right">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" placeholder="Your Email here" required />
                        </div>

                    </div>

                    <div className="Contact-2">

                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" placeholder="Your message here" required></textarea>
                    </div>



                <button type="submit">Send</button>
            </form>
            </div>

        </div>
    );
}
export default ContactPage;