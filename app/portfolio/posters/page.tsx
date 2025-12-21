import Image from 'next/image';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

const posters = [
  'poster 4.jpg',
  'poster 32.jpg',
  'poster 3.jpg',
  'poster 10.jpg',
  'poster 11.jpg',
  'poster 12.jpg',
  'poster 1.png',
  'poster 2.jpg',
  'poster 5.png',
  'poster 6.png',
  'poster 7.png',
  'poster 9.png',
  'poster 13.jpg',
  'poster 18.jpg',
  'poster 14.jpg',
  'poster 15.jpg',
  'poster 16.jpg',
  'poster 17.jpg',
  'poster 19.jpg',
  'poster 20.jpg',
  'poster 21.jpg',
  'poster 22.jpg',
  'poster 23.jpg',
  'poster 24.jpg',
  'poster 25.jpg',
  'poster 26.jpg',
  'poster 27.jpg',
  'poster 28.jpg',
  'poster 29.jpg',
  'poster 30.jpg',
  'poster 31.jpg',
  'poster 8.jpg',
  'poster 33.jpg',
  'poster 34.jpg',
  'poster 35.jpg',
  'poster 36.jpg',
  'poster 37.jpg',
  'poster 38.jpg',
  'poster 39.jpg',
  'poster 40.jpg',
  'poster 41.jpg',
  
];

export default function Posters() {
  return (
    <div><Navbar></Navbar>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Posters</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {posters.map((poster) => (
          <div key={poster} className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src={`/images/${poster}`}
              alt={poster}
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div><Footer></Footer>
    </div>
  );
}
