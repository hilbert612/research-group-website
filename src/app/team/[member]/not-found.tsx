import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Team Member Not Found</h2>
        <p className="text-gray-600 mb-8">
          The team member you're looking for doesn't exist or has been moved.
        </p>
        <div className="space-x-4">
          <Link 
            href="/#team" 
            className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
          >
            Back to Team
          </Link>
          <Link 
            href="/" 
            className="inline-block border border-primary-600 text-primary-600 px-6 py-3 rounded-lg hover:bg-primary-50 transition-colors"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  )
} 