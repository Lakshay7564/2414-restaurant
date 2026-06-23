import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { ChefHat, Leaf, Heart, Users } from 'lucide-react';

const HERO_URL = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663766744128/kbeASdSqEe2t7voMrAqmNr/hero-rooftop-BJcV3Tw9nLmVTcxPAdVXQt.webp';

const values = [
  {
    icon: ChefHat,
    title: 'Culinary Excellence',
    description: 'Our chefs craft each dish with passion, using authentic recipes and the finest ingredients.',
  },
  {
    icon: Leaf,
    title: 'Fresh Ingredients',
    description: 'We source fresh, quality ingredients daily to ensure every dish is flavorful and nutritious.',
  },
  {
    icon: Heart,
    title: 'Warm Hospitality',
    description: 'Every guest is treated like family. We believe in creating memorable dining experiences.',
  },
  {
    icon: Users,
    title: 'Community Focus',
    description: 'We celebrate moments with families and friends, creating spaces for connection and joy.',
  },
];

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero */}
      <section className="relative h-80 md:h-96 overflow-hidden">
        <img
          src={HERO_URL}
          alt="2414 Restaurant"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container pb-8 md:pb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white">About 2414</h1>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                2414 Multi Cuisine Family Restro & Rooftop was born from a simple vision: to create a space where exceptional food meets warm hospitality, all while enjoying the beauty of the evening sky.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Located in the heart of Ankur Vihar, Ghaziabad, our rooftop restaurant celebrates the art of multi-cuisine cooking. From authentic North Indian delicacies to contemporary Chinese dishes and artisanal pizzas, every dish tells a story of passion and expertise.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                We believe that dining is more than just eating—it's about creating memories. Whether you're celebrating a milestone, enjoying a casual family dinner, or sharing a romantic evening, 2414 is your destination for unforgettable experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our commitment to quality, authenticity, and warm service has made us a beloved choice for families and food enthusiasts across Ghaziabad.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <img
                src={HERO_URL}
                alt="Restaurant interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              These principles guide everything we do, from our kitchen to your table.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <Card key={idx} className="p-8 border border-border hover:shadow-lg transition-shadow">
                  <Icon className="text-primary mb-4" size={32} />
                  <h3 className="font-display font-bold text-xl text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Why Choose 2414?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <h3 className="font-semibold text-foreground mb-2">Menu Items</h3>
              <p className="text-muted-foreground">
                Diverse selection spanning North Indian, Chinese, Italian, and more cuisines.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">360°</div>
              <h3 className="font-semibold text-foreground mb-2">City Views</h3>
              <p className="text-muted-foreground">
                Stunning rooftop ambiance with panoramic views of the city skyline.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <h3 className="font-semibold text-foreground mb-2">Availability</h3>
              <p className="text-muted-foreground">
                Open from noon to midnight every day for your convenience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Team
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Passionate professionals dedicated to making your dining experience exceptional.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                role: 'Head Chef',
                description: 'Expert in multi-cuisine cooking with 15+ years of experience',
              },
              {
                role: 'Service Manager',
                description: 'Ensuring warm hospitality and seamless dining experience',
              },
              {
                role: 'Kitchen Team',
                description: 'Skilled culinary professionals committed to quality',
              },
            ].map((member, idx) => (
              <Card key={idx} className="p-8 border border-border text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="text-primary" size={32} />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{member.role}</h3>
                <p className="text-muted-foreground text-sm">{member.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 md:py-16 bg-primary text-white">
        <div className="container text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
            Experience 2414 Today
          </h2>
          <p className="text-white/90 mb-6">
            Visit us for an unforgettable dining experience on our rooftop.
          </p>
          <a href="/contact" className="inline-block px-8 py-3 bg-white text-primary rounded-lg hover:bg-white/90 transition-colors font-medium">
            Reserve Your Table
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
