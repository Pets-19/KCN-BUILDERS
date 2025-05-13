
import { useEffect, useRef } from 'react';

interface StatProps {
  number: string;
  label: string;
}

const StatItem = ({ number, label }: StatProps) => {
  return (
    <div className="p-6 text-center">
      <div className="text-5xl font-bold text-gold mb-2">{number}</div>
      <div className="text-lg opacity-90">{label}</div>
    </div>
  );
};

const StatsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
          }
        });
      },
      { threshold: 0.1 }
    );

    const statItems = sectionRef.current?.querySelectorAll('.stat-item');
    statItems?.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      if (statItems) {
        statItems.forEach((item) => {
          observer.unobserve(item);
        });
      }
    };
  }, []);

  return (
    <section className="bg-dark text-white py-12" ref={sectionRef}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="stat-item opacity-0">
            <StatItem number="200+" label="Projects Completed" />
          </div>
          <div className="stat-item opacity-0">
            <StatItem number="15+" label="Years Experience" />
          </div>
          <div className="stat-item opacity-0">
            <StatItem number="500+" label="Happy Families" />
          </div>
          <div className="stat-item opacity-0">
            <StatItem number="25+" label="Awards Won" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
