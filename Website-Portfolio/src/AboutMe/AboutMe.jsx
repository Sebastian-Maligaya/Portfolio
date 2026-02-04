import './AboutMe.css';
import AboutMeImg from '../assets/AboutMe.png'

function AboutMe() {

    const logos = [
        { name: "MySQL", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" },
        { name: "Python", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
        { name: "Java", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" },
        { name: "C#", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" },
        { name: "JavaScript", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
        { name: "React", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
        { name: "CSS", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" },
        { name: "NodeJS", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" },
    ];

    return (
        <div>
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
            {/*
            <div className='Skills'>
                <h1>Skills</h1>
                <p>Programming Languages</p>

                <div className="logos-container">
                    {logos.map((logo, index) => (
                        <div className="Item-logo" key={index}>
                            <img src={logo.src} alt={logo.name} />
                        </div>
                    ))}
                </div>

            </div>
            */}
        </div>
    );
}

export default AboutMe;