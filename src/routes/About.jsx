import Hero from "../components/hero" 
import AboutImg from "../assets/Aboutbanners.jpg"
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

const Home = () => {
  return (
    <>
      <Hero
        cName="hero"
        heroImg={AboutImg}
        title="About"
      ></Hero>
      <AboutUs />
      <Footer />
    </>
  )
}

export default Home