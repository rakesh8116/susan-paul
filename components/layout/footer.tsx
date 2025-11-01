"use client";

import Link from "next/link";
import { 
  Music, 
  Facebook, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  Heart
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    programs: [
      { href: "/programs/abrsm", label: "ABRSM Preparation" },
      { href: "/programs/trinity", label: "Trinity Grades" },
      { href: "/programs/beginner", label: "Beginner Classes" },
      { href: "/programs/advanced", label: "Advanced Training" },
    ],
    resources: [
      { href: "/resources/sheet-music", label: "Sheet Music" },
      { href: "/resources/practice-guides", label: "Practice Guides" },
      { href: "/resources/theory", label: "Music Theory" },
      { href: "/resources/recordings", label: "Recordings" },
    ],
    quick: [
      { href: "/about", label: "About Susan" },
      { href: "/events", label: "Upcoming Events" },
      { href: "/blog", label: "Blog" },
      { href: "/contact", label: "Contact" },
    ],
    legal: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
      { href: "/refund", label: "Refund Policy" },
      { href: "/faq", label: "FAQ" },
    ],
  };

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-r from-musical-purple-600 to-musical-gold-600 text-white p-2 rounded-lg">
                <Music className="w-6 h-6" />
              </div>
              <div>
                <span className="font-display font-bold text-xl">Susan Paul</span>
                <span className="block text-xs text-gray-600 dark:text-gray-400">
                  Music Academy
                </span>
              </div>
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Nurturing musical excellence through personalized piano education in Bangalore.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="p-2 bg-musical-purple-100 dark:bg-musical-purple-900 rounded-lg hover:bg-musical-purple-200 dark:hover:bg-musical-purple-800 transition-colors"
              >
                <Facebook className="w-4 h-4 text-musical-purple-600" />
              </a>
              <a
                href="#"
                className="p-2 bg-musical-purple-100 dark:bg-musical-purple-900 rounded-lg hover:bg-musical-purple-200 dark:hover:bg-musical-purple-800 transition-colors"
              >
                <Instagram className="w-4 h-4 text-musical-purple-600" />
              </a>
              <a
                href="#"
                className="p-2 bg-musical-purple-100 dark:bg-musical-purple-900 rounded-lg hover:bg-musical-purple-200 dark:hover:bg-musical-purple-800 transition-colors"
              >
                <Youtube className="w-4 h-4 text-musical-purple-600" />
              </a>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Programs
            </h3>
            <ul className="space-y-2">
              {footerLinks.programs.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-musical-purple-600 dark:hover:text-musical-purple-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Resources
            </h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-musical-purple-600 dark:hover:text-musical-purple-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerLinks.quick.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-musical-purple-600 dark:hover:text-musical-purple-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Contact
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:tsusanpaul@gmail.com"
                className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-musical-purple-600 dark:hover:text-musical-purple-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                tsusanpaul@gmail.com
              </a>
              <a
                href="tel:+919845542493"
                className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-musical-purple-600 dark:hover:text-musical-purple-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                +91 98455 42493
              </a>
              <div className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Bangalore, Karnataka, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {currentYear} Susan Paul Music Academy. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-musical-purple-600 dark:hover:text-musical-purple-400 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> for music
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
