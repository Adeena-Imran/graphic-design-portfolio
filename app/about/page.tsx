import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


export default function About() {
  
    return (
        <div><Navbar></Navbar>
    <div className="min-h-screen flex flex-col items-center justify-center py-10 bg-gradient-to-r from-purple-500 to-indigo-600">
      <h1 className="text-5xl text-white font-bold mb-6">About Us</h1>
      <p className="text-lg text-white max-w-2xl text-center">
        We are two sisters and creative designers driven by a shared vision for 
        timeless and expressive design. With 1.5 years of experience, we craft 
        refined visual identities and compelling design solutions that elevate
        brands and leave a lasting impression. Our work spans branding, digital 
        media, posters, and illustration, where artistry meets intention.
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 px-5 ">
        <div className="flex flex-col items-center p-6 bg-white rounded-lg transform hover:scale-105 shadow-md">
          <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
          <p className="text-gray-600 text-center">
            To deliver innovative and high-quality graphic design services that help our clients achieve their goals and stand out in their respective markets.
          </p>
        </div>
        <div className="flex flex-col items-center p-6 bg-white transform hover:scale-105 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-3">Our Vision</h2>
          <p className="text-gray-600 text-center">
            To be a leading graphic design agency recognized for creativity, professionalism, and client satisfaction.
          </p>
        </div>
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md transform hover:scale-105">
          <h2 className="text-2xl font-semibold mb-3">Our Values</h2>
          <p className="text-gray-600 text-center">
            Creativity, Integrity, Collaboration, Excellence, and Client Focus.
          </p>
        </div>
             
      </div>
 
    </div><Footer></Footer>
</div>
  );
}
