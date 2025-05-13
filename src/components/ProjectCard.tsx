
import { useToast } from "@/components/ui/use-toast";

interface ProjectCardProps {
  image: string;
  tag: string;
  title: string;
  description: string;
  sqft: string;
  bedrooms: string;
  price: string;
  type: "villa" | "apartment" | "townhouse";
}

const ProjectCard = ({ image, tag, title, description, sqft, bedrooms, price, type }: ProjectCardProps) => {
  const { toast } = useToast();
  
  const openProjectModal = (projectType: string) => {
    const projectDetails = {
      villa: {
        title: "Royal Palms Estate",
        description: "Luxury villa with panoramic views, infinity pool, smart home automation, and premium finishes.",
        features: ["5 Bedrooms", "6 Bathrooms", "Swimming Pool", "Home Theater", "Smart Controls"]
      },
      apartment: {
        title: "Skyline Towers",
        description: "Premium apartments with world-class amenities and breathtaking city views.",
        features: ["3 Bedrooms", "Balcony Views", "Gym Access", "Concierge", "Parking"]
      },
      townhouse: {
        title: "Green Valley Homes",
        description: "Eco-friendly townhouses with sustainable features and private gardens.",
        features: ["3 Bedrooms", "Private Garden", "Solar Panels", "Rainwater Harvesting", "EV Charging"]
      }
    };
    
    // Convert string type to key of projectDetails
    const projectKey = projectType as keyof typeof projectDetails;
    const project = projectDetails[projectKey];
    
    if (project) {
      toast({
        title: project.title,
        description: (
          <div className="mt-2 space-y-2">
            <p>{project.description}</p>
            <div className="mt-4">
              <p className="font-medium">Key Features:</p>
              <ul className="list-disc pl-5 mt-1">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        ),
        duration: 5000,
      });
    }
  };

  return (
    <div className="project-card">
      <div 
        className="project-image"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="project-tag">{tag}</div>
      </div>
      <div className="p-8">
        <h3 className="font-playfair text-2xl mb-3 text-dark">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <div className="flex justify-between border-t border-gray-200 pt-4">
          <div className="text-center">
            <div className="meta-value">{sqft}</div>
            <div className="meta-label">Sq Ft</div>
          </div>
          <div className="text-center">
            <div className="meta-value">{bedrooms}</div>
            <div className="meta-label">Bedrooms</div>
          </div>
          <div className="text-center">
            <div className="meta-value">{price}</div>
            <div className="meta-label">Starting</div>
          </div>
        </div>
        <button 
          className="btn-primary w-full mt-6"
          onClick={() => openProjectModal(type)}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
