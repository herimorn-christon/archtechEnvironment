import React, { useState, useRef, useEffect } from 'react';
import { Send, Mic, Image as ImageIcon, Maximize2, Download, Share2, Undo, Redo } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Card from '../components/ui/Card';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface Design {
  id: string;
  preview: string;
  description: string;
}

const AIAssistant: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [designs, setDesigns] = useState<Design[]>([]);
  const [selectedDesign, setSelectedDesign] = useState<Design | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim() || isProcessing) return;

    const newMessage: Message = {
      id: Math.random().toString(36).substring(2),
      type: 'user',
      content: prompt,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, newMessage]);
    setPrompt('');
    setIsProcessing(true);

    // Simulate AI processing
    setTimeout(() => {
      const response: Message = {
        id: Math.random().toString(36).substring(2),
        type: 'assistant',
        content: 'I understand you want to design a modern living space. Based on your description, I\'ve generated several design concepts that incorporate natural light, sustainable materials, and an open floor plan.',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, response]);
      setIsProcessing(false);

      // Simulate generating design options
      setDesigns([
        {
          id: '1',
          preview: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
          description: 'Modern minimalist design with natural light',
        },
        {
          id: '2',
          preview: 'https://images.pexels.com/photos/1571462/pexels-photo-1571462.jpeg',
          description: 'Contemporary open-concept layout',
        },
      ]);
    }, 2000);
  };

  const handleVoiceInput = () => {
    setIsRecording(!isRecording);
    // Implement voice recognition logic here
  };

  const handleImageUpload = () => {
    // Implement image upload logic here
  };

  return (
    <div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Chat and Input Section */}
        <div className="flex flex-col h-[800px]">
          <Card className="flex-grow flex flex-col">
            <div className="p-6 border-b border-neutral-200">
              <h2 className="text-2xl font-bold text-neutral-900">AI Design Assistant</h2>
              <p className="text-neutral-600">Describe your dream space in detail</p>
            </div>

            <div 
              ref={chatRef}
              className="flex-grow overflow-y-auto p-6 space-y-4"
            >
              <AnimatePresence>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-4 ${
                        message.type === 'user'
                          ? 'bg-primary-600 text-white'
                          : 'bg-neutral-100 text-neutral-900'
                      }`}
                    >
                      {message.content}
                    </div>
                  </motion.div>
                ))}
                {isProcessing && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="bg-neutral-100 rounded-lg p-4">
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-primary-600 rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-primary-600 rounded-full animate-bounce delay-100" />
                        <div className="w-2 h-2 bg-primary-600 rounded-full animate-bounce delay-200" />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <form onSubmit={handleSubmit} className="p-4 border-t border-neutral-200">
              <div className="flex space-x-2">
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={handleVoiceInput}
                  className={isRecording ? 'text-red-500' : ''}
                >
                  <Mic className="w-5 h-5" />
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={handleImageUpload}
                >
                  <ImageIcon className="w-5 h-5" />
                </Button>
                <Input
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-grow"
                />
                <Button type="submit" disabled={!prompt.trim() || isProcessing}>
                  <Send className="w-5 h-5" />
                </Button>
              </div>
            </form>
          </Card>
        </div>

        {/* 3D Preview Section */}
        <div className="h-[800px] relative">
          <Card className="h-full">
            <div className="absolute top-4 right-4 z-10 flex space-x-2">
              <Button variant="ghost" size="icon">
                <Maximize2 className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Download className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Share2 className="w-5 h-5" />
              </Button>
            </div>
            <Canvas>
              <PerspectiveCamera makeDefault position={[0, 0, 5]} />
              <OrbitControls />
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              {/* 3D content will be rendered here */}
            </Canvas>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;