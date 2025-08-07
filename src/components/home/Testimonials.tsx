import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Card from '../ui/Card';

interface TestimonialProps {
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
  delay: number;
}

const Testimonial: React.FC<TestimonialProps> = ({
  name,
  role,
  image,
  quote,
  rating,
  delay,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <Card className="h-full p-6">
        <div className="flex items-center mb-4">
          <img
            src={image}
            alt={name}
            className="h-12 w-12 rounded-full object-cover mr-4"
          />
          <div>
            <h4 className="font-medium text-neutral-900">{name}</h4>
            <p className="text-sm text-neutral-600">{role}</p>
          </div>
        </div>
        
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${
                i < rating ? 'text-accent-500 fill-accent-500' : 'text-neutral-300'
              }`}
            />
          ))}
        </div>
        
        <p className="text-neutral-700 italic">&ldquo;{quote}&rdquo;</p>
      </Card>
    </motion.div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Alex Morgan",
      role: "Homeowner",
      image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      quote: "AIHomeX transformed my renovation project. The AI suggestions were spot-on for my style, and the VR walkthrough helped me visualize the space before committing to changes.",
      rating: 5,
      delay: 0.1,
    },
    {
      name: "Maya Patel",
      role: "Interior Designer",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      quote: "As a professional designer, I was skeptical about AI design tools, but AIHomeX has become indispensable in my workflow. It speeds up the concept phase and helps clients visualize the end result.",
      rating: 5,
      delay: 0.2,
    },
    {
      name: "David Chen",
      role: "First-time Homebuyer",
      image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      quote: "Buying our first home was daunting, especially when facing a complete remodel. AIHomeX helped us explore multiple design options within our budget and made the process enjoyable.",
      rating: 4,
      delay: 0.3,
    },
    {
      name: "Sarah Johnson",
      role: "Real Estate Agent",
      image: "https://images.pexels.com/photos/3767392/pexels-photo-3767392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      quote: "I recommend AIHomeX to all my clients. The ability to show potential buyers what a property could look like with personalized renovations has dramatically increased my sales.",
      rating: 5,
      delay: 0.4,
    },
  ];

  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl sm:text-4xl font-bold text-neutral-900"
          >
            What Our Users Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-4 max-w-2xl mx-auto text-lg text-neutral-600"
          >
            Thousands of homeowners, designers, and real estate professionals trust AIHomeX for their design needs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              image={testimonial.image}
              quote={testimonial.quote}
              rating={testimonial.rating}
              delay={testimonial.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;