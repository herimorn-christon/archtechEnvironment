import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Layers } from 'lucide-react';
import Card from '../ui/Card';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const delay = index * 0.1;
  const formattedDate = new Date(project.updatedAt).toLocaleDateString();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <Link to={`/projects/${project.id}`}>
        <Card
          interactive
          className="overflow-hidden h-full"
        >
          <div className="relative h-40 overflow-hidden">
            <img
              src={project.thumbnail}
              alt={project.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
          
          <div className="p-4">
            <h3 className="text-lg font-semibold text-neutral-900 mb-1">
              {project.name}
            </h3>
            <p className="text-sm text-neutral-600 line-clamp-2 mb-4">
              {project.description}
            </p>
            
            <div className="flex items-center justify-between text-sm text-neutral-500">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{formattedDate}</span>
              </div>
              <div className="flex items-center">
                <Layers className="h-4 w-4 mr-1" />
                <span>3 Designs</span>
              </div>
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;