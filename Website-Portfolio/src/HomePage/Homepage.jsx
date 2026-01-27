import './Homepage.css'

import MeImg from '../assets/CropMe.png'

function Homepage() {
  return (
    <div className="homepage">
      <div className="Left">
        <div className='name'>
        <h3>PORTFOLIO</h3>
        <h1>Sebastian Maligaya</h1>
        </div>

        <div className="button">
          <button className="btn">Contact Me</button>
          <button className="btn">CV</button>
        </div>
      </div>
      <div className="Right">
        <img src={MeImg} alt="Sebastian Maligaya" className="profile-image" />
      </div>
    </div>
  )
}

export default Homepage