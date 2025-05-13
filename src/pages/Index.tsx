import { useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import Features from "@/components/Features";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Loader from "@/components/Loader";

const Index = () => {
  useEffect(() => {
    // Update the document title
    document.title = "KCN - Build For Future";
    
    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
        }
      });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.feature-card, .project-card, .testimonial-card').forEach(el => {
      observer.observe(el);
    });
    
    // Phone number formatting
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
      phoneInput.addEventListener('input', function(e) {
        const target = e.target as HTMLInputElement;
        let value = target.value.replace(/\D/g, '');
        let formattedValue = '';
        
        if (value.length >= 6) {
          formattedValue = value.replace(/(\d{5})(\d{5})/, '$1-$2');
        } else {
          formattedValue = value;
        }
        
        if (formattedValue !== target.value) {
          target.value = formattedValue;
        }
      });
    }
    
    // Email validation
    const emailInput = document.getElementById('email');
    if (emailInput) {
      emailInput.addEventListener('blur', function(e) {
        const target = e.target as HTMLInputElement;
        const email = target.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (email && !emailRegex.test(email)) {
          target.style.borderColor = '#e74c3c';
        } else {
          target.style.borderColor = '#e0e0e0';
        }
      });
    }
    
    // Cleanup
    return () => {
      document.querySelectorAll('.feature-card, .project-card, .testimonial-card').forEach(el => {
        observer.unobserve(el);
      });
      
      if (phoneInput) {
        phoneInput.removeEventListener('input', () => {});
      }
      
      if (emailInput) {
        emailInput.removeEventListener('blur', () => {});
      }
    };
  }, []);

  return (
    <>
      <Loader />
      <Navbar />
      <Hero />
      <StatsSection />
      <Features />
      <Projects />
      <Testimonials />
      <Awards />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </>
  );
};

export default Index;
