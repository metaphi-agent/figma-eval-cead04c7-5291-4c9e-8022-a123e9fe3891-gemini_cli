import React from 'react';
import { Layout } from '../components/ui/Layout';
import { TabBar } from '../components/blocks/TabBar';

const Dashboard = () => {
  return (
    <Layout>
      <div className="flex-1 flex items-center justify-center bg-gray-light">
        <h1 className="text-xl font-bold text-primary-black">Dashboard</h1>
      </div>
      <TabBar />
    </Layout>
  );
};

export default Dashboard;
