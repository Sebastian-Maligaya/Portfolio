import "./Project.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projects = [
  {
    title: "PC Planner",
    description: "Smart PC component compatibility checker",
    image: "/pcplanner.jpg",
    live: "#",
    github: "#",
  },
  {
    title: "Energy Tracker",
    description: "Monitor household power consumption",
    image: "/energy.jpg",
    live: "#",
    github: "#",
  },
  {
    title: "Elderly Care App",
    description: "Guardian reminder and monitoring system",
    image: "/elderly.jpg",
    live: "#",
    github: "#",
  },
];


function Projects() {
    return (
        <section id="projects-section" className="projects-section">
            <div  className="section-title">
                <h1>Projects</h1>
            </div>

            <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={1.5}
                spaceBetween={50}
                pagination ={{ clickable: true }}
                loop={true}
                centeredSlides={true}
            >
                {projects.map((project, index) => (
                    <SwiperSlide key={index}>
                        <div className="project-card">
                            <img src={project.image} alt={project.title} />

                            <div className="project-overlay">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>

                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </section>
    );
}

export default Projects;