import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Upload, Laptop, Eye, Smartphone, Lightbulb, CheckCircle, Trees as Tree } from 'lucide-react';
import Card from '../ui/Card';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <Card className="h-full p-6">
        <div className="flex flex-col h-full">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600">
            {icon}
          </div>
          <h3 className="mb-2 text-xl font-semibold text-neutral-900">{title}</h3>
          <p className="text-neutral-600">{description}</p>
        </div>
      </Card>
    </motion.div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Mic className="h-6 w-6" />,
      title: "Natural Language Design",
      description: "Describe your dream space in plain English and watch as our AI transforms your words into design concepts.",
      delay: 0.1,
    },
    {
      icon: <Upload className="h-6 w-6" />,
      title: "Image & Video Upload",
      description: "Upload photos or videos of your current space and let our AI suggest personalized improvements.",
      delay: 0.2,
    },
    {
      icon: <Laptop className="h-6 w-6" />,
      title: "3D Visualization",
      description: "Explore your designs in detailed 3D models that you can customize from any angle.",
      delay: 0.3,
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "VR Walkthrough",
      description: "Experience your design in virtual reality, letting you feel the space before it's built.",
      delay: 0.4,
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "AR Overlay",
      description: "Use your smartphone to see how new designs would look in your actual space with augmented reality.",
      delay: 0.5,
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "AI Recommendations",
      description: "Receive intelligent suggestions for materials, layouts, and styling based on your preferences.",
      delay: 0.6,
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Design Validation",
      description: "Our AI checks for structural feasibility, ergonomics, and building code compliance.",
      delay: 0.7,
    },
    {
      icon: <Tree className="h-6 w-6" />,
      title: "Sustainable Options",
      description: "Explore eco-friendly materials and energy-efficient designs with environmental impact insights.",
      delay: 0.8,
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
            Powerful Features for Home Design
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-4 max-w-2xl mx-auto text-lg text-neutral-600"
          >
            Our innovative platform combines AI, AR, and VR to revolutionize how you design your living spaces.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;