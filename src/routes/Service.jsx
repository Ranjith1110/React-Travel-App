import Hero from "../components/hero" 
import ServiceImg from "../assets/Servicebanner.jpg"

const Home = () => {
  return (
    <>
      <Hero
        cName="hero"
        heroImg={ServiceImg}
        title="Service"
      ></Hero>
    </>
  )
}

export default Home