import "./HeroStyle.css"
import Herobanner from '../assets/Heropage/Herobanner.jpg';


const hero = () => {
  return (
    <>
      <div className="hero">
      <img width={"100%"} src={Herobanner} alt="travel-img" />
      </div>
    </>
  )
}

export default hero