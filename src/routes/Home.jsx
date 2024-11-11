import Hero from "../components/hero";
import Herobanner from '../assets/Herobanners.jpg';
import Destination from "../components/Destination";
import Trip from "../components/Trip";

const Home = () => {
  return (
    <>
      <Hero
        cName="hero"
        heroImg={Herobanner}
        title="Your Journey Your Story"
        content="Choose Your Favourite Destination.."
        btnClass="show"
        url="#"
        buttonText="Travel Plan"
      ></Hero>
      <Destination></Destination>
      <Trip></Trip>
    </>
  )
}

export default Home