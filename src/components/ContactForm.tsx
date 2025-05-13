
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    // Get form data
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    setTimeout(() => {
      toast({
        title: "Consultation Request Received",
        description: "Thank you for your inquiry! Our team will contact you within 24 hours to discuss your dream project.",
      });
      
      // Reset form
      e.currentTarget.reset();
      setLoading(false);
    }, 1500);
  };

  return (
    <form onSubmit={handleFormSubmit} className="bg-white p-8 md:p-12 rounded-3xl shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="firstName" className="block mb-2 font-semibold text-dark">First Name</label>
          <input 
            type="text" 
            id="firstName" 
            name="firstName" 
            required 
            className="form-input"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block mb-2 font-semibold text-dark">Last Name</label>
          <input 
            type="text" 
            id="lastName" 
            name="lastName" 
            required 
            className="form-input"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="email" className="block mb-2 font-semibold text-dark">Email Address</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            required 
            className="form-input"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block mb-2 font-semibold text-dark">Phone Number</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            required 
            className="form-input"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="project-type" className="block mb-2 font-semibold text-dark">Project Type</label>
          <select id="project-type" name="project-type" required className="form-input">
            <option value="">Select Project Type</option>
            <option value="luxury-villa">Luxury Villa</option>
            <option value="premium-apartment">Premium Apartment</option>
            <option value="townhouse">Townhouse</option>
            <option value="commercial">Commercial Space</option>
            <option value="custom">Custom Home</option>
          </select>
        </div>
        <div>
          <label htmlFor="budget" className="block mb-2 font-semibold text-dark">Budget Range</label>
          <select id="budget" name="budget" required className="form-input">
            <option value="">Select Budget Range</option>
            <option value="1cr-2cr">₹1 - 2 Crore</option>
            <option value="2cr-5cr">₹2 - 5 Crore</option>
            <option value="5cr-10cr">₹5 - 10 Crore</option>
            <option value="10cr-plus">₹10 Crore+</option>
          </select>
        </div>
      </div>
      
      <div className="mb-6">
        <label htmlFor="timeline" className="block mb-2 font-semibold text-dark">Project Timeline</label>
        <select id="timeline" name="timeline" required className="form-input">
          <option value="">When do you plan to start?</option>
          <option value="asap">ASAP</option>
          <option value="1-3months">1-3 Months</option>
          <option value="3-6months">3-6 Months</option>
          <option value="6-12months">6-12 Months</option>
          <option value="planning">Just Planning</option>
        </select>
      </div>
      
      <div className="mb-6">
        <label htmlFor="message" className="block mb-2 font-semibold text-dark">Tell us about your project</label>
        <textarea 
          id="message" 
          name="message" 
          rows={4}
          placeholder="Describe your dream home, preferred location, special requirements..."
          className="form-input"
        ></textarea>
      </div>
      
      <button
        type="submit"
        disabled={loading}
        className={`btn-primary w-full py-4 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
      >
        {loading ? 'Sending...' : 'Get Free Consultation'}
      </button>
      
      <p className="text-center mt-4 text-sm text-gray-600">
        By submitting this form, you agree to our <a href="#" className="text-gold hover:underline">Privacy Policy</a>
      </p>
    </form>
  );
};

export default ContactForm;
