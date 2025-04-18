import React, { useState } from 'react';
import Icon from '../ui/Icon';
import Button from '../ui/Button';
import Avatar from '../ui/Avatar';
import { mockUsers } from '../../data/mockData';

const CreatePostForm: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [caption, setCaption] = useState('');
  const [activeStep, setActiveStep] = useState<'select' | 'edit' | 'share'>('select');
  const currentUser = mockUsers[0]; // For demonstration
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        setActiveStep('edit');
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleSharePost = () => {
    // In a real app, we would send the post to the server
    alert('Post shared successfully!');
    setSelectedImage(null);
    setCaption('');
    setActiveStep('select');
  };
  
  return (
    <div className="max-w-xl mx-auto bg-white border border-gray-200 rounded-lg">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        {activeStep !== 'select' && (
          <button 
            onClick={() => setActiveStep(activeStep === 'edit' ? 'select' : 'edit')}
            className="text-blue-500"
          >
            <Icon name="ArrowLeft" size={24} />
          </button>
        )}
        <h2 className="text-lg font-semibold flex-1 text-center">Create New Post</h2>
        {activeStep !== 'select' && (
          <button 
            onClick={() => setActiveStep('share')}
            className="text-blue-500 font-semibold"
            disabled={activeStep === 'share'}
          >
            {activeStep === 'edit' ? 'Next' : ''}
          </button>
        )}
      </div>
      
      {/* Content */}
      <div className="p-4">
        {activeStep === 'select' && (
          <div className="flex flex-col items-center justify-center py-20">
            <Icon name="Image" size={80} className="text-gray-300 mb-4" />
            <h3 className="text-xl font-light mb-4">Drag photos and videos here</h3>
            <label className="bg-blue-500 text-white font-semibold px-4 py-2 rounded cursor-pointer">
              Select from computer
              <input 
                type="file" 
                accept="image/*" 
                className="hidden" 
                onChange={handleFileChange} 
              />
            </label>
          </div>
        )}
        
        {activeStep === 'edit' && selectedImage && (
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3 bg-black flex items-center justify-center">
              <img 
                src={selectedImage} 
                alt="Selected" 
                className="max-h-[70vh] max-w-full object-contain" 
              />
            </div>
            <div className="md:w-1/3 p-4">
              <div className="flex items-center mb-4">
                <Avatar src={currentUser.profileImage} alt={currentUser.username} size="sm" />
                <span className="ml-2 font-semibold">{currentUser.username}</span>
              </div>
              <textarea
                placeholder="Write a caption..."
                className="w-full p-2 h-20 border border-gray-200 rounded resize-none focus:outline-none focus:ring-1 focus:ring-gray-300"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
              />
            </div>
          </div>
        )}
        
        {activeStep === 'share' && selectedImage && (
          <div className="flex flex-col">
            <div className="mb-4">
              <img 
                src={selectedImage} 
                alt="Selected" 
                className="max-h-[40vh] max-w-full object-contain mx-auto" 
              />
            </div>
            <div className="border-t border-gray-200 pt-4">
              <p className="mb-2 font-semibold">Caption:</p>
              <p>{caption || 'No caption'}</p>
              <Button 
                variant="primary" 
                fullWidth 
                className="mt-4"
                onClick={handleSharePost}
              >
                Share Post
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreatePostForm;