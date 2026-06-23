import { Link } from 'wouter';
import { Star, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const HERO_URL = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663766744128/kbeASdSqEe2t7voMrAqmNr/hero-rooftop-BJcV3Tw9nLmVTcxPAdVXQt.webp';
const DISH1_URL = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663766744128/kbeASdSqEe2t7voMrAqmNr/featured-dish-1-DWLq5mCCVVFbutmDRCE2kh.webp';
const DISH2_URL = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663766744128/kbeASdSqEe2t7voMrAqmNr/featured-dish-2-UQ6WzbhAoQCj99z67fV3nX.webp';
const DISH3_URL = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663766744128/kbeASdSqEe2t7voMrAqmNr/featured-dish-3-25ohmR7Ag5APpDZU3BcUQ7.webp';

const featuredDishes = [
  {
    id: 1,
    name: 'Tandoori Paneer Tikka',
    description: 'Perfectly grilled paneer cubes with aromatic spices, served with fresh salad and basmati rice. A North Indian classic that melts in your mouth with every bite.',
    image: DISH1_URL,
    cuisine: 'North Indian',
  },
  {
    id: 2,
    name: 'Chilli Paneer',
    description: 'Crispy paneer tossed in a vibrant red chilli sauce with bell peppers and onions. A beloved Indo-Chinese favorite that brings heat and flavor together.',
    image: DISH2_URL,
    cuisine: 'Chinese',
  },
  {
    id: 3,
    name: 'Margherita Pizza',
    description: 'Fresh mozzarella, basil, and tomato sauce on a golden crust from our wood-fired oven. Simple, elegant, and bursting with authentic Italian flavors.',
    image: DISH3_URL,
    cuisine: 'Italian',
  },
];

const testimonials = [
  {
    name: 'Priya Sharma',
    rating: 5,
    text: 'The staff was very friendly and quick with the service. The rooftop ambiance is absolutely stunning!',
  },
  {
    name: 'Rajesh Kumar',
    rating: 5,
    text: 'Food is the best price in many ways. Great vibe, excellent food quality, and the sunset view is unbeatable.',
  },
  {
    name: 'Ananya Patel',
    rating: 5,
    text: 'Fresh food, great vibe. Perfect place for a family dinner or a romantic evening. Highly recommended!',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        <img
          src={HERO_URL}
          alt="2414 Restaurant Rooftop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        
        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="container pb-12 md:pb-16">
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-4 max-w-2xl leading-tight">
              Settle into the Evening Sky
            </h1>
            <p className="text-white/95 text-lg md:text-xl mb-8 max-w-xl leading-relaxed">
              Where tandoor smoke meets city lights. Multi-cuisine excellence on our rooftop, with warm hospitality and contemporary elegance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/contact">
                  <a>Reserve Your Table</a>
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link href="/menu">
                  <a>Explore Menu</a>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="bg-white border-b border-border">
        <div className="container py-8 md:py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <Clock className="text-primary flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Open Hours</h3>
                <p className="text-muted-foreground">12:00 PM - 12:00 AM</p>
                <p className="text-muted-foreground text-sm">Every Day</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="text-primary flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Location</h3>
                <p className="text-muted-foreground">MM 128, Ankur Vihar</p>
                <p className="text-muted-foreground text-sm">Ghaziabad</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Star className="text-primary flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Cuisines</h3>
                <p className="text-muted-foreground">North Indian, Chinese</p>
                <p className="text-muted-foreground text-sm">Pizza & More</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dishes - Asymmetric Layout */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Signature Dishes
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Culinary artistry meets rooftop dining. Each dish is a celebration of authentic flavors.
            </p>
          </div>

          <div className="space-y-20">
            {featuredDishes.map((dish, idx) => (
              <div key={dish.id} className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}>
                <div className="flex-1 relative overflow-hidden rounded-xl h-72 md:h-80 shadow-lg">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-primary text-sm font-semibold mb-3 uppercase tracking-widest">
                    {dish.cuisine}
                  </p>
                  <h3 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4 leading-tight">
                    {dish.name}
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed mb-6">
                    {dish.description}
                  </p>
                  <div className="w-12 h-1 bg-primary rounded-full"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/menu">
                <a>View Full Menu</a>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 md:py-32 bg-muted/40">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Welcome to 2414
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Nestled on a rooftop in Ghaziabad, 2414 Multi Cuisine Family Restro & Rooftop is where culinary excellence meets warm hospitality. We celebrate the art of multi-cuisine cooking with a focus on fresh ingredients, authentic recipes, and the kind of service that makes you feel like family.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you're watching the sunset with loved ones, celebrating a milestone, or simply enjoying exceptional food under the stars, our rooftop is your sanctuary for unforgettable moments.
              </p>
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <Link href="/about">
                  <a>Learn More About Us</a>
                </Link>
              </Button>
            </div>
            <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
              <img
                src={HERO_URL}
                alt="Restaurant ambiance"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Guests Say
            </h2>
            <p className="text-muted-foreground text-lg">
              Real experiences from people who've shared our rooftop
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="p-8 border border-border hover:shadow-lg transition-shadow">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={18} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-primary text-white">
        <div className="container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ready for an Unforgettable Evening?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Reserve your table and join us on the rooftop. Bring your loved ones, bring your appetite, bring yourself.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
            <Link href="/contact">
              <a>Make a Reservation</a>
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
