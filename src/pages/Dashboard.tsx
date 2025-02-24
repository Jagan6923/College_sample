import React from 'react';
import { GraduationCap, BookOpen, Users, Bell } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900">Student Dashboard</h1>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full hover:bg-gray-100">
                <Bell className="h-6 w-6 text-gray-600" />
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold">
                  JS
                </div>
                <span className="text-gray-700">John Smith</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-xl font-semibold">Current Courses</h2>
            </div>
            <div className="space-y-4">
              <div className="border-b pb-3">
                <h3 className="font-medium">Advanced Software Engineering</h3>
                <p className="text-sm text-gray-500">Prof. Sarah Johnson</p>
              </div>
              <div className="border-b pb-3">
                <h3 className="font-medium">Data Structures</h3>
                <p className="text-sm text-gray-500">Prof. Michael Chen</p>
              </div>
              <div className="pb-3">
                <h3 className="font-medium">Computer Networks</h3>
                <p className="text-sm text-gray-500">Prof. David Wilson</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h2 className="text-xl font-semibold">Upcoming Events</h2>
            </div>
            <div className="space-y-4">
              <div className="border-b pb-3">
                <h3 className="font-medium">Technical Symposium</h3>
                <p className="text-sm text-gray-500">March 15, 2024</p>
              </div>
              <div className="border-b pb-3">
                <h3 className="font-medium">Project Presentation</h3>
                <p className="text-sm text-gray-500">March 20, 2024</p>
              </div>
              <div className="pb-3">
                <h3 className="font-medium">Campus Recruitment Drive</h3>
                <p className="text-sm text-gray-500">March 25, 2024</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <GraduationCap className="h-6 w-6 text-purple-600" />
              </div>
              <h2 className="text-xl font-semibold">Academic Progress</h2>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Overall CGPA</span>
                  <span className="text-sm font-medium">8.5/10</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Attendance</span>
                  <span className="text-sm font-medium">92%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Projects Completed</span>
                  <span className="text-sm font-medium">15/18</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: '83%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}