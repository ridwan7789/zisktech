import { motion } from "framer-motion";
import { Github, Send, Globe, LucideIcon } from "lucide-react";
import ziskLogo from "@/assets/zisk-logo.png";

const XIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "Documentation", href: "https://docs.zisktech.sbs" },
      { label: "Testnet", href: "https://t.me/Zisktech" },
      { label: "API", href: "https://zisktech.sbs" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Twitter", href: "https://x.com/ZiskTech" },
      { label: "Telegram", href: "https://t.me/Zisktech" },
      { label: "GitHub", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Whitepaper", href: "https://docs.zisktech.sbs" },
      { label: "Brand Kit", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
];

interface SocialLink {
  icon: React.ComponentType<any> | (() => JSX.Element);
  href: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  { icon: Globe, href: "https://zisktech.sbs", label: "Website" },
  { icon: XIcon, href: "https://x.com/ZiskTech", label: "Twitter" },
  { icon: Send, href: "https://t.me/Zisktech", label: "Telegram" },
  { icon: Github, href: "#", label: "GitHub" },
];

const Footer = () => {
  return (
    <footer className="relative pt-20 pb-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-muted/30 to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6 group">
              <div className="relative w-12 h-12 rounded-full overflow-hidden shadow-[0_0_30px_hsl(160_100%_48%_/_0.4),0_0_60px_hsl(160_100%_48%_/_0.2)] group-hover:scale-110 transition-transform duration-300">
                <img src={ziskLogo} alt="Zisk Tech" className="w-full h-full object-cover" />
              </div>
              <span className="font-display font-bold text-2xl text-foreground">
                Zisk<span className="text-primary">Tech</span>
              </span>
            </a>
            <p className="text-muted-foreground mb-6 max-w-sm leading-relaxed">
              Real-Time Proof Infrastructure for Web3. Building instant trust with zero-knowledge cryptography.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-xl bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                    aria-label={social.label}
                  >
                    <IconComponent />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="font-display font-semibold text-foreground mb-4">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 ZiskTech. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
