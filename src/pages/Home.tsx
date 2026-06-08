import { Link } from 'react-router-dom'
import { BookOpen, Users, TrendingUp } from 'lucide-react'

export default function Home() {
  const stats = [
    { icon: BookOpen, label: 'Study Materials', value: '250+' },
    { icon: Users, label: 'Active Students', value: '1,500+' },
    { icon: TrendingUp, label: 'Success Rate', value: '95%' },
  ]

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-xl p-8 md:p-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to RAM Tuition Center</h1>
        <p className="text-xl mb-8 text-opacity-90">Access premium study materials and track your learning progress</p>
        <Link to="/study-material" className="inline-block bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Explore Materials
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <div key={stat.label} className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                  <p className="text-3xl font-bold text-primary-600 mt-2">{stat.value}</p>
                </div>
                <Icon size={40} className="text-primary-200" />
              </div>
            </div>
          )
        })}
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link to="/upload" className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-bold text-primary-600 mb-2">Upload Study Material</h3>
          <p className="text-gray-600">Share your learning resources with the community</p>
        </Link>
        <Link to="/dashboard" className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-bold text-primary-600 mb-2">View Dashboard</h3>
          <p className="text-gray-600">Track your progress and learning statistics</p>
        </Link>
      </div>
    </div>
  )
}
