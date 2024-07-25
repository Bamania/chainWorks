// File: src/components/ClientHomePage.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaProjectDiagram, FaHistory, FaStore } from 'react-icons/fa';
import Navbar from '../components/Navbar2';

const ClientHomePage = () => {
  const navigate = useNavigate();
  
  const handleCreateProject = () => {
    navigate("/createproject");
  };

  const handlePastProject = () => {
    navigate("/completed-projects");
  };

    // const updateProposalStatus = async () => {
    //   try {
    //     const response = await fetch('/updateCompletedStatus', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json'
    //       }
    //     });
    //     const data = await response.json();
    //     if (response.ok) {
    //       console.log('Proposals updated successfully', data);
    //     } else {
    //       console.error('Error updating proposals:', data);
    //     }
    //   } catch (error) {
    //     console.error('Error updating proposals:', error);
    //   }
    // };
  
    // useEffect(() => {
    //   updateProposalStatus();
    // }, []);
  useEffect(() => {
    // Call the API to update proposal statuses when the page renders
    const updateProposalStatuses = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/updateCompletedStatus', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('Update response:', data);
      } catch (error) {
        console.error('Error updating proposal statuses:', error);
      }
    };

    updateProposalStatuses();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <div className="flex flex-col items-center justify-center p-4 flex-grow">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Welcome to Your Dashboard</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl">
          <button onClick={handleCreateProject} className="bg-blue-500 text-white rounded-lg p-6 flex flex-col items-center justify-center shadow-lg transform hover:scale-105 transition-transform">
            <FaProjectDiagram size={40} className="mb-4" />
            <span className="text-xl font-semibold">Create Projects</span>
          </button>
          <button onClick={handlePastProject} className="bg-green-500 text-white rounded-lg p-6 flex flex-col items-center justify-center shadow-lg transform hover:scale-105 transition-transform">
            <FaHistory size={40} className="mb-4" />
            <span className="text-xl font-semibold">View Past Projects</span>
          </button>
          <button className="bg-purple-500 text-white rounded-lg p-6 flex flex-col items-center justify-center shadow-lg transform hover:scale-105 transition-transform">
            <FaStore size={40} className="mb-4" />
            <span className="text-xl font-semibold">See Marketplace</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientHomePage;