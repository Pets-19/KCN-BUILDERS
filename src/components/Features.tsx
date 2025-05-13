
import { useEffect, useRef } from 'react';

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureProps) => {
  return (
    <div className="feature-card">
      <div className="feature-icon">{icon}</div>
      <h3 className="text-2xl font-medium text-dark mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

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

    const featureElements = featuresRef.current?.querySelectorAll('.feature-card');
    featureElements?.forEach((el) => observer.observe(el));

    return () => {
      if (featureElements) {
        featureElements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  const features = [
    {
      icon: "🏗️",
      title: "Premium Craftsmanship",
      description: "Our master craftsmen bring decades of experience, ensuring every detail meets KCN's renowned standards of quality and precision."
    },
    {
      icon: "🎨",
      title: "Innovative Design",
      description: "KCN's award-winning architects create spaces that seamlessly blend contemporary aesthetics with functional brilliance."
    },
    {
      icon: "🌱",
      title: "Sustainable Building",
      description: "KCN leads in eco-conscious construction using green materials and energy-efficient technologies for a sustainable future."
    },
    {
      icon: "⚡",
      title: "Smart Home Integration",
      description: "KCN specializes in cutting-edge home automation systems that bring convenience and security to your fingertips."
    },
    {
      icon: "📅",
      title: "On-Time Delivery",
      description: "KCN prides itself on meeting deadlines without compromising on quality or attention to detail."
    },
    {
      icon: "🛡️",
      title: "Lifetime Support",
      description: "KCN's commitment extends beyond completion with comprehensive after-sales support and maintenance services."
    }
  ];

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <div className="section-title">
            <h2>Why Choose KCN?</h2>
            <p>We bring unparalleled expertise and innovation to every project, ensuring your dream home becomes reality</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10" ref={featuresRef}>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
