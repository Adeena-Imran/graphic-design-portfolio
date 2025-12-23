"use client";

import React, { useState } from "react";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Certification() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openImage = (src: string) => {
    setSelectedImage(src);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8 ">
        <h1 className="text-3xl font-bold text-center mb-10 mt-4">Certifications</h1>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Amna Imran Section */}
          <div className="flex-1 mb-6 lg:mb-0 lg:pr-6 lg:border-r lg:border-gray-300">
            <h2 className="text-2xl text-center font-semibold mb-6 border-b-2 border-gray-200 pb-2">
              Amna Imran
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "/images/certificateamna1.jpeg",
                "/images/certificateamna2.jpeg",
                "/images/certificateamna3.jpeg"
              ].map((src, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => openImage(src)}
                >
                  <div className="relative h-64 w-full">
                    <Image
                      src={src}
                      alt={`Certificate Amna ${index + 1}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Wajiha Imran Section */}
          <div className="flex-1 lg:pl-6">
            <h2 className="text-2xl text-center font-semibold mb-6 border-b-2 border-gray-200 pb-2">
              Wajiha Imran
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "/images/certificatewajiha1.jpeg",
                "/images/certificatewajiha2.jpeg",
                "/images/certificatewajiha3.jpeg"
              ].map((src, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => openImage(src)}
                >
                  <div className="relative h-64 w-full">
                    <Image
                      src={src}
                      alt={`Certificate Wajiha ${index + 1}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Full Screen Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={closeImage}
        >
          <div className="relative w-full h-full max-w-5xl max-h-[90vh]">
            <button
              className="absolute top-4 right-4 z-50 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
              onClick={closeImage}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <Image
              src={selectedImage}
              alt="Full Screen Certificate"
              fill
              className="object-contain"
              quality={100}
            />
          </div>
        </div>
      )}
    </div>
  );
}