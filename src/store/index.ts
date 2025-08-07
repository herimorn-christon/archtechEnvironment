import { create } from 'zustand';
import { 
  User, 
  Project, 
  Design, 
  DesignElement, 
  DesignSuggestion, 
  ViewMode, 
  Notification,
  UploadedMedia
} from '../types';

interface AppState {
  // User state
  currentUser: User | null;
  isAuthenticated: boolean;
  
  // Project state
  projects: Project[];
  currentProject: Project | null;
  
  // Design state
  designs: Design[];
  currentDesign: Design | null;
  selectedElements: string[];
  
  // UI state
  viewMode: ViewMode;
  sidebarOpen: boolean;
  notifications: Notification[];
  isLoading: boolean;
  modalOpen: string | null;
  
  // Media state
  uploadedMedia: UploadedMedia[];
  
  // AI state
  designSuggestions: DesignSuggestion[];
  
  // Actions
  setCurrentUser: (user: User | null) => void;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  setProjects: (projects: Project[]) => void;
  setCurrentProject: (project: Project | null) => void;
  setDesigns: (designs: Design[]) => void;
  setCurrentDesign: (design: Design | null) => void;
  setSelectedElements: (elementIds: string[]) => void;
  setViewMode: (viewMode: ViewMode) => void;
  setSidebarOpen: (open: boolean) => void;
  toggleSidebar: () => void;
  setNotifications: (notifications: Notification[]) => void;
  addNotification: (notification: Omit<Notification, 'id' | 'timestamp' | 'read'>) => void;
  markNotificationAsRead: (id: string) => void;
  clearNotifications: () => void;
  setIsLoading: (isLoading: boolean) => void;
  setModalOpen: (modalId: string | null) => void;
  setUploadedMedia: (media: UploadedMedia[]) => void;
  addMedia: (media: UploadedMedia) => void;
  removeMedia: (id: string) => void;
  setDesignSuggestions: (suggestions: DesignSuggestion[]) => void;
  addDesignElement: (element: DesignElement) => void;
  updateDesignElement: (id: string, updates: Partial<DesignElement>) => void;
  removeDesignElement: (id: string) => void;
}

export const useAppStore = create<AppState>((set) => ({
  // Initial state
  currentUser: null,
  isAuthenticated: false,
  projects: [],
  currentProject: null,
  designs: [],
  currentDesign: null,
  selectedElements: [],
  viewMode: {
    type: '3d',
    camera: {
      position: { x: 5, y: 5, z: 5 },
      target: { x: 0, y: 0, z: 0 }
    }
  },
  sidebarOpen: true,
  notifications: [],
  isLoading: false,
  modalOpen: null,
  uploadedMedia: [],
  designSuggestions: [],
  
  // Actions
  setCurrentUser: (user) => set({ currentUser: user }),
  setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
  setProjects: (projects) => set({ projects }),
  setCurrentProject: (project) => set({ currentProject: project }),
  setDesigns: (designs) => set({ designs }),
  setCurrentDesign: (design) => set({ currentDesign: design }),
  setSelectedElements: (elementIds) => set({ selectedElements: elementIds }),
  setViewMode: (viewMode) => set({ viewMode }),
  setSidebarOpen: (open) => set({ sidebarOpen: open }),
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  setNotifications: (notifications) => set({ notifications }),
  addNotification: (notification) => set((state) => ({
    notifications: [
      ...state.notifications,
      {
        id: Math.random().toString(36).substring(2, 9),
        timestamp: new Date(),
        read: false,
        ...notification,
      }
    ]
  })),
  markNotificationAsRead: (id) => set((state) => ({
    notifications: state.notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    )
  })),
  clearNotifications: () => set({ notifications: [] }),
  setIsLoading: (isLoading) => set({ isLoading }),
  setModalOpen: (modalId) => set({ modalOpen: modalId }),
  setUploadedMedia: (media) => set({ uploadedMedia: media }),
  addMedia: (media) => set((state) => ({
    uploadedMedia: [...state.uploadedMedia, media]
  })),
  removeMedia: (id) => set((state) => ({
    uploadedMedia: state.uploadedMedia.filter(m => m.id !== id)
  })),
  setDesignSuggestions: (suggestions) => set({ designSuggestions: suggestions }),
  addDesignElement: (element) => set((state) => ({
    currentDesign: state.currentDesign 
      ? {
          ...state.currentDesign,
          elements: [...state.currentDesign.elements, element]
        }
      : null
  })),
  updateDesignElement: (id, updates) => set((state) => ({
    currentDesign: state.currentDesign
      ? {
          ...state.currentDesign,
          elements: state.currentDesign.elements.map(el => 
            el.id === id ? { ...el, ...updates } : el
          )
        }
      : null
  })),
  removeDesignElement: (id) => set((state) => ({
    currentDesign: state.currentDesign
      ? {
          ...state.currentDesign,
          elements: state.currentDesign.elements.filter(el => el.id !== id)
        }
      : null
  })),
}));