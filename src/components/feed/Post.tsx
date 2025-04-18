import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Post as PostType } from '../../types';
import Avatar from '../ui/Avatar';
import Icon from '../ui/Icon';
import { formatTimeAgo } from '../../utils/formatTimeAgo';

interface PostProps {
  post: PostType;
}

const Post: React.FC<PostProps> = ({ post }) => {
  const [liked, setLiked] = useState(post.hasLiked);
  const [likesCount, setLikesCount] = useState(post.likes);
  const [showAllComments, setShowAllComments] = useState(false);
  const [commentText, setCommentText] = useState('');

  const toggleLike = () => {
    if (liked) {
      setLikesCount(likesCount - 1);
    } else {
      setLikesCount(likesCount + 1);
    }
    setLiked(!liked);
  };

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (commentText.trim()) {
      // In a real app, we would send the comment to the server
      setCommentText('');
    }
  };

  const displayedComments = showAllComments 
    ? post.comments 
    : post.comments.slice(0, 2);

  return (
    <div className="bg-white border border-gray-200 rounded-sm mb-4">
      {/* Post header */}
      <div className="flex items-center justify-between p-3">
        <Link to={`/profile/${post.user.username}`} className="flex items-center">
          <Avatar src={post.user.profileImage} alt={post.user.username} size="sm" />
          <div className="ml-3">
            <p className="font-semibold text-sm">{post.user.username}</p>
          </div>
        </Link>
        <button>
          <Icon name="MoreHorizontal" size={20} />
        </button>
      </div>

      {/* Post image */}
      <div className="relative">
        <img 
          src={post.image} 
          alt={post.caption} 
          className="w-full object-cover max-h-[60vh]" 
        />
      </div>

      {/* Post actions */}
      <div className="p-3">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-4">
            <button onClick={toggleLike} className="focus:outline-none">
              <Icon name={liked ? 'Heart' : 'Heart'} size={24} className={liked ? 'text-red-500 fill-red-500' : ''} />
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
        <p className="font-semibold text-sm mb-1">{likesCount.toLocaleString()} likes</p>

        {/* Caption */}
        <p className="text-sm mb-1">
          <Link to={`/profile/${post.user.username}`} className="font-semibold mr-1">
            {post.user.username}
          </Link>
          {post.caption}
        </p>

        {/* Comments */}
        {post.comments.length > 0 && (
          <div className="mt-2">
            {post.comments.length > 2 && !showAllComments && (
              <button 
                className="text-gray-500 text-sm mb-1"
                onClick={() => setShowAllComments(true)}
              >
                View all {post.comments.length} comments
              </button>
            )}
            
            {displayedComments.map(comment => (
              <div key={comment.id} className="text-sm mb-1">
                <Link to={`/profile/${comment.user.username}`} className="font-semibold mr-1">
                  {comment.user.username}
                </Link>
                {comment.text}
              </div>
            ))}
          </div>
        )}

        {/* Timestamp */}
        <p className="text-gray-500 text-xs uppercase mt-2">
          {formatTimeAgo(new Date(post.createdAt))}
        </p>
      </div>

      {/* Comment input */}
      <form onSubmit={handleSubmitComment} className="flex items-center border-t border-gray-200 px-3 py-2">
        <Icon name="Smile" size={24} className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Add a comment..."
          className="flex-1 focus:outline-none text-sm"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <button 
          type="submit" 
          className={`text-blue-500 font-semibold text-sm ${!commentText.trim() ? 'opacity-50 cursor-default' : ''}`}
          disabled={!commentText.trim()}
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default Post;