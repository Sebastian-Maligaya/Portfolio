import "./Project.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";


import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Infinite3DCarousel from './CarouselTest'




function Projects() {
    return (
        <section id="projects-section" className="projects-section">
            <div  className="section-title">
                <h1>Projects</h1>
            </div>

              <Infinite3DCarousel />

        </section>
    );
}

export default Projects;