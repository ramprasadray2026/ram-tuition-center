import { useState } from 'react'
import { Upload, Check, AlertCircle } from 'lucide-react'
import { toast } from 'react-toastify'

interface UploadFormData {
  title: string
  description: string
  category: string
  file: File | null
}

export default function UploadPage() {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState<UploadFormData>({
    title: '',
    description: '',
    category: 'Math',
    file: null,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files[0]) {
      const file = files[0]
      
      // Validate file size (max 50MB)
      if (file.size > 50 * 1024 * 1024) {
        toast.error('File size must be less than 50MB')
        return
      }
      
      // Validate file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'image/jpeg', 'image/png']
      if (!allowedTypes.includes(file.type)) {
        toast.error('Only PDF, DOC, DOCX, JPG, and PNG files are allowed')
        return
      }
      
      setFormData(prev => ({ ...prev, file }))
      toast.success('File selected successfully')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.title || !formData.description || !formData.file) {
      toast.error('Please fill all fields')
      return
    }

    setLoading(true)
    try {
      const formDataToSend = new FormData()
      formDataToSend.append('title', formData.title)
      formDataToSend.append('description', formData.description)
      formDataToSend.append('category', formData.category)
      formDataToSend.append('file', formData.file)

      // Replace with your actual API endpoint
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formDataToSend,
      })

      if (!response.ok) {
        throw new Error('Upload failed')
      }

      toast.success('Study material uploaded successfully!')
      setFormData({ title: '', description: '', category: 'Math', file: null })
    } catch (error) {
      toast.error('Failed to upload file. Please try again.')
      console.error('Upload error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Upload Study Material</h1>
        <p className="text-gray-600 mt-2">Share valuable learning resources with students</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
              Title *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g., Algebra Fundamentals"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
              Description *
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe what this study material covers"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition resize-none"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
              Category *
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
            >
              <option>Math</option>
              <option>Science</option>
              <option>English</option>
              <option>History</option>
              <option>Geography</option>
              <option>Economics</option>
            </select>
          </div>

          {/* File Upload */}
          <div>
            <label htmlFor="file" className="block text-sm font-medium text-gray-700 mb-2">
              Upload File *
            </label>
            <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-primary-500 transition cursor-pointer">
              <input
                type="file"
                id="file"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div className="text-center">
                <Upload className="mx-auto mb-2 text-gray-400" size={32} />
                <p className="text-gray-700 font-medium">
                  {formData.file ? formData.file.name : 'Click to upload or drag and drop'}
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  PDF, DOC, DOCX, JPG, PNG (Max 50MB)
                </p>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 text-white font-semibold py-3 rounded-lg transition flex items-center justify-center space-x-2"
          >
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Uploading...</span>
              </>
            ) : (
              <>
                <Upload size={20} />
                <span>Upload Material</span>
              </>
            )}
          </button>
        </form>
      </div>

      {/* Info Box */}
      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4 flex space-x-3">
        <AlertCircle className="text-blue-600 flex-shrink-0" size={24} />
        <div className="text-sm text-blue-800">
          <p className="font-semibold mb-1">Upload Guidelines</p>
          <ul className="list-disc list-inside space-y-1 text-opacity-90">
            <li>Ensure the content is accurate and helpful</li>
            <li>Use clear titles and descriptions</li>
            <li>File must be less than 50MB</li>
            <li>Uploaded materials will be reviewed before publishing</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
