import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import ProfileHeader from '../components/profile/ProfileHeader';
import ProfileTabs from '../components/profile/ProfileTabs';
import { mockUsers, mockPosts } from '../data/mockData';

const ProfilePage: React.FC = () => {
  const { username } = useParams<{ username?: string }>();
  const currentUser = mockUsers[0]; // For demonstration
  
  // If username is provided, find that user, otherwise show current user
  const user = username 
    ? mockUsers.find(user => user.username === username) ?? currentUser
    : currentUser;
  
  // Get posts for this user
  const userPosts = mockPosts.filter(post => post.user.id === user.id);
  
  return (
    <Layout>
      <div className="max-w-5xl mx-auto">
        <ProfileHeader 
          user={user} 
          postsCount={userPosts.length} 
          isCurrentUser={user.id === currentUser.id} 
        />
        <ProfileTabs posts={userPosts} />
      </div>
    </Layout>
  );
};

export default ProfilePage;