import { Heart, Briefcase, Users, Award, BookOpen, HandHeart } from "lucide-react";

const links = [
  { icon: Heart, label: "Donate for a Cause", desc: "Support army families" },
  { icon: Briefcase, label: "Entrepreneurship Programme", desc: "Empowering women entrepreneurs" },
  { icon: Users, label: "CSR Activity", desc: "Corporate social responsibility" },
  { icon: HandHeart, label: "Internship & Voluntary", desc: "Join our mission" },
  { icon: Award, label: "AWWA Awards", desc: "Recognizing excellence" },
  { icon: BookOpen, label: "AWWA Journal & Brochure", desc: "Publications & resources" },
];

const QuickLinks = () => {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {links.map(({ icon: Icon, label, desc }) => (
            <a
              key={label}
              href="#"
              className="group flex flex-col items-center text-center p-5 rounded-xl bg-card border border-border hover:border-primary hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                <Icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-body font-semibold text-sm text-foreground leading-tight">
                {label}
              </h3>
              <p className="text-xs text-muted-foreground mt-1 hidden sm:block">{desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
