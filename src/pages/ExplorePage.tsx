import React from 'react';
import Layout from '../components/layout/Layout';
import ExploreGrid from '../components/explore/ExploreGrid';
import { explorePosts } from '../data/mockData';

const ExplorePage: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4 pt-4">
        <ExploreGrid posts={explorePosts} />
      </div>
    </Layout>
  );
};

export default ExplorePage;