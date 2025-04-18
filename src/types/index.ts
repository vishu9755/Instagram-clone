export interface User {
  id: string;
  username: string;
  fullName: string;
  profileImage: string;
  bio?: string;
  following: number;
  followers: number;
  isFollowing: boolean;
}

export interface Post {
  id: string;
  user: User;
  image: string;
  caption: string;
  likes: number;
  hasLiked: boolean;
  comments: Comment[];
  createdAt: string;
}

export interface Comment {
  id: string;
  user: User;
  text: string;
  createdAt: string;
}

export interface Story {
  id: string;
  user: User;
  image: string;
  createdAt: string;
  hasViewed: boolean;
}