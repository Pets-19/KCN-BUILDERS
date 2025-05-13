
import { useEffect, useRef, useState } from 'react';

interface TestimonialProps {
  avatar: string;
  text: string;
  author: string;
  role: string;
}

const TestimonialCard = ({ avatar, text, author, role }: TestimonialProps) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-avatar">{avatar}</div>
      <div className="testimonial-text">{text}</div>
      <div className="font-semibold text-dark">{author}</div>
      <div className="text-sm text-gray-600">{role}</div>
    </div>
  );
};

const Testimonials = () => {
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (testimonialsRef.current) {
      observer.observe(testimonialsRef.current);
    }
    
    return () => {
      if (testimonialsRef.current) {
        observer.unobserve(testimonialsRef.current);
      }
    };
  }, []);

  const testimonials = [
    {
      avatar: "R",
      text: "KCN turned our dream into reality. The attention to detail and quality of construction exceeded our expectations. Our home is truly a masterpiece.",
      author: "Rajesh Sharma",
      role: "Homeowner, Royal Palms Estate"
    },
    {
      avatar: "P",
      text: "Professional, punctual, and passionate about their work. The team at KCN made our building experience smooth and enjoyable.",
      author: "Priya Mehta",
      role: "Real Estate Investor"
    },
    {
      avatar: "A",
      text: "The smart home features and sustainable design elements make our villa not just beautiful, but also efficient and future-ready.",
      author: "Amit Patel",
      role: "Tech Executive"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <div className="section-title">
            <h2>What Our Clients Say</h2>
            <p>Hear from families who have experienced the KCN difference</p>
          </div>
        </div>
        
        <div 
          ref={testimonialsRef} 
          className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 overflow-x-auto pb-4"
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`transition-all duration-500 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <TestimonialCard
                avatar={testimonial.avatar}
                text={testimonial.text}
                author={testimonial.author}
                role={testimonial.role}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
