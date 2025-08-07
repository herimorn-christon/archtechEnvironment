import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserPlus, Mail, Lock, User } from 'lucide-react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Card from '../components/ui/Card';
import { useAppStore } from '../store';

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const { setCurrentUser, setIsAuthenticated } = useAppStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock signup for demo
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
          <h2 className="text-3xl font-bold text-neutral-900">Create Account</h2>
          <p className="mt-2 text-neutral-600">
            Start designing your dream space with AIHomeX
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            type="text"
            label="Full Name"
            placeholder="Enter your full name"
            leftIcon={<User className="h-5 w-5" />}
            fullWidth
            required
          />

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
            placeholder="Create a password"
            leftIcon={<Lock className="h-5 w-5" />}
            fullWidth
            required
          />

          <Input
            type="password"
            label="Confirm Password"
            placeholder="Confirm your password"
            leftIcon={<Lock className="h-5 w-5" />}
            fullWidth
            required
          />

          <Button
            type="submit"
            fullWidth
            leftIcon={<UserPlus className="h-5 w-5" />}
          >
            Create Account
          </Button>
        </form>

        <p className="mt-4 text-center text-sm text-neutral-600">
          Already have an account?{' '}
          <Link
            to="/login"
            className="font-medium text-primary-600 hover:text-primary-500"
          >
            Sign in
          </Link>
        </p>
      </Card>
    </div>
  );
};

export default Signup;