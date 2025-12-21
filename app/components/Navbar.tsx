import Link from 'next/link';


export default function Navbar() {
  return (
    <nav className="bg-white p-5 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-black text-2xl font-bold">
          Pixel Craft
        </Link>
        {/* <Image className='object-contain '
        height={50}
        width={70}
        src={"/images/Pixel_craft_1.png"}
        alt='Logo'/> */}
        <div className="space-x-4">
          <Link href="/" className="text-gray-900 hover:text-gray-500 px-3 py-2 rounded-md text-lg font-medium">
            Home
          </Link>
          <Link href="/about" className="text-gray-900 hover:text-gray-500 px-3 py-2 rounded-md text-lg font-medium">
            About
          </Link>
          <Link href="/portfolio" className="text-gray-900 hover:text-gray-500 px-3 py-2 rounded-md text-lg font-medium">
            Portfolio
          </Link>
          <Link href="/contact" className="text-gray-900 hover:text-gray-500 px-3 py-2 rounded-md text-lg font-medium">
            Contact
          </Link>
          <Link href="/certification" className="text-gray-900 hover:text-gray-500 px-3 py-2 rounded-md text-lg font-medium">
            Certifications
          </Link>
        </div>
      </div>
    </nav>
  );
}