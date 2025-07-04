import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GalleryDetail from '@/components/GalleryDetail'

export const metadata = {
  title: 'Gallery | ICARE Lab',
  description: 'Photo gallery of the Intelligent Chemistry and Advanced Materials for Renewable Energy Laboratory',
}

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Laboratory Gallery
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A visual journey through our research facilities and activities
            </p>
          </div>
          
          <GalleryDetail />
        </div>
      </main>
      <Footer />
    </>
  )
} 