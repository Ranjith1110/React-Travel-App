import Travel1 from "../assets/destination-1.jpg";
import Travel2 from "../assets/destination-2.jpg";
import "./DestinationStyle.css"

const Destination = () => {
  return (
    <>
      <div className="destination">
        <div className="text-center">
          <h2>Popular Destination</h2>
          <p>Tour give you the opportunity to see a lot, within a time frame</p>
        </div>

        <div className="first-description d-flex justify-content-between align-items-center">
          <div>
            <h3>Taal Valcano</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusantium omnis natus facere eligendi tempore laboriosam possimus animi, aliquid molestias quod delectus maiores, quidem, quasi suscipit nobis atque quibusdam soluta!
              Doloremque odit possimus doloribus praesentium eius placeat, ipsum aliquid beatae dolorum exercitationem omnis ut labore error asperiores quidem enim quibusdam, soluta numquam, cum delectus. Dolor commodi quidem voluptatibus velit deleniti.</p>
          </div>

          <div className="d-flex gap-2">
            <img className="object-fit-cover" src={Travel1} alt="travel-img" />
            <img className="object-fit-cover mt-3" src={Travel2} alt="travel-img" />
          </div>

        </div>
      </div>

    </>
  )
}

export default Destination