import React from 'react';
import Header from './Header';
import BottomNavigation from './BottomNavigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-16 pb-14 md:pb-0 min-h-screen">
        {children}
      </main>
      <BottomNavigation />
    </div>
  );
};

export default Layout;