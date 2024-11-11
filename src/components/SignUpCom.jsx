import './SignUpStyle.css';

const SignUpCom = () => {
  return (
    <div className="signup-container">
        <h2 className="text-center">Signup From</h2>
        <form action="">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Message" rows="4" name="" id=""></textarea>
            <button>Sign Up</button>
        </form>
    </div>
  )
}

export default SignUpCom