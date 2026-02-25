import { MapPin } from "lucide-react";

const regions = [
  "Regional AWWA Southern",
  "Regional AWWA Eastern",
  "Regional AWWA Western",
  "Regional AWWA Central",
  "Regional AWWA Northern",
  "Regional AWWA ARTRAC",
  "Regional AWWA South Western",
];

const RegionalLinks = () => {
  return (
    <section className="py-12 px-4 bg-primary">
      <div className="container mx-auto">
        <h2 className="text-2xl font-display font-bold text-primary-foreground text-center mb-8">
          Regional AWWA
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {regions.map((region) => (
            <a
              key={region}
              href="#"
              className="flex items-center gap-2 px-5 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg text-sm font-body font-semibold text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
            >
              <MapPin size={14} />
              {region}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegionalLinks;
