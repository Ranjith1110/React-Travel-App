import "./TripStyle.css";

const TripData = (props) => {
    return (
        <div className="t-card">
            <div className="t-img">
                <img className="w-100 h-100 object-fit-cover" src={props.img} alt="img" />
            </div>
            <h4>{props.heading}</h4>
            <p>{props.content}</p>
        </div>
    )
}

export default TripData