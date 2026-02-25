import heroBanner from "@/assets/hero-banner.jpg";

const HeroBanner = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative">
        <img
          src={heroBanner}
          alt="AWWA - Army Women's Welfare Association"
          className="w-full h-[220px] sm:h-[300px] md:h-[380px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-maroon-dark/70 to-maroon/40 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground drop-shadow-lg tracking-wide">
              ARMY WOMEN'S WELFARE
            </h1>
            <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gold-light drop-shadow-lg tracking-wide mt-1">
              ASSOCIATION
            </h2>
            <p className="mt-3 text-sm sm:text-base md:text-lg font-body text-cream/90 max-w-2xl mx-auto">
              We Care • Motivate • Facilitate • Empower
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
