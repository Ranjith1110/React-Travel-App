import DestinationData from "./DestinationData"
import "./DestinationStyle.css"
import Travel1 from "../assets/destination-1.jpg";
import Travel2 from "../assets/destination-2.jpg";
import Travel3 from "../assets/destination-3.jpg";
import Travel4 from "../assets/destination-4.jpg";

const Destination = () => {
  return (
    <>
      <div className="destination">
        <div className="text-center">
          <h2>Popular Destination</h2>
          <p>Tour give you the opportunity to see a lot, within a time frame</p>
        </div>

        <DestinationData

          className="first-description"
          heading="Taal Valcanooo"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusantium omnis natus facere eligendi tempore laboriosam possimus animi, aliquid molestias quod delectus maiores, quidem, quasi suscipit nobis atque quibusdam soluta!
                        Doloremque odit possimus doloribus praesentium eius placeat, ipsum aliquid beatae dolorum exercitationem omnis ut labore error asperiores quidem enim quibusdam, soluta numquam, cum delectus. Dolor commodi quidem voluptatibus velit deleniti voluptatibus velit deleniti."
          img1={Travel1}
          img2={Travel2}

        />

        <DestinationData

          className="first-description-reverse"
          heading="Mt. Dadu Valcanooo"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusantium omnis natus facere eligendi tempore laboriosam possimus animi, aliquid molestias quod delectus maiores, quidem, quasi suscipit nobis atque quibusdam soluta!
              Doloremque odit possimus doloribus praesentium eius placeat, ipsum aliquid beatae dolorum exercitationem omnis ut labore error asperiores quidem enim quibusdam, soluta numquam, cum delectus. Dolor commodi quidem voluptatibus velit deleniti voluptatibus velit deleniti."
          img1={Travel3}
          img2={Travel4}

        />

      </div>
    </>
  )
}

export default Destination