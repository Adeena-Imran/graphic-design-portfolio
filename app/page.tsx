import Link from 'next/link';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>

    
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-8">
      <h1 className="text-6xl font-extrabold mb-4 leading-tight">
        Creative Graphic Design Solutions
      </h1>
      <p className="text-xl mb-8 max-w-2xl">
        Transforming your ideas into stunning visual realities. We craft unique and impactful designs
        that elevate your brand and captivate your audience.
      </p>
      <div className="flex space-x-4">
        <Link href="/portfolio" className="bg-white text-indigo-600 hover:bg-gray-100 text-lg font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
          View Our Work
        </Link>
        <Link href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-indigo-600 text-lg font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
          Get in Touch
        </Link>
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl">
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
          <h2 className="text-2xl font-bold mb-3">Brand Identity</h2>
          <p>Crafting memorable logos and comprehensive brand guidelines that tell your story.</p>
        </div>
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
          <h2 className="text-2xl font-bold mb-3">Print Design</h2>
          <p>From brochures to posters, we create stunning print materials that stand out.</p>
        </div>
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
          <h2 className="text-2xl font-bold mb-3">Digital Graphics</h2>
          <p>Engaging visuals for your website, social media, and digital marketing campaigns.</p>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </div>
  );
}