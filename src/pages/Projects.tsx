import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/dashboard/ProjectCard';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import Button from '../components/ui/Button';
import { Grid, ListFilter, Plus } from 'lucide-react';
import { Project } from '../types';

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
];

const Projects: React.FC = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = React.useState(false);

  const handleCreateClick = () => {
    setIsCreateModalOpen(true);
  };

  return (
    <div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
      <DashboardHeader
        title="All Projects"
        subtitle="Browse and manage your design projects"
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
      
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {mockProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
          />
        ))}
      </motion.div>
      
      {mockProjects.length === 0 && (
        <div className="flex flex-col items-center justify-center py-12 px-4">
          <div className="bg-primary-100 p-4 rounded-full mb-4">
            <Plus className="h-8 w-8 text-primary-600" />
          </div>
          <h3 className="text-xl font-semibold text-neutral-900 mb-2">No projects yet</h3>
          <p className="text-neutral-600 text-center mb-6 max-w-md">
            Create your first project to start designing your dream space with AI assistance.
          </p>
          <Button
            onClick={handleCreateClick}
            leftIcon={<Plus className="h-4 w-4" />}
          >
            Create New Project
          </Button>
        </div>
      )}
    </div>
  );
};

export default Projects;