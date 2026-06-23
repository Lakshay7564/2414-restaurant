import { Link } from 'wouter';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-deep-charcoal text-white mt-0">
      <div className="container py-16 md:py-20">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="font-display font-bold text-xl mb-4">2414</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Multi-cuisine excellence on our rooftop. Where authentic flavors meet warm hospitality under the evening sky.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6 text-white">Explore</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/">
                  <a className="text-white/80 hover:text-primary transition-colors">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/menu">
                  <a className="text-white/80 hover:text-primary transition-colors">Menu</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-white/80 hover:text-primary transition-colors">About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-white/80 hover:text-primary transition-colors">Contact</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold mb-6 text-white flex items-center gap-2">
              <Clock size={18} />
              Hours
            </h4>
            <div className="text-sm text-white/80 space-y-2">
              <p>Monday - Sunday</p>
              <p className="text-primary font-semibold">12:00 PM - 12:00 AM</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-6 text-white">Get in Touch</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-white/80">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-primary" />
                <span>MM 128, Ankur Vihar, Ghaziabad</span>
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <Phone size={16} className="text-primary" />
                <a href="tel:+919643232414" className="hover:text-primary transition-colors">
                  +91 9643 232414
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <Mail size={16} className="text-primary" />
                <a href="mailto:info@2414restaurant.com" className="hover:text-primary transition-colors">
                  info@2414.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
            <p>&copy; 2024 2414 Multi Cuisine Family Restro & Rooftop. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
