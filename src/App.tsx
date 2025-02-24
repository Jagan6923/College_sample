import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { GraduationCap, BookOpen, Users, Trophy, Microscope, LogIn, UserPlus } from 'lucide-react';
import Dashboard from './pages/Dashboard';
import Terms from './pages/Terms';

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="bg-blue-900 text-white px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold">SSM IET</span>
              <span className="text-xs text-blue-200">Institute of Engineering and Technology</span>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="flex items-center space-x-2 hover:text-blue-200">
              <LogIn className="h-5 w-5" />
              <span>Login</span>
            </a>
            <a href="#" className="flex items-center space-x-2 bg-blue-700 px-4 py-2 rounded-lg hover:bg-blue-600">
              <UserPlus className="h-5 w-5" />
              <span>Register</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80"
          alt="College Campus"
          className="w-full h-[600px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <div className="max-w-7xl mx-auto px-6 text-white">
            <h1 className="text-5xl font-bold mb-4">Shape Your Future at SSM IET</h1>
            <p className="text-xl mb-8 max-w-2xl">Empowering future engineers with cutting-edge education, innovative research opportunities, and industry-leading expertise since 1995.</p>
            <div className="flex space-x-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-500 transition-colors">
                Explore Programs
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
                Virtual Tour
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Why Choose SSM IET</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Excellence</h3>
              <p className="text-gray-600">Ranked among top engineering institutes nationwide</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Expert Faculty</h3>
              <p className="text-gray-600">Learn from industry veterans and renowned academics</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Microscope className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Research Focus</h3>
              <p className="text-gray-600">State-of-the-art laboratories and research facilities</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Modern Curriculum</h3>
              <p className="text-gray-600">Industry-aligned courses with practical training</p>
            </div>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Our Programs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80"
                alt="Computer Engineering"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Computer Engineering</h3>
                <p className="text-gray-600 mb-4">Cutting-edge curriculum in software development, AI, and cybersecurity.</p>
                <button className="text-blue-600 font-semibold hover:text-blue-800">Learn More →</button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80"
                alt="Mechanical Engineering"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Mechanical Engineering</h3>
                <p className="text-gray-600 mb-4">Advanced manufacturing, robotics, and sustainable engineering solutions.</p>
                <button className="text-blue-600 font-semibold hover:text-blue-800">Learn More →</button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1498084393753-b411b2d26b34?auto=format&fit=crop&q=80"
                alt="Electrical Engineering"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Electrical Engineering</h3>
                <p className="text-gray-600 mb-4">Power systems, electronics, and renewable energy technologies.</p>
                <button className="text-blue-600 font-semibold hover:text-blue-800">Learn More →</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center mb-6">
            <GraduationCap className="h-12 w-12" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Begin Your Journey at SSM IET</h2>
          <p className="text-xl mb-8">Join our community of innovators and future leaders in engineering.</p>
          <button className="bg-white text-blue-900 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-100 transition-colors">
            Apply Now
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center mb-8">
            <GraduationCap className="h-8 w-8 mr-2" />
            <span className="text-2xl font-bold">SSM IET</span>
          </div>
          <div className="text-center">
            <p className="text-gray-400 mb-4">© 2024 SSM Institute of Engineering and Technology. All rights reserved.</p>
            <Link to="/terms" className="text-gray-400 hover:text-white">Terms & Conditions</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/terms" element={<Terms />} />
    </Routes>
  );
}

export default App;