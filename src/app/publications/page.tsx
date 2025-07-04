import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PublicationsDetail from '@/components/PublicationsDetail'

export const metadata = {
  title: 'All Publications | ICARE Lab',
  description: 'Research publications from the Intelligent Chemistry and Advanced Materials for Renewable Energy Laboratory',
}

export default function PublicationsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              All Publications
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Research contributions and scholarly work from our laboratory
            </p>
          </div>
          
          <PublicationsDetail />
        </div>
      </main>
      <Footer />
    </>
  )
} 