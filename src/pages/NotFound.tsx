import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import Button from '../components/ui/Button';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8 text-primary-600">
          <svg 
            width="120" 
            height="120" 
            viewBox="0 0 120 120" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto"
          >
            <path 
              d="M60 110C87.6142 110 110 87.6142 110 60C110 32.3858 87.6142 10 60 10C32.3858 10 10 32.3858 10 60C10 87.6142 32.3858 110 60 110Z" 
              stroke="currentColor" 
              strokeWidth="6"
            />
            <path 
              d="M40 40L80 80" 
              stroke="currentColor" 
              strokeWidth="6" 
              strokeLinecap="round"
            />
            <path 
              d="M80 40L40 80" 
              stroke="currentColor" 
              strokeWidth="6" 
              strokeLinecap="round"
            />
          </svg>
        </div>
        
        <h1 className="text-5xl font-bold text-neutral-900 mb-4">Page Not Found</h1>
        <p className="text-xl text-neutral-600 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/">
            <Button leftIcon={<Home className="h-5 w-5" />}>
              Back to Home
            </Button>
          </Link>
          <Button 
            variant="outline" 
            leftIcon={<ArrowLeft className="h-5 w-5" />}
            onClick={() => window.history.back()}
          >
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;