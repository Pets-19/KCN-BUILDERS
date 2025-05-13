
import { Award, Trophy, Star } from "lucide-react";

const AwardItem = ({
  icon,
  title,
  year,
}: {
  icon: React.ReactNode;
  title: string;
  year: string;
}) => {
  return (
    <div className="award-item bg-dark/80 backdrop-blur-sm p-6 rounded-2xl transition-all duration-300 hover:transform hover:scale-105 border border-gold/20">
      <div className="flex items-center justify-center mb-4 text-gold">
        <div className="w-14 h-14 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <h3 className="font-playfair text-lg md:text-xl mb-1 text-white">
        {title}
      </h3>
      <p className="text-gold/80 text-sm tracking-wide">{year}</p>
    </div>
  );
};

const Awards = () => {
  return (
    <section className="py-16 md:py-20 relative bg-gradient-to-b from-dark to-black overflow-hidden">
      {/* Background design elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-10 left-10 w-40 h-40 bg-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-gold/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-playfair mb-4 text-white leading-tight tracking-tight">
            <span className="relative z-10">
              Awards & Recognition
              <span className="absolute -bottom-2 left-0 h-1 w-full bg-gold-gradient"></span>
            </span>
          </h2>
          <p className="text-base md:text-xl text-white/70 mt-4 md:mt-6 font-light tracking-wide max-w-2xl mx-auto">
            Our commitment to excellence has earned us recognition
            from the industry's most prestigious organizations
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
          <AwardItem
            icon={<Award className="w-8 sm:w-10 h-8 sm:h-10" />}
            title="Best Builder 2024"
            year="National Awards"
          />
          <AwardItem
            icon={<Trophy className="w-8 sm:w-10 h-8 sm:h-10" />}
            title="Excellence Award"
            year="Real Estate Forum"
          />
          <AwardItem
            icon={<Star className="w-8 sm:w-10 h-8 sm:h-10" />}
            title="Green Building"
            year="Eco Construction"
          />
          <AwardItem
            icon={<Award className="w-8 sm:w-10 h-8 sm:h-10" />}
            title="Customer Choice"
            year="Home Buyers Association"
          />
          <AwardItem
            icon={<Trophy className="w-8 sm:w-10 h-8 sm:h-10" />}
            title="Innovation Leader"
            year="Construction Tech Summit"
          />
        </div>

        <div className="flex justify-center mt-8 md:mt-12">
          <a
            href="#projects"
            className="btn-secondary w-full max-w-xs md:w-64 flex items-center justify-center bg-transparent border border-gold/30 hover:bg-gold hover:text-dark transition-all duration-300 group"
          >
            <span>View Our Projects</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-5 sm:w-5 ml-2 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Awards;
