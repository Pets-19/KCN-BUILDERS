
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <div className="section-title">
            <h2>Start Your Dream Project</h2>
            <p>Get in touch with our experts to discuss your vision and receive a customized quote</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
