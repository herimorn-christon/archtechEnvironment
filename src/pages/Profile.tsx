import React from 'react';
import { User, Mail, Phone, MapPin, Camera, Edit2 } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import { useAppStore } from '../store';

const Profile: React.FC = () => {
  const { currentUser } = useAppStore();

  return (
    <div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-neutral-900 mb-8">Profile Settings</h1>

        <div className="grid gap-8">
          <Card className="p-6">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="h-24 w-24 rounded-full overflow-hidden bg-neutral-100">
                  {currentUser?.profileImage ? (
                    <img
                      src={currentUser.profileImage}
                      alt={currentUser.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <User className="h-12 w-12 text-neutral-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  )}
                </div>
                <button className="absolute bottom-0 right-0 p-2 bg-white rounded-full shadow-elevated">
                  <Camera className="h-4 w-4 text-neutral-600" />
                </button>
              </div>
              <div>
                <h2 className="text-xl font-semibold">{currentUser?.name}</h2>
                <p className="text-neutral-600">{currentUser?.email}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-6">Personal Information</h3>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Full Name"
                  defaultValue={currentUser?.name}
                  leftIcon={<User className="h-5 w-5" />}
                />
                <Input
                  label="Email"
                  type="email"
                  defaultValue={currentUser?.email}
                  leftIcon={<Mail className="h-5 w-5" />}
                />
                <Input
                  label="Phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  leftIcon={<Phone className="h-5 w-5" />}
                />
                <Input
                  label="Location"
                  placeholder="Enter your location"
                  leftIcon={<MapPin className="h-5 w-5" />}
                />
              </div>
              <div className="flex justify-end">
                <Button leftIcon={<Edit2 className="h-4 w-4" />}>
                  Update Profile
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;