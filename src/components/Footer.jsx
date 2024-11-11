import "./FooterStyle.css";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaSquareGithub } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="footer">
            <div className="top">
                <div>
                    <h2>Trippy</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div>
                    <a href="/"><FaLinkedin /></a>
                    <a href="/"><FaFacebookSquare /></a>
                    <a href="/"><FaInstagramSquare /></a>
                    <a href="/"><BsTwitterX /></a>
                    <a href="/"><FaSquareGithub /></a>
                </div>
            </div>

            <div className="bottom">
                <div>
                    <h4>Project</h4>
                    <a href="/">Linkedin</a>
                    <a href="/">Facebook</a>
                    <a href="/">Instagram</a>
                    <a href="/">TwitterX</a>
                    <a href="/">Github</a>
                </div>
                <div>
                    <h4>Community</h4>
                    <a href="/">Status</a>
                    <a href="/">License</a>
                    <a href="/">All Version</a>
                    <a href="/">Status</a>
                </div>
                <div>
                    <h4>Help</h4>
                    <a href="/">Support</a>
                    <a href="/">Troubleshooting</a>
                    <a href="/">Contact Us</a>
                </div>
                <div>
                    <h4>Others</h4>
                    <a href="/">Terms of Service</a>
                    <a href="/">Privacy Policy</a>
                    <a href="/">License</a>
                </div>
            </div>
        </div>
    )
}

export default Footer