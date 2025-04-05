import React, { useState } from 'react';
import QuoteForm from '../components/QuoteForm';
import QuoteTracker from '../components/QuoteTracker';
import ReportingDashboard from '../components/ReportingDashboard';

export default function Admin() {
  const [activeTab, setActiveTab] = useState('quotes');
  
  return (
    <main className="min-h-screen p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">KMI Services Admin</h1>
        
        <div className="mb-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex">
              <button
                onClick={() => setActiveTab('quotes')}
                className={`py-2 px-4 text-center border-b-2 font-medium text-sm ${
                  activeTab === 'quotes'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Quote Tracker
              </button>
              <button
                onClick={() => setActiveTab('reports')}
                className={`py-2 px-4 text-center border-b-2 font-medium text-sm ${
                  activeTab === 'reports'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Reports
              </button>
              <button
                onClick={() => setActiveTab('form')}
                className={`py-2 px-4 text-center border-b-2 font-medium text-sm ${
                  activeTab === 'form'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Quote Form
              </button>
            </nav>
          </div>
        </div>
        
        {activeTab === 'quotes' && <QuoteTracker />}
        {activeTab === 'reports' && <ReportingDashboard />}
        {activeTab === 'form' && <QuoteForm />}
      </div>
    </main>
  );
}
