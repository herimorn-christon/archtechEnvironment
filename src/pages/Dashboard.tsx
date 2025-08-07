import React, { useState } from 'react';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import ProjectCard from '../components/dashboard/ProjectCard';
import Button from '../components/ui/Button';
import { Project } from '../types';
import { Grid, ListFilter, Plus } from 'lucide-react';

// Mock data
const mockProjects: Project[] = [
  {
    id: '1',
    name: 'Modern Minimalist Apartment',
    description: 'Open concept living space with minimalist design principles.',
    thumbnail: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    createdAt: new Date('2023-11-15'),
    updatedAt: new Date('2023-12-01'),
    userId: 'user1',
  },
  {
    id: '2',
    name: 'Cozy Mountain Cabin',
    description: 'Rustic retreat with modern amenities and panoramic views.',
    thumbnail: 'https://images.pexels.com/photos/803908/pexels-photo-803908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    createdAt: new Date('2023-10-05'),
    updatedAt: new Date('2023-11-20'),
    userId: 'user1',
  },
  {
    id: '3',
    name: 'Urban Loft Renovation',
    description: 'Converting an industrial space into a contemporary living area.',
    thumbnail: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    createdAt: new Date('2023-09-12'),
    updatedAt: new Date('2023-10-30'),
    userId: 'user1',
  },
  {
    id: '4',
    name: 'Beachfront Villa',
    description: 'Luxury coastal property with indoor-outdoor living spaces.',
    thumbnail: 'https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    createdAt: new Date('2023-08-22'),
    updatedAt: new Date('2023-09-15'),
    userId: 'user1',
  },
  {
    id: '5',
    name: 'Sustainable Garden Design',
    description: 'Eco-friendly outdoor space with native plants and efficient irrigation.',
    thumbnail: 'https://images.pexels.com/photos/2091892/pexels-photo-2091892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    createdAt: new Date('2023-07-05'),
    updatedAt: new Date('2023-08-10'),
    userId: 'user1',
  },
  {
    id: '6',
    name: 'Smart Home Integration',
    description: 'Comprehensive home automation system for enhanced living.',
    thumbnail: 'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    createdAt: new Date('2023-06-18'),
    updatedAt: new Date('2023-07-25'),
    userId: 'user1',
  },
];

const Dashboard: React.FC = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const handleCreateClick = () => {
    setIsCreateModalOpen(true);
  };

  return (
    <div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
      <DashboardHeader
        title="My Projects"
        subtitle="Manage and explore your design projects"
        showCreateButton
        onCreateClick={handleCreateClick}
      />
      
      <div className="mb-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" leftIcon={<ListFilter className="h-4 w-4" />}>
            Filter
          </Button>
          <Button variant="ghost" size="sm" leftIcon={<Grid className="h-4 w-4" />}>
            View
          </Button>
        </div>
        
        <div className="text-sm text-neutral-600">
          Showing {mockProjects.length} projects
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
          />
        ))}
      </div>
      
      {mockProjects.length === 0 && (
        <div className="flex flex-col items-center justify-center py-12 px-4">
          <div className="bg-primary-100 p-4 rounded-full mb-4">
            <Plus className="h-8 w-8 text-primary-600" />
          </div>
          <h3 className="text-xl font-semibold text-neutral-900 mb-2">No projects yet</h3>
          <p className="text-neutral-600 text-center mb-6 max-w-md">
            Create your first project to start designing your dream home with AI assistance.
          </p>
          <Button
            onClick={handleCreateClick}
            leftIcon={<Plus className="h-4 w-4" />}
          >
            Create New Project
          </Button>
        </div>
      )}
      
      {/* Pagination would go here for larger project collections */}
    </div>
  );
};

export default Dashboard;