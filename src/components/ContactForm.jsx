import "./ContactStyle.css";

const ContactForm = () => {
  return (
    <div className="form-container">
        <h2 className="text-center">Send a Message to us!!</h2>
        <form action="">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Message" rows="4" name="" id=""></textarea>
            <button>Send Messsage</button>
        </form>
    </div>
  )
}

export default ContactForm