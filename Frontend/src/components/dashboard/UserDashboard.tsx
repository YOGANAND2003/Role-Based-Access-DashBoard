import React, { useEffect, useState } from 'react';
import { userService } from '../../services/user.service';
import { useAuth } from '../../context/AuthContext';

const UserDashboard: React.FC = () => {
  const { user } = useAuth();
  const [dashboardData, setDashboardData] = useState<any>(null);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const data = await userService.getDashboard();
        setDashboardData(data);
      } catch (error) {
        console.error('Failed to fetch dashboard data');
      }
    };

    fetchDashboard();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 font-sans">
      <h2 className="text-3xl font-bold mb-6 text-gray-900">Welcome, {user?.username}!</h2>
      
      <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6">
        {/* Profile Section */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800">Your Profile</h3>
          <p className="mt-2 text-sm text-gray-600">Email: {user?.email}</p>
          <p className="text-sm text-gray-600">Role: {user?.role}</p>
        </div>

        {/* Dashboard Information Section */}
        {dashboardData && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800">Dashboard Information</h3>
            <div className="mt-2 text-sm text-gray-600">
              {/* Add any additional dashboard information here */}
              {/* <p>Data from dashboard API: {JSON.stringify(dashboardData)}</p> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
