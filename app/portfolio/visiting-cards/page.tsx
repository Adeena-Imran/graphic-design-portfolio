import Image from 'next/image';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';


const visitingCards = [
  'visting card 1.jpg',
  'visting card 2.jpg',
  'visting card 3.jpg',
  'visting card 4.jpg',
  'visting card 5.jpg',
];

export default function VisitingCards() {
  return (
    <div><Navbar></Navbar>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Visiting Cards</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {visitingCards.map((card) => (
          <div key={card} className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src={`/images/${card}`}
              alt={card}
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