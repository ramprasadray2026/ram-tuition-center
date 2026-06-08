import { Link } from 'react-router-dom'
import { Home, BookOpen, Upload, BarChart3 } from 'lucide-react'

const menuItems = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: BarChart3, label: 'Dashboard', path: '/dashboard' },
  { icon: BookOpen, label: 'Study Material', path: '/study-material' },
  { icon: Upload, label: 'Upload', path: '/upload' },
]

export default function Sidebar() {
  return (
    <aside className="hidden md:flex w-64 bg-gradient-to-b from-primary-600 to-primary-700 text-white flex-col">
      <div className="p-6 border-b border-primary-500">
        <h2 className="text-xl font-bold">RAM Center</h2>
      </div>
      <nav className="flex-1 px-3 py-6 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon
          return (
            <Link
              key={item.path}
              to={item.path}
              className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-primary-600 transition-colors"
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>
      <div className="p-4 border-t border-primary-500 text-sm text-primary-100">
        <p>© 2026 RAM Tuition Center</p>
      </div>
    </aside>
  )
}
