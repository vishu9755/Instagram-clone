import { Post, Story, User } from '../types';

export const mockUsers: User[] = [
  {
    id: '1',
    username: 'johndoe',
    fullName: 'John Doe',
    profileImage: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300',
    bio: 'Photographer | Traveler | Coffee Enthusiast',
    following: 342,
    followers: 1025,
    isFollowing: true,
  },
  {
    id: '2',
    username: 'janedoe',
    fullName: 'Jane Doe',
    profileImage: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
    bio: 'Digital Nomad | Food Lover',
    following: 256,
    followers: 2438,
    isFollowing: false,
  },
  {
    id: '3',
    username: 'travel_mike',
    fullName: 'Mike Wilson',
    profileImage: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
    bio: 'Adventure Seeker | World Explorer',
    following: 578,
    followers: 3201,
    isFollowing: true,
  },
  {
    id: '4',
    username: 'emma_styles',
    fullName: 'Emma Styles',
    profileImage: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
    bio: 'Fashion | Lifestyle | Beauty',
    following: 412,
    followers: 5829,
    isFollowing: false,
  },
  {
    id: '5',
    username: 'foodie_sam',
    fullName: 'Sam Chen',
    profileImage: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300',
    bio: 'Food Blogger | Chef | Culinary Arts',
    following: 183,
    followers: 2704,
    isFollowing: true,
  }
];

export const mockPosts: Post[] = [
  {
    id: '1',
    user: mockUsers[0],
    image: 'https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Beautiful sunset at the beach today! 🌅 #sunset #beach #vibes',
    likes: 256,
    hasLiked: false,
    comments: [
      {
        id: '1',
        user: mockUsers[1],
        text: 'Amazing shot! 😍',
        createdAt: '2023-07-15T14:30:00Z'
      },
      {
        id: '2',
        user: mockUsers[2],
        text: 'Wish I was there!',
        createdAt: '2023-07-15T15:12:00Z'
      }
    ],
    createdAt: '2023-07-15T12:30:00Z'
  },
  {
    id: '2',
    user: mockUsers[1],
    image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Breakfast of champions 🍳 #foodie #breakfast #healthyeating',
    likes: 189,
    hasLiked: true,
    comments: [
      {
        id: '3',
        user: mockUsers[4],
        text: 'Looks delicious! Recipe please?',
        createdAt: '2023-07-14T09:45:00Z'
      }
    ],
    createdAt: '2023-07-14T08:15:00Z'
  },
  {
    id: '3',
    user: mockUsers[2],
    image: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Exploring new heights 🏔️ #adventure #mountains #hiking',
    likes: 432,
    hasLiked: false,
    comments: [
      {
        id: '4',
        user: mockUsers[0],
        text: 'What an amazing view!',
        createdAt: '2023-07-13T17:20:00Z'
      },
      {
        id: '5',
        user: mockUsers[3],
        text: 'Be safe up there!',
        createdAt: '2023-07-13T18:05:00Z'
      }
    ],
    createdAt: '2023-07-13T16:45:00Z'
  },
  {
    id: '4',
    user: mockUsers[3],
    image: 'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'New outfit for spring 🌸 #fashion #ootd #springvibes',
    likes: 765,
    hasLiked: true,
    comments: [
      {
        id: '6',
        user: mockUsers[1],
        text: 'Love this look! 💕',
        createdAt: '2023-07-12T13:10:00Z'
      }
    ],
    createdAt: '2023-07-12T11:30:00Z'
  },
  {
    id: '5',
    user: mockUsers[4],
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Homemade pasta night 🍝 #italianfood #homecooking #foodporn',
    likes: 321,
    hasLiked: false,
    comments: [
      {
        id: '7',
        user: mockUsers[2],
        text: 'Looks amazing! Need to try making this.',
        createdAt: '2023-07-11T19:45:00Z'
      },
      {
        id: '8',
        user: mockUsers[0],
        text: 'Dinner invitation next time? 😉',
        createdAt: '2023-07-11T20:30:00Z'
      }
    ],
    createdAt: '2023-07-11T18:20:00Z'
  }
];

export const mockStories: Story[] = [
  {
    id: '1',
    user: mockUsers[0],
    image: 'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=800',
    createdAt: '2023-07-15T10:30:00Z',
    hasViewed: false
  },
  {
    id: '2',
    user: mockUsers[1],
    image: 'https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=800',
    createdAt: '2023-07-15T11:15:00Z',
    hasViewed: true
  },
  {
    id: '3',
    user: mockUsers[2],
    image: 'https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=800',
    createdAt: '2023-07-15T09:45:00Z',
    hasViewed: false
  },
  {
    id: '4',
    user: mockUsers[3],
    image: 'https://images.pexels.com/photos/1719344/pexels-photo-1719344.jpeg?auto=compress&cs=tinysrgb&w=800',
    createdAt: '2023-07-15T08:30:00Z',
    hasViewed: true
  },
  {
    id: '5',
    user: mockUsers[4],
    image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800',
    createdAt: '2023-07-15T12:00:00Z',
    hasViewed: false
  }
];

export const explorePosts = [
  ...mockPosts,
  {
    id: '6',
    user: mockUsers[2],
    image: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'City lights 🌃 #urban #nightlife #cityscape',
    likes: 528,
    hasLiked: false,
    comments: [],
    createdAt: '2023-07-10T22:15:00Z'
  },
  {
    id: '7',
    user: mockUsers[0],
    image: 'https://images.pexels.com/photos/1212600/pexels-photo-1212600.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Morning workout done ✅ #fitness #health #motivation',
    likes: 211,
    hasLiked: true,
    comments: [],
    createdAt: '2023-07-09T08:00:00Z'
  },
  {
    id: '8',
    user: mockUsers[3],
    image: 'https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Weekend getaway 🏡 #cabin #nature #weekend',
    likes: 387,
    hasLiked: false,
    comments: [],
    createdAt: '2023-07-08T16:30:00Z'
  },
  {
    id: '9',
    user: mockUsers[1],
    image: 'https://images.pexels.com/photos/3049121/pexels-photo-3049121.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Art museum visit 🎨 #art #culture #museum',
    likes: 156,
    hasLiked: false,
    comments: [],
    createdAt: '2023-07-07T14:20:00Z'
  }
];