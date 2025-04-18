import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Avatar from '../components/ui/Avatar';
import Icon from '../components/ui/Icon';
import { mockPosts } from '../data/mockData';
import { formatTimeAgo } from '../utils/formatTimeAgo';

const PostDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const post = mockPosts.find(post => post.id === id);
  
  if (!post) {
    return (
      <Layout>
        <div className="max-w-5xl mx-auto px-4 py-20 text-center">
          <h2 className="text-2xl font-semibold mb-4">Post not found</h2>
          <button 
            onClick={() => navigate(-1)}
            className="text-blue-500 font-semibold"
          >
            Go back
          </button>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="max-w-4xl mx-auto my-8">
        <div className="bg-white border border-gray-200 rounded-sm overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Image */}
            <div className="md:w-7/12 bg-black flex items-center justify-center">
              <img 
                src={post.image} 
                alt={post.caption} 
                className="max-h-[80vh] max-w-full object-contain" 
              />
            </div>
            
            {/* Content */}
            <div className="md:w-5/12 flex flex-col border-l border-gray-200">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <div className="flex items-center">
                  <Avatar src={post.user.profileImage} alt={post.user.username} size="sm" />
                  <div className="ml-3">
                    <p className="font-semibold text-sm">{post.user.username}</p>
                  </div>
                </div>
                <button>
                  <Icon name="MoreHorizontal" size={20} />
                </button>
              </div>
              
              {/* Comments */}
              <div className="flex-1 overflow-y-auto p-4">
                {/* Post caption */}
                <div className="flex mb-4">
                  <Avatar src={post.user.profileImage} alt={post.user.username} size="sm" />
                  <div className="ml-3">
                    <p className="text-sm">
                      <span className="font-semibold">{post.user.username}</span>
                      {' '}{post.caption}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {formatTimeAgo(new Date(post.createdAt))}
                    </p>
                  </div>
                </div>
                
                {/* Comment list */}
                {post.comments.map(comment => (
                  <div key={comment.id} className="flex mb-4">
                    <Avatar src={comment.user.profileImage} alt={comment.user.username} size="sm" />
                    <div className="ml-3">
                      <p className="text-sm">
                        <span className="font-semibold">{comment.user.username}</span>
                        {' '}{comment.text}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {formatTimeAgo(new Date(comment.createdAt))}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Actions */}
              <div className="p-4 border-t border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-4">
                    <button className="focus:outline-none">
                      <Icon name={post.hasLiked ? 'Heart' : 'Heart'} size={24} className={post.hasLiked ? 'text-red-500 fill-red-500' : ''} />
                    </button>
                    <button className="focus:outline-none">
                      <Icon name="MessageCircle" size={24} />
                    </button>
                    <button className="focus:outline-none">
                      <Icon name="Send" size={24} />
                    </button>
                  </div>
                  <button className="focus:outline-none">
                    <Icon name="Bookmark" size={24} />
                  </button>
                </div>
                
                {/* Likes */}
                <p className="font-semibold text-sm mb-1">{post.likes.toLocaleString()} likes</p>
                
                {/* Timestamp */}
                <p className="text-gray-500 text-xs uppercase mt-2">
                  {formatTimeAgo(new Date(post.createdAt))}
                </p>
              </div>
              
              {/* Comment input */}
              <div className="flex items-center border-t border-gray-200 px-4 py-3">
                <Icon name="Smile" size={24} className="text-gray-500 mr-2" />
                <input
                  type="text"
                  placeholder="Add a comment..."
                  className="flex-1 focus:outline-none text-sm"
                />
                <button className="text-blue-500 font-semibold text-sm ml-2">
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PostDetailPage;