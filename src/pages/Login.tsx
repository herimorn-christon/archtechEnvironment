import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogIn, Mail, Lock } from 'lucide-react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Card from '../components/ui/Card';
import { useAppStore } from '../store';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { setCurrentUser, setIsAuthenticated } = useAppStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login for demo
    setCurrentUser({
      id: 'demo-user',
      name: 'Demo User',
      email: 'demo@aihomex.com',
      profileImage: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    });
    setIsAuthenticated(true);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-md w-full p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-neutral-900">Welcome Back</h2>
          <p className="mt-2 text-neutral-600">
            Sign in to continue designing your dream space
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            type="email"
            label="Email"
            placeholder="Enter your email"
            leftIcon={<Mail className="h-5 w-5" />}
            fullWidth
            required
          />

          <Input
            type="password"
            label="Password"
            placeholder="Enter your password"
            leftIcon={<Lock className="h-5 w-5" />}
            fullWidth
            required
          />

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded"
              />
              <span className="ml-2 text-sm text-neutral-600">Remember me</span>
            </label>
            <Link
              to="/forgot-password"
              className="text-sm font-medium text-primary-600 hover:text-primary-500"
            >
              Forgot password?
            </Link>
          </div>

          <Button
            type="submit"
            fullWidth
            leftIcon={<LogIn className="h-5 w-5" />}
          >
            Sign In
          </Button>
        </form>

        <p className="mt-4 text-center text-sm text-neutral-600">
          Don't have an account?{' '}
          <Link
            to="/signup"
            className="font-medium text-primary-600 hover:text-primary-500"
          >
            Sign up
          </Link>
        </p>
      </Card>
    </div>
  );
};

export default Login;