import Hero from "../components/hero";
import ServiceImg from "../assets/Servicebanner.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";  

const Home = () => {
  return (
    <>
      <Hero
        cName="hero"
        heroImg={ServiceImg}
        title="Service"
      ></Hero>
      <Trip />
      <Footer/>
    </>
  )
}

export default Home