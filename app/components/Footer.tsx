export default function Footer() {
  return (
    <footer className="bg-white p-4 text-gray-800 text-center shadow-inner mt-auto">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} GraphicDesign. All rights reserved.</p>
      </div>
    </footer>
  );
}
