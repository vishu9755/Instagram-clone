import React from 'react';
import Layout from '../components/layout/Layout';
import CreatePostForm from '../components/create/CreatePostForm';

const CreatePostPage: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4 pt-4">
        <CreatePostForm />
      </div>
    </Layout>
  );
};

export default CreatePostPage;