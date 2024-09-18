import Hero from "../components/hero" 
import ContactImg from "../assets/Contactbanner.jpg"

const Home = () => {
  return (
    <>
      <Hero
        cName="hero"
        heroImg={ContactImg}
        title="Contact"
      ></Hero>
    </>
  )
}

export default Home