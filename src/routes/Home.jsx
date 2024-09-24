import Hero from "../components/hero" 
import Destination from "../components/Destination";
import Herobanner from '../assets/Herobanners.jpg';

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
    </>
  )
}

export default Home