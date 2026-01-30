import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Lazy load pages
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const ProfileEdit = React.lazy(() => import('./pages/ProfileEdit'));

function App() {
  return (
    <Router>
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center bg-gray-very-light">
          <div className="w-8 h-8 border-4 border-primary-purple border-t-transparent rounded-full animate-spin"></div>
        </div>
      }>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/edit" element={<ProfileEdit />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
