import React from 'react';
import { Search, Bell, Plus } from 'lucide-react';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { useAppStore } from '../../store';

interface DashboardHeaderProps {
  title: string;
  subtitle?: string;
  showCreateButton?: boolean;
  onCreateClick?: () => void;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  title,
  subtitle,
  showCreateButton = false,
  onCreateClick,
}) => {
  const { toggleSidebar } = useAppStore();

  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900">{title}</h1>
          {subtitle && <p className="mt-1 text-neutral-600">{subtitle}</p>}
        </div>
        
        <div className="mt-4 md:mt-0 flex flex-col sm:flex-row gap-3">
          <div className="relative w-full sm:w-64">
            <Input
              placeholder="Search..."
              leftIcon={<Search className="h-4 w-4" />}
              fullWidth
            />
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              className="relative"
              aria-label="Notifications"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-error-500"></span>
            </Button>
            
            {showCreateButton && (
              <Button
                leftIcon={<Plus className="h-4 w-4" />}
                onClick={onCreateClick}
              >
                New Project
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;