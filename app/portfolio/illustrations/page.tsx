import Image from 'next/image';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';


const illustrations = [
  'bookstore cafe.jpg',
  'illustration 3.jpg',
  'ILLUSTRATION.jpg',
  'orange juice bar.jpg',
  'ILLUSTRATION 2.jpg',
  'coffee shop (1).jpg',
  'ice cream parlor.jpg',
  'pizza shop.jpg',
  'street food cart.jpg'
];

export default function Illustrations() {
  return (
    <div><Navbar></Navbar>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Illustrations</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {illustrations.map((illustration) => (
          <div key={illustration} className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src={`/images/${illustration}`}
              alt={illustration}
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