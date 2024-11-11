import "./TripStyle.css";
import TripData from "./TripData";
import Trip1 from "../assets/card1.jpg";
import Trip2 from "../assets/card2.jpg";
import Trip3 from "../assets/card3.jpg";

const Trip = () => {
    return (
        <div className="trip">
            <div className="text-center">
                <h2>Recent Trips</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, itaque.</p>
                <div className="tripcard">
                    <TripData
                        img={Trip1}
                        heading="Trip in India"
                        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, itaque.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, itaque.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, itaque.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, itaque.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, itaque."
                    />

                    <TripData
                        img={Trip2}
                        heading="Trip in India"
                        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, itaque.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, itaque.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, itaque.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, itaque.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, itaque."
                    />

                    <TripData
                        img={Trip3}
                        heading="Trip in India"
                        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, itaque.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, itaque.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, itaque.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, itaque.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, itaque."
                    />
                </div>
            </div>

        </div>
    )
}

export default Trip
