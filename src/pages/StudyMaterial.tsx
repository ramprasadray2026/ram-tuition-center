import { useState } from 'react'
import { Search, Download, Eye } from 'lucide-react'

interface Material {
  id: number
  title: string
  category: string
  description: string
  author: string
  views: number
  downloads: number
}

const mockMaterials: Material[] = [
  {
    id: 1,
    title: 'Algebra Fundamentals',
    category: 'Math',
    description: 'Complete guide to algebra basics and equations',
    author: 'Ram Tuition',
    views: 1250,
    downloads: 340,
  },
  {
    id: 2,
    title: 'Physics Formulas',
    category: 'Science',
    description: 'Essential physics formulas and their applications',
    author: 'Science Hub',
    views: 890,
    downloads: 210,
  },
]

export default function StudyMaterial() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Math', 'Science', 'English', 'History', 'Geography']
  const filteredMaterials = mockMaterials.filter(material =>
    (selectedCategory === 'All' || material.category === selectedCategory) &&
    material.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Study Materials</h1>
        <p className="text-gray-600 mt-2">Browse and download study materials</p>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search materials..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
          />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Materials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredMaterials.map(material => (
          <div key={material.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition overflow-hidden">
            <div className="p-6 space-y-4">
              <div>
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-bold text-gray-900 flex-1">{material.title}</h3>
                  <span className="inline-block bg-primary-100 text-primary-700 text-xs font-semibold px-3 py-1 rounded-full">
                    {material.category}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{material.description}</p>
              </div>

              <div className="text-sm text-gray-500">
                <p>By {material.author}</p>
              </div>

              <div className="flex space-x-4 text-sm text-gray-600 border-t border-b py-3">
                <div className="flex items-center space-x-1">
                  <Eye size={16} />
                  <span>{material.views} views</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Download size={16} />
                  <span>{material.downloads} downloads</span>
                </div>
              </div>

              <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 rounded-lg transition flex items-center justify-center space-x-2">
                <Download size={18} />
                <span>Download</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredMaterials.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No materials found. Try adjusting your search.</p>
        </div>
      )}
    </div>
  )
}
