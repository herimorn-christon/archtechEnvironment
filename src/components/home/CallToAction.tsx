import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl sm:text-4xl font-bold"
          >
            Ready to Transform Your Living Space?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-6 text-lg text-primary-100"
          >
            Join thousands of homeowners who have already discovered the power of
            AI-driven home design. Start creating spaces that perfectly reflect your
            lifestyle and aesthetic preferences.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <Link to="/signup">
              <Button 
                size="lg"
                variant="accent"
                rightIcon={<ArrowRight className="h-5 w-5" />}
                className="bg-white text-primary-700 hover:bg-primary-50"
              >
                Start Your Free Trial
              </Button>
            </Link>
            <Link to="/demo">
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-primary-700"
              >
                Schedule a Demo
              </Button>
            </Link>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-6 text-sm text-primary-200"
          >
            No credit card required. Free trial for 14 days.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;