
const Footer = () => {
  return (
    <footer className="bg-kcn-black text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center mb-6">
              <img 
                src="/kcn.png" 
                alt="KCN Logo" 
                className="h-12 mr-2"
              />
              <span className="font-playfair text-xl font-medium text-white ml-1">BUILD FOR FUTURE</span>
            </div>
            <p className="mb-6 opacity-80">
              Building dreams with uncompromising quality and innovative design. Your trusted partner in creating exceptional living spaces.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="social-link">📘</a>
              <a href="#" className="social-link">📷</a>
              <a href="#" className="social-link">🐦</a>
              <a href="#" className="social-link">🎬</a>
              <a href="#" className="social-link">💼</a>
            </div>
          </div>
          
          <div>
            <h3 className="font-playfair text-xl text-kcn-red mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-kcn-red transition-colors duration-300 hover:pl-1">Luxury Villa Construction</a></li>
              <li><a href="#" className="text-gray-300 hover:text-kcn-red transition-colors duration-300 hover:pl-1">Premium Apartment Development</a></li>
              <li><a href="#" className="text-gray-300 hover:text-kcn-red transition-colors duration-300 hover:pl-1">Custom Home Design</a></li>
              <li><a href="#" className="text-gray-300 hover:text-kcn-red transition-colors duration-300 hover:pl-1">Commercial Construction</a></li>
              <li><a href="#" className="text-gray-300 hover:text-kcn-red transition-colors duration-300 hover:pl-1">Interior Design Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-kcn-red transition-colors duration-300 hover:pl-1">Project Management</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-playfair text-xl text-kcn-red mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-kcn-red transition-colors duration-300 hover:pl-1">Home</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-kcn-red transition-colors duration-300 hover:pl-1">Our Projects</a></li>
              <li><a href="#features" className="text-gray-300 hover:text-kcn-red transition-colors duration-300 hover:pl-1">Why Choose Us</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-kcn-red transition-colors duration-300 hover:pl-1">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-kcn-red transition-colors duration-300 hover:pl-1">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-kcn-red transition-colors duration-300 hover:pl-1">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-playfair text-xl text-kcn-red mb-6">Location & Contact</h3>
            <ul className="space-y-3 opacity-80">
              <li>KCN Builders, Anappalam, Kalpetta, Wayanad 673121</li>
              <li>Phone: +91 97477 70369</li>
              <li>Email: info@kcnconstruct.com</li>
              <li>Email: sales@kcnconstruct.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#333] mt-12 pt-8 text-center text-gray-500">
          <p>&copy; 2025 KCN Construction. All rights reserved. | Designed with ❤️ for exceptional living</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
