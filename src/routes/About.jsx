import Hero from "../components/hero" 
import AboutImg from "../assets/Aboutbanner.jpg"

const Home = () => {
  return (
    <>
      <Hero
        cName="hero"
        heroImg={AboutImg}
        title="About"
      ></Hero>
    </>
  )
}

export default Home