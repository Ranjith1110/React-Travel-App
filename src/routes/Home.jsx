import Hero from "../components/hero" 
import Herobanner from '../assets/Herobanner.jpg';

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
    </>
  )
}

export default Home