import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Upload, Box, Cpu, Eye, CheckCircle } from 'lucide-react';

interface StepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  step: number;
  isLast?: boolean;
}

const Step: React.FC<StepProps> = ({ icon, title, description, step, isLast = false }) => {
  return (
    <div className="flex">
      <div className="flex flex-col items-center mr-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-white"
        >
          {icon}
        </motion.div>
        {!isLast && (
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            className="h-full w-0.5 bg-primary-200 mt-4"
          ></motion.div>
        )}
      </div>
      <div className="pb-10">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="text-xl font-semibold text-neutral-900 mb-1">
            <span className="text-primary-600 mr-2">Step {step}:</span>
            {title}
          </h3>
          <p className="text-neutral-600">{description}</p>
        </motion.div>
      </div>
    </div>
  );
};

const DesignProcess: React.FC = () => {
  const steps = [
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Describe Your Vision",
      description: "Tell us about your dream space using natural language. Describe the style, purpose, and special requirements you have in mind.",
      step: 1,
    },
    {
      icon: <Upload className="h-6 w-6" />,
      title: "Upload Your Space",
      description: "Share photos or videos of your current space. Our AI will analyze the dimensions, lighting, and layout to work with your existing environment.",
      step: 2,
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "AI-Generated Designs",
      description: "Our advanced AI creates multiple design concepts based on your requirements, preferences, and the physical constraints of your space.",
      step: 3,
    },
    {
      icon: <Box className="h-6 w-6" />,
      title: "Customize & Refine",
      description: "Fine-tune your favorite designs using our intuitive editor. Adjust layouts, materials, colors, and furnishings to perfectly match your vision.",
      step: 4,
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Experience in 3D, AR & VR",
      description: "Explore your designs in immersive 3D. Use AR to see how they look in your actual space, or step inside with VR for a life-size walkthrough.",
      step: 5,
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Finalize & Implement",
      description: "Once you're satisfied, receive detailed plans, material lists, and implementation guidelines to bring your design to life.",
      step: 6,
      isLast: true,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl sm:text-4xl font-bold text-neutral-900"
          >
            Our Design Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-4 max-w-2xl mx-auto text-lg text-neutral-600"
          >
            From concept to completion, our streamlined process makes designing your perfect space simple and enjoyable.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <Step
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              step={step.step}
              isLast={step.isLast}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignProcess;