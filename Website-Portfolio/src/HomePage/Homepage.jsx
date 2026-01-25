import './Homepage.css'

import MeImg from '../assets/Me.png'

function Homepage() {
  return (
    <div className="homepage">
      <div className="Left">
        <h3>Portfolio</h3>
        <h1>Sebastian Maligaya</h1>
        <div className="cta">
          <button className="btn btn-primary">Contact Me</button>
          <button className="btn btn-ghost">CV</button>
        </div>
      </div>
      <div className="Right">
        <img src={MeImg} alt="Sebastian Maligaya" className="profile-image" />
      </div>
    </div>
  )
}

export default Homepage