import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const menuCategories = {
  'North Indian': [
    { name: 'Tandoori Paneer Tikka', description: 'Grilled paneer with aromatic spices', price: '₹350' },
    { name: 'Tandoori Chicken Tikka', description: 'Tender chicken marinated in yogurt and spices', price: '₹400' },
    { name: 'Hara Bhara Kabab', description: 'Vegetable and spinach kabab with herbs', price: '₹300' },
    { name: 'Tandoori Malai Paneer Tikka', description: 'Creamy paneer tikka with mozzarella', price: '₹380' },
    { name: 'Butter Chicken', description: 'Tender chicken in rich tomato cream sauce', price: '₹420' },
    { name: 'Paneer Butter Masala', description: 'Soft paneer cubes in creamy tomato sauce', price: '₹350' },
    { name: 'Dal Makhani', description: 'Black lentils slow-cooked with cream and butter', price: '₹280' },
    { name: 'Chole Bhature', description: 'Fluffy fried bread with spiced chickpeas', price: '₹220' },
  ],
  'Chinese': [
    { name: 'Chilli Paneer', description: 'Crispy paneer in spicy chilli sauce', price: '₹320' },
    { name: 'Chilli Chicken', description: 'Tender chicken tossed in spicy sauce', price: '₹380' },
    { name: 'Manchow Soup', description: 'Hot and tangy soup with crispy noodles', price: '₹180' },
    { name: 'Fried Rice', description: 'Fragrant rice with vegetables and protein', price: '₹280' },
    { name: 'Hakka Noodles', description: 'Stir-fried noodles with vegetables', price: '₹280' },
    { name: 'Spring Rolls', description: 'Crispy rolls filled with vegetables', price: '₹200' },
    { name: 'Honey Chilli Potato', description: 'Crispy potatoes in sweet and spicy sauce', price: '₹250' },
    { name: 'Schezwan Sauce Noodles', description: 'Spicy noodles with Schezwan sauce', price: '₹300' },
  ],
  'Pizza & Pasta': [
    { name: 'Margherita Pizza', description: 'Fresh mozzarella, basil, tomato sauce', price: '₹350' },
    { name: 'Paneer Tikka Pizza', description: 'Tandoori paneer with peppers and onions', price: '₹400' },
    { name: 'Chicken Tikka Pizza', description: 'Spiced chicken tikka with fresh herbs', price: '₹420' },
    { name: 'Veggie Supreme Pizza', description: 'Mixed vegetables with mozzarella', price: '₹380' },
    { name: 'Alfredo Pasta', description: 'Creamy white sauce with fresh herbs', price: '₹320' },
    { name: 'Arrabbiata Pasta', description: 'Spicy tomato sauce with garlic', price: '₹300' },
    { name: 'Pesto Pasta', description: 'Fresh basil pesto with pine nuts', price: '₹340' },
    { name: 'Carbonara Pasta', description: 'Creamy sauce with bacon and parmesan', price: '₹360' },
  ],
  'Soups & Salads': [
    { name: 'Lemon Coriander Soup', description: 'Light and refreshing tangy soup', price: '₹150' },
    { name: 'Cream of Mushroom Soup', description: 'Rich and earthy mushroom soup', price: '₹170' },
    { name: 'Hot and Sour Soup', description: 'Spicy and tangy with vegetables', price: '₹160' },
    { name: 'Caesar Salad', description: 'Crisp lettuce with parmesan and croutons', price: '₹220' },
    { name: 'Greek Salad', description: 'Fresh vegetables with feta cheese', price: '₹240' },
    { name: 'Garden Salad', description: 'Mixed fresh vegetables with vinaigrette', price: '₹180' },
    { name: 'Paneer Salad', description: 'Grilled paneer with mixed greens', price: '₹260' },
    { name: 'Corn Salad', description: 'Sweet corn with fresh vegetables', price: '₹200' },
  ],
  'Breads': [
    { name: 'Naan', description: 'Soft Indian bread from tandoor', price: '₹60' },
    { name: 'Butter Naan', description: 'Naan brushed with butter', price: '₹80' },
    { name: 'Garlic Naan', description: 'Naan with fresh garlic', price: '₹90' },
    { name: 'Roti', description: 'Thin Indian whole wheat bread', price: '₹40' },
    { name: 'Paratha', description: 'Flaky layered Indian bread', price: '₹70' },
    { name: 'Paneer Kulcha', description: 'Naan stuffed with paneer', price: '₹120' },
    { name: 'Puri', description: 'Deep-fried bread', price: '₹50' },
    { name: 'Bhatura', description: 'Large fluffy fried bread', price: '₹80' },
  ],
  'Beverages': [
    { name: 'Mango Lassi', description: 'Sweet yogurt drink with mango', price: '₹120' },
    { name: 'Masala Chai', description: 'Spiced Indian tea', price: '₹60' },
    { name: 'Fresh Lemonade', description: 'Refreshing lemon juice', price: '₹80' },
    { name: 'Iced Tea', description: 'Chilled tea with lemon', price: '₹90' },
    { name: 'Coffee', description: 'Freshly brewed coffee', price: '₹100' },
    { name: 'Soft Drinks', description: 'Coca-Cola, Sprite, Fanta', price: '₹80' },
    { name: 'Fresh Juice', description: 'Orange, Apple, or Pomegranate', price: '₹120' },
    { name: 'Smoothie', description: 'Fruit smoothie of your choice', price: '₹140' },
  ],
  'Desserts': [
    { name: 'Gulab Jamun', description: 'Soft milk solids in sugar syrup', price: '₹120' },
    { name: 'Kheer', description: 'Rice pudding with nuts and raisins', price: '₹140' },
    { name: 'Cheesecake', description: 'Rich and creamy cheesecake', price: '₹180' },
    { name: 'Chocolate Mousse', description: 'Decadent chocolate dessert', price: '₹160' },
    { name: 'Mango Sorbet', description: 'Refreshing frozen mango dessert', price: '₹150' },
    { name: 'Tiramisu', description: 'Italian layered dessert', price: '₹170' },
    { name: 'Rasgulla', description: 'Soft cheese balls in sugar syrup', price: '₹130' },
    { name: 'Ice Cream', description: 'Vanilla, Chocolate, or Strawberry', price: '₹100' },
  ],
};

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('North Indian');

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-12 md:py-16">
        <div className="container">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Menu
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Explore our diverse selection of authentic dishes crafted with fresh ingredients and culinary expertise.
          </p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-7 mb-12 bg-muted p-1">
              {Object.keys(menuCategories).map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="text-xs md:text-sm data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(menuCategories).map(([category, items]) => (
              <TabsContent key={category} value={category} className="mt-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {items.map((item, idx) => (
                    <Card key={idx} className="p-6 border border-border hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start gap-4 mb-2">
                        <h3 className="font-display font-semibold text-lg text-foreground">{item.name}</h3>
                        <span className="text-primary font-bold text-lg whitespace-nowrap">{item.price}</span>
                      </div>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          {/* Note */}
          <div className="mt-12 p-6 bg-muted/50 rounded-lg border border-border">
            <p className="text-muted-foreground text-sm">
              <span className="font-semibold">Note:</span> All prices are in Indian Rupees (₹). Prices are subject to applicable taxes. 
              For dietary restrictions or customizations, please inform our staff.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-primary/5 border-t border-border">
        <div className="container text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to Dine With Us?
          </h2>
          <p className="text-muted-foreground mb-6">
            Reserve your table and experience our culinary excellence
          </p>
          <a href="/contact" className="inline-block px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium">
            Reserve Now
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
