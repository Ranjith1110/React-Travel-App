import { Component } from "react";
import "./DestinationStyle.css";



class DestinationData extends Component {
    render() {
        return (
            <div className={`${this.props.className}`}>
                <div>
                    <h3>{this.props.heading}</h3>
                    <p>{this.props.text}</p>
                </div>

                <div className="d-flex gap-2">
                    <img className="object-fit-cover" src={this.props.img1} alt="travel-img" />
                    <img className="object-fit-cover mt-3" src={this.props.img2} alt="travel-img" />
                </div>

            </div>
        )
    }
}

export default DestinationData;