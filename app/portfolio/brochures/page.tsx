import Image from 'next/image';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

const brochures = [
  'Brochure 2.png',
  'Brochure 3.png',
  'brochure 5.png',
  'broucher 1.jpg',
  'broucher 4.png',

];

export default function Brochures() {
  return (
    <div><Navbar></Navbar>
    <div className="container mx-auto px-4 py-8 ">
      <h1 className="text-4xl font-bold mb-8 text-center">Brochures</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {brochures.map((brochure) => (
          <div key={brochure} className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src={`/images/${brochure}`}
              alt={brochure}
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
     </div> <Footer></Footer>
    </div>
  );
}