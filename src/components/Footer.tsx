import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-card/95 border-t-2 border-primary/10 py-6 mt-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} SniffCheck — playful scores for entertainment only.
        </div>
        <div className="flex items-center gap-4">
          <Link to="/privacy" className="text-sm text-primary hover:underline">Privacy Policy</Link>
          <Link to="/terms" className="text-sm text-primary hover:underline">Terms of Use</Link>
          <Link to="/contact" className="text-sm text-primary hover:underline">Contact Us</Link>
        </div>
      </div>
      {/* Ezoic ad placeholder - appears on every page via Footer */}
      <div className="container mx-auto px-4 mt-4 text-center">
        <div id="ezoic-pub-ad-placeholder-101"></div>
        <script
          dangerouslySetInnerHTML={{ __html: `window.ezstandalone = window.ezstandalone || {}; ezstandalone.cmd = ezstandalone.cmd || []; ezstandalone.cmd.push(function () { ezstandalone.showAds(101); });` }}
        />
      </div>
    </footer>
  );
};

export default Footer;
