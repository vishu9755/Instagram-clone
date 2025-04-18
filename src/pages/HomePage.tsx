import React from 'react';
import Layout from '../components/layout/Layout';
import Stories from '../components/feed/Stories';
import Post from '../components/feed/Post';
import Suggestions from '../components/feed/Suggestions';
import { mockPosts, mockStories, mockUsers } from '../data/mockData';

const HomePage: React.FC = () => {
  const currentUser = mockUsers[0]; // For demonstration, we'll use the first user as current user
  
  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4 md:flex md:space-x-6">
        <div className="md:w-8/12">
          <Stories stories={mockStories} />
          <div className="space-y-4">
            {mockPosts.map(post => (
              <Post key={post.id} post={post} />
            ))}
          </div>
        </div>
        <Suggestions users={mockUsers} currentUser={currentUser} />
      </div>
    </Layout>
  );
};

export default HomePage;