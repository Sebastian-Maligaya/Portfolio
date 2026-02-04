import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "./CarouselTest.css";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const projects = [
  { title: "PC Planner", image: "/pcplanner.jpg" },
  { title: "Energy Tracker", image: "/energy.jpg" },
  { title: "Elderly Care", image: "/elderly.jpg" },
  { title: "Portfolio", image: "/portfolio.jpg" },
];

function Infinite3DCarousel() {
  return (
    <section className="carousel-3d">
      <Swiper
        modules={[EffectCoverflow, Pagination, Navigation]}

        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1.5}
        loop={true}

        pagination={{ clickable: true }}
        navigation
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="carousel-card">
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Infinite3DCarousel;
