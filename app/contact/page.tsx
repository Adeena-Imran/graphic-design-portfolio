import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div>
      <Navbar></Navbar>

     <div className="min-h-screen flex flex-col items-center justify-center py-10 bg-gradient-to-r from-purple-500 to-indigo-600">
      <h1 className="text-5xl font-bold mb-8 text-white">Contact Us</h1>
      <p className="text-lg text-white mb-10 max-w-2xl text-center">
        We would love to hear from you! Whether you have a project in mind, a question, or just want to say hello,
        feel free to reach out using the form below or through our contact details.
      </p>

      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-xl">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your Name"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <div className="mt-1">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your message..."
              ></textarea>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      <div className="mt-12 text-center text-white">
        <p>Or reach us directly:</p>
        <p className="mt-2">Email: <a href="amnawajiha18@gmail.com" className="text-white hover:underline">amnawajiha18@gmail.com</a></p>
        <p>Phone/Whatsapp: <a href="tel:+1234567890" className="text-white hover:underline">0303 5667709</a></p>
      </div>
    </div>
    <Footer></Footer>
    </div>
  );
}