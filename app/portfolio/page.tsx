import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


import Link from 'next/link';

const sections = [
  { name: 'Logos', href: '/portfolio/logos' },
  { name: 'Posters', href: '/portfolio/posters' },
  { name: 'Brochures', href: '/portfolio/brochures' },
  { name: 'Illustrations', href: '/portfolio/illustrations' },
  { name: 'Visiting Cards', href: '/portfolio/visiting-cards' },
];

export default function Portfolio() {
  return (
    <div><Navbar></Navbar>
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-600">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white mb-4">Our Portfolio</h1>
        <p className="text-lg text-white mb-12">
          Explore our work by selecting a category below.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sections.map((section) => (
          <Link key={section.name} href={section.href}>
            <h1 className="block bg-white rounded-lg shadow-lg p-8 text-center hover:bg-gray-100 transition-colors duration-300">
              <p className="text-2xl font-semibold text-gray-700">{section.name}</p>
            </h1>
          </Link>
        ))}
      </div>
    </div>
    <Footer></Footer></div>
  );
}



