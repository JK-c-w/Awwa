import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const galleryItems = [
  { img: gallery1, title: "COAS Appreciation to AWWA on Army Day 2026" },
  { img: gallery2, title: "Abhivyakti AWWA Lit Fest Lucknow" },
  { img: gallery3, title: "Diwali Mela & Entrepreneurship Exhibition" },
];

const GallerySection = () => {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl font-display font-bold text-primary text-center mb-8">
          Gallery & Highlights
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-xl border border-border shadow-sm hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="p-4 text-sm font-body font-semibold text-primary-foreground">
                  {item.title}
                </p>
              </div>
              <div className="p-3 bg-card">
                <p className="text-sm font-body font-semibold text-foreground">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
