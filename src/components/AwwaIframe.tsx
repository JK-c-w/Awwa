import { ExternalLink, Minus, Square, X } from "lucide-react";

const AwwaIframe = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary text-center mb-8">
          Official AWWA Website
        </h2>
        <div className="rounded-lg overflow-hidden shadow-xl border border-border">
          {/* Window Title Bar */}
          <div className="bg-muted flex items-center justify-between px-4 py-2 border-b border-border">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-destructive/70" />
                <span className="w-3 h-3 rounded-full bg-accent/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <span className="text-xs font-body text-muted-foreground ml-2 hidden sm:inline">
                awwa.org.in
              </span>
            </div>
            <a
              href="https://awwa.org.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          {/* Iframe */}
          <iframe
            src="https://awwa.org.in/"
            title="AWWA Official Website"
            className="w-full h-[500px] sm:h-[600px] md:h-[700px] bg-card"
            sandbox="allow-scripts allow-same-origin allow-popups"
          />
        </div>
      </div>
    </section>
  );
};

export default AwwaIframe;
