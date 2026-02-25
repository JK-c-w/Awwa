import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-maroon-dark text-primary-foreground">
      <div className="container mx-auto px-4 py-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="font-display text-lg font-bold text-gold-light mb-3">AWWA</h3>
            <p className="text-sm font-body text-primary-foreground/80 leading-relaxed">
              Army Women's Welfare Association is committed to the welfare of army families through
              education, empowerment, and community support initiatives across India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-bold text-gold-light mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {["About Us", "Vision & KRAs", "Our Impact", "Gallery", "Archives"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm font-body text-primary-foreground/70 hover:text-gold-light transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programmes */}
          <div>
            <h3 className="font-display text-lg font-bold text-gold-light mb-3">Programmes</h3>
            <ul className="space-y-2">
              {["Entrepreneurship", "Scholarships", "CSR Activity", "Health Camps", "Internships"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm font-body text-primary-foreground/70 hover:text-gold-light transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-display text-lg font-bold text-gold-light mb-3">Connect With Us</h3>
            <div className="flex gap-3 mb-4">
              {[
                { Icon: Instagram, label: "Instagram", url: "https://www.instagram.com/official_awwa" },
                { Icon: Facebook, label: "Facebook", url: "https://www.facebook.com/officialawwa" },
                { Icon: Twitter, label: "Twitter", url: "https://x.com/OfficialAwwa" },
                { Icon: Youtube, label: "YouTube", url: "https://www.youtube.com/@Official_AWWA" },
              ].map(({ Icon, label, url }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold/30 transition-colors"
                >
                  <Icon size={18} className="text-primary-foreground" />
                </a>
              ))}
            </div>
            <p className="text-xs font-body text-primary-foreground/60">
              #WeCare #Motivate_Facilitate_Empower
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-primary-foreground/10 text-center">
          <p className="text-xs font-body text-primary-foreground/50">
            © 2026 Army Women's Welfare Association. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
