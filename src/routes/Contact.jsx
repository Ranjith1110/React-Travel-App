import Hero from "../components/hero" 
import ContactImg from "../assets/Contactbanner.jpg"
import Footer from "../components/Footer"
import ContactForm from "../components/ContactForm"

const Home = () => {
  return (
    <>
      <Hero
        cName="hero"
        heroImg={ContactImg}
        title="Contact"
      ></Hero>
      <ContactForm />
      <Footer />
    </>
  )
}

export default Home