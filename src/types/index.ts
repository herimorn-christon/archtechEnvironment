export interface User {
  id: string;
  name: string;
  email: string;
  profileImage?: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
}

export interface DesignElement {
  id: string;
  type: 'wall' | 'window' | 'door' | 'furniture' | 'plant' | 'decoration';
  position: Position3D;
  rotation: Rotation;
  scale: Scale;
  model: string;
  properties: Record<string, any>;
}

export interface Position3D {
  x: number;
  y: number;
  z: number;
}

export interface Rotation {
  x: number;
  y: number;
  z: number;
}

export interface Scale {
  x: number;
  y: number;
  z: number;
}

export interface DesignSuggestion {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  elements: DesignElement[];
}

export interface AIPrompt {
  text: string;
  timestamp: Date;
  userId: string;
}

export interface UploadedMedia {
  id: string;
  url: string;
  type: 'image' | 'video';
  fileName: string;
  fileSize: number;
  uploadedAt: Date;
  userId: string;
}

export interface Design {
  id: string;
  projectId: string;
  name: string;
  elements: DesignElement[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ViewMode {
  type: '2d' | '3d' | 'ar' | 'vr';
  camera: {
    position: Position3D;
    target: Position3D;
  };
}

export interface Notification {
  id: string;
  type: 'info' | 'success' | 'warning' | 'error';
  message: string;
  timestamp: Date;
  read: boolean;
  userId: string;
}