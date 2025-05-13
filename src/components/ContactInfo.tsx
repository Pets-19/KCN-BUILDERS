
interface ContactItemProps {
  icon: string;
  title: string;
  lines: string[];
}

const ContactItem = ({ icon, title, lines }: ContactItemProps) => {
  return (
    <div className="flex items-start mb-6">
      <div className="w-12 h-12 bg-gold-gradient rounded-full flex items-center justify-center text-white text-xl mr-4 flex-shrink-0">
        {icon}
      </div>
      <div>
        <div className="font-semibold mb-1">{title}</div>
        <div>
          {lines.map((line, index) => (
            <div key={index} className="opacity-90">{line}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ContactInfo = () => {
  return (
    <div className="bg-dark p-8 md:p-12 rounded-3xl text-white">
      <h3 className="font-playfair text-3xl mb-6 text-gold">Get In Touch</h3>
      <p className="mb-8 opacity-90">
        Ready to build your dream home? Our team is here to guide you through every step of the process.
      </p>

      <ContactItem 
        icon="📍" 
        title="Office Address" 
        lines={["KCN Builders", "Anappalam, Kalpetta, Wayanad 673121"]}
      />
      
      <ContactItem 
        icon="📞" 
        title="Phone Number" 
        lines={["+91 97477 70369"]}
      />
      
      <ContactItem 
        icon="✉️" 
        title="Email" 
        lines={["info@kcnconstruct.com", "sales@kcnconstruct.com"]}
      />
      
      <ContactItem 
        icon="🕒" 
        title="Business Hours" 
        lines={["Mon-Sat: 9:00 AM - 7:00 PM", "Sunday: 10:00 AM - 5:00 PM"]}
      />

      <div className="flex space-x-4 mt-8">
        <a href="#" className="social-link">📘</a>
        <a href="#" className="social-link">📷</a>
        <a href="#" className="social-link">🐦</a>
        <a href="#" className="social-link">💼</a>
      </div>
    </div>
  );
};

export default ContactInfo;
