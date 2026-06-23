import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { toast } from 'sonner';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success('Reservation request submitted! We will contact you shortly to confirm.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
        message: '',
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-12 md:py-16">
        <div className="container">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contact & Reservations
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Get in touch with us or reserve your table for an unforgettable dining experience.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="p-6 border border-border text-center">
              <Phone className="text-primary mx-auto mb-3" size={28} />
              <h3 className="font-semibold text-foreground mb-2">Phone</h3>
              <a href="tel:+919643232414" className="text-primary hover:underline">
                +91 9643 232414
              </a>
            </Card>
            <Card className="p-6 border border-border text-center">
              <Mail className="text-primary mx-auto mb-3" size={28} />
              <h3 className="font-semibold text-foreground mb-2">Email</h3>
              <a href="mailto:info@2414restaurant.com" className="text-primary hover:underline">
                info@2414.com
              </a>
            </Card>
            <Card className="p-6 border border-border text-center">
              <MapPin className="text-primary mx-auto mb-3" size={28} />
              <h3 className="font-semibold text-foreground mb-2">Location</h3>
              <p className="text-muted-foreground text-sm">
                MM 128, Ankur Vihar<br />
                Ghaziabad
              </p>
            </Card>
            <Card className="p-6 border border-border text-center">
              <Clock className="text-primary mx-auto mb-3" size={28} />
              <h3 className="font-semibold text-foreground mb-2">Hours</h3>
              <p className="text-muted-foreground text-sm">
                12:00 PM - 12:00 AM<br />
                Every Day
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Reservation Form & Map */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-8">
                Make a Reservation
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="border-border"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXXXXXXX"
                      required
                      className="border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Number of Guests *
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Preferred Date *
                    </label>
                    <Input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Preferred Time *
                    </label>
                    <Input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="border-border"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Special Requests or Dietary Preferences
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Let us know if you have any special requests..."
                    rows={4}
                    className="border-border"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-white"
                >
                  {isSubmitting ? 'Submitting...' : 'Reserve Table'}
                </Button>

                <p className="text-xs text-muted-foreground">
                  * Required fields. We will contact you to confirm your reservation.
                </p>
              </form>
            </div>

            {/* Map & Info */}
            <div className="space-y-8">
              <div className="bg-muted rounded-lg overflow-hidden h-96 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="text-primary mx-auto mb-4" size={48} />
                  <h3 className="font-semibold text-foreground mb-2">Our Location</h3>
                  <p className="text-muted-foreground">
                    MM 128, Ankur Vihar<br />
                    Ghaziabad, Uttar Pradesh
                  </p>
                  <a
                    href="https://maps.google.com/?q=MM+128+Ankur+Vihar+Ghaziabad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-primary hover:underline font-medium"
                  >
                    View on Google Maps →
                  </a>
                </div>
              </div>

              <Card className="p-6 border border-border bg-primary/5">
                <h3 className="font-semibold text-foreground mb-4">Quick Tips</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Book in advance for weekend reservations</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>We accommodate group bookings and special occasions</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Mention dietary preferences when reserving</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Rooftop seating available with stunning city views</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 border border-border">
                <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Stay updated with our latest dishes and events on social media.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="text-primary hover:underline font-medium">Instagram</a>
                  <a href="#" className="text-primary hover:underline font-medium">Facebook</a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <h2 className="font-display text-3xl font-bold text-foreground mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                q: 'What is the minimum party size for a reservation?',
                a: 'We accept reservations for 1 or more guests. For large group bookings (10+ people), please call us directly.',
              },
              {
                q: 'Do you have vegetarian options?',
                a: 'Yes! We offer a wide variety of vegetarian dishes across all cuisines. Please mention your preference when reserving.',
              },
              {
                q: 'Can we bring our own cake for celebrations?',
                a: 'Absolutely! We welcome outside cakes for birthdays and celebrations. A small cake cutting charge applies.',
              },
              {
                q: 'Is there a dress code?',
                a: 'Smart casual attire is recommended. We welcome all guests as long as they are appropriately dressed.',
              },
              {
                q: 'Do you offer private dining?',
                a: 'Yes, we have spaces available for private events and group bookings. Contact us for details.',
              },
              {
                q: 'What is your cancellation policy?',
                a: 'Cancellations made 24 hours in advance are free. Late cancellations may incur charges.',
              },
            ].map((faq, idx) => (
              <Card key={idx} className="p-6 border border-border">
                <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-muted-foreground text-sm">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
