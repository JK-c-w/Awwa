import { ArrowRight } from "lucide-react";

const newsItems = [
  "International Book Fair",
  "AWWA Info Brochure: Apr 2025",
  "Drishti's Indian Army Wards Scholarship Initiative (IAWSI)",
  "Higher Education Programmes",
  "Facility of Professional Counsellor",
  "Scholarship for PGDM and BBA Course by FUEL B School, Pune",
  "Academias Collaborative Proposal",
  "Concession on Tuition Fees",
  "Garbh Sanskar - Orientation Programme",
  "Abhivyakti AWWA Lit Fest Lucknow",
];

const upcomingEvents = [
  { date: "15 Mar", title: "Annual AWWA Conference 2026" },
  { date: "22 Mar", title: "Women's Day Celebrations" },
  { date: "05 Apr", title: "Entrepreneurship Workshop" },
  { date: "18 Apr", title: "Health Awareness Camp" },
];

const WhatsNew = () => {
  return (
    <section className="py-12 px-4 bg-secondary/50">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* What's New */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-display font-bold text-primary">What's New</h2>
              <a href="#" className="text-sm font-body font-semibold text-accent hover:underline flex items-center gap-1">
                View All <ArrowRight size={14} />
              </a>
            </div>
            <div className="bg-card rounded-xl border border-border overflow-hidden">
              <ul className="divide-y divide-border">
                {newsItems.slice(0, 7).map((item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="flex items-center gap-3 px-5 py-3 hover:bg-secondary/60 transition-colors group"
                    >
                      <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                      <span className="text-sm font-body text-foreground group-hover:text-primary transition-colors">
                        {item}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Upcoming Events */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-display font-bold text-primary">Upcoming Events</h2>
              <a href="#" className="text-sm font-body font-semibold text-accent hover:underline flex items-center gap-1">
                View All <ArrowRight size={14} />
              </a>
            </div>
            <div className="space-y-3">
              {upcomingEvents.map((event, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary hover:shadow-md transition-all group"
                >
                  <div className="w-16 h-16 rounded-lg bg-primary flex flex-col items-center justify-center shrink-0">
                    <span className="text-xs font-body text-primary-foreground/80">
                      {event.date.split(" ")[1]}
                    </span>
                    <span className="text-xl font-display font-bold text-primary-foreground">
                      {event.date.split(" ")[0]}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-body font-semibold text-foreground group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">Click to learn more</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Mini Calendar */}
            <div className="mt-6 p-4 bg-card rounded-xl border border-border">
              <h3 className="font-display font-bold text-accent mb-3">February 2026</h3>
              <div className="grid grid-cols-7 gap-1 text-center text-xs font-body">
                {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
                  <span key={i} className="py-1 font-semibold text-muted-foreground">{d}</span>
                ))}
                {Array.from({ length: 28 }, (_, i) => (
                  <span
                    key={i}
                    className={`py-1 rounded ${
                      i + 1 === 19
                        ? "bg-primary text-primary-foreground font-bold"
                        : "text-foreground hover:bg-secondary cursor-pointer"
                    }`}
                  >
                    {i + 1}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsNew;
