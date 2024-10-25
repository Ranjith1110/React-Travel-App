import "./HeroStyle.css"

const hero = (props) => {
  return (
    <>
      <div className={`${props.cName} w-100 position-relative`}>
        <img className="w-100 vh-100 object-fit-cover" src={props.heroImg} alt="travel-img" />

        <div className="w-100 hero-text text-center position-absolute">
          <h1 className={props.hClass}>{props.title}</h1>
          <p className="mb-4">{props.content}</p>
          <a className={props.btnClass} href={props.url}>{props.buttonText}</a>
        </div>
      </div>


    </>
  )
}

export default hero
