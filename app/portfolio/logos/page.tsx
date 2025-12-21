import Image from 'next/image';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

const logos = [
  'logo 1.png',
  'logo 2.png',
  'logo 3.png',
  'logo 4.png',
  'logo 5.png',
  'logo 6.png',
  'logo 7.png',
  'logo 8.png',
  'logo 9.png',
];

export default function Logos() {
  return (
    <div><Navbar></Navbar>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Logos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {logos.map((logo) => (
          <div key={logo} className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src={`/images/${logo}`}
              alt={logo}
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
