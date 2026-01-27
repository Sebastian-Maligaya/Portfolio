import './AboutMe.css';
import AboutMeImg from '../assets/AboutMe.png'

function AboutMe() {
    return (
        <div className="about-me-container">
            <div className="AboutMeLeft">
                <h1>About Me</h1>
                <p>Information Technology student with hands-on project experience in software  development,
                    networking, and database management, I am eager to begin my professional  journey in the
                    IT industry. I aim to contribute my technical expertise, problem-solving abilities,  and
                    teamwork skills to an innovative company while continuing to grow as an IT professional.</p>
            </div>
            <div className="AboutMeRight">
                <img src={AboutMeImg} alt="AboutMe" className="image" />
            </div>
        </div>
    );
}

export default AboutMe;