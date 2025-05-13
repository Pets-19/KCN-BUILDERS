
import { useEffect, useRef } from 'react';
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const projectElements = projectsRef.current?.querySelectorAll('.project-card');
    projectElements?.forEach((el) => observer.observe(el));

    return () => {
      if (projectElements) {
        projectElements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <div className="section-title">
            <h2>Featured Projects</h2>
            <p>Discover our portfolio of exceptional homes that showcase our commitment to excellence and innovation</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10" ref={projectsRef}>
          <ProjectCard
            image="https://images.unsplash.com/photo-1527576539890-dfa815648363"
            tag="Luxury Villa"
            title="Royal Palms Estate"
            description="A stunning contemporary villa featuring panoramic views, infinity pool, and smart home automation."
            sqft="4,500"
            bedrooms="5"
            price="₹5.2Cr"
            type="villa"
          />
          
          <ProjectCard
            image="https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a"
            tag="Premium Apartments"
            title="Skyline Towers"
            description="Luxury high-rise apartments with world-class amenities and breathtaking city views."
            sqft="1,800"
            bedrooms="3"
            price="₹2.5Cr"
            type="apartment"
          />
          
          <ProjectCard
            image="https://images.unsplash.com/photo-1493397212122-2b85dda8106b"
            tag="Eco-Friendly"
            title="Green Valley Homes"
            description="Sustainable townhouses with solar panels, rainwater harvesting, and organic gardens."
            sqft="2,800"
            bedrooms="3"
            price="₹3.5Cr"
            type="townhouse"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
