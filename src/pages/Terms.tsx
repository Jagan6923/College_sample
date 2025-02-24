import React from 'react';
import { GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-blue-900 text-white px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8" />
            <span className="text-2xl font-bold">SSM IET</span>
          </Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Terms and Conditions</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700">
              By accessing and using the SSM Institute of Engineering and Technology website and services, 
              you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">2. Academic Policies</h2>
            <p className="text-gray-700">
              Students must maintain the required attendance and academic performance standards as specified 
              in the college guidelines. Failure to meet these requirements may result in disciplinary action.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">3. Code of Conduct</h2>
            <p className="text-gray-700">
              All students are expected to maintain high standards of behavior and academic integrity. 
              Any form of misconduct, plagiarism, or violation of college rules will be subject to 
              appropriate disciplinary measures.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">4. Fee Structure</h2>
            <p className="text-gray-700">
              Tuition and other fees must be paid according to the schedule provided by the institution. 
              Late payment may incur additional charges as determined by the administration.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">5. Campus Facilities</h2>
            <p className="text-gray-700">
              Students are entitled to use campus facilities in accordance with institutional guidelines. 
              Any damage to college property will be charged to the responsible individual(s).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">6. Privacy Policy</h2>
            <p className="text-gray-700">
              The institution respects student privacy and handles personal information in accordance 
              with applicable data protection laws and regulations.
            </p>
          </section>

          <div className="mt-8 pt-6 border-t">
            <p className="text-sm text-gray-500">
              Last updated: March 2024
            </p>
            <Link to="/" className="text-blue-600 hover:text-blue-800 font-medium inline-block mt-4">
              ← Back to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}