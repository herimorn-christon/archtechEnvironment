import React from 'react';
import { Play, Download, Share2 } from 'lucide-react';
import Button from '../components/ui/Button';

const Demo: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-neutral-900 mb-4">
          Experience AIHomeX in Action
        </h1>
        <p className="text-xl text-neutral-600">
          Watch how AIHomeX transforms spaces using AI, AR, and VR technologies.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-elevated overflow-hidden mb-12">
        <div className="aspect-w-16 aspect-h-9 bg-neutral-900">
          <div className="flex items-center justify-center">
            <Button
              size="lg"
              leftIcon={<Play className="h-6 w-6" />}
              className="absolute"
            >
              Play Demo
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white rounded-xl shadow-elevated p-6">
          <h3 className="text-xl font-semibold mb-2">Natural Language Design</h3>
          <p className="text-neutral-600 mb-4">
            Simply describe your dream space, and watch as AI brings it to life.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-elevated p-6">
          <h3 className="text-xl font-semibold mb-2">AR Visualization</h3>
          <p className="text-neutral-600 mb-4">
            See designs in your actual space using augmented reality.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-elevated p-6">
          <h3 className="text-xl font-semibold mb-2">VR Walkthrough</h3>
          <p className="text-neutral-600 mb-4">
            Experience your design in immersive virtual reality.
          </p>
        </div>
      </div>

      <div className="flex justify-center gap-4">
        <Button leftIcon={<Download className="h-5 w-5" />}>
          Download Brochure
        </Button>
        <Button
          variant="outline"
          leftIcon={<Share2 className="h-5 w-5" />}
        >
          Share Demo
        </Button>
      </div>
    </div>
  );
};

export default Demo;