import Hero from "../components/hero" 
import AboutImg from "../assets/Aboutbanners.jpg"

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