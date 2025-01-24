import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white  pb-8"  style={{ backgroundColor: "#EBFFF9" }}>
      <div className="container mx-auto">
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-lg font-semibold">jeeneetpulse</h2>
            <p className="mt-2 text-sm">
              Your go-to platform for competitive exam preparation.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-white">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Follow Us</h3>
            <div className="flex space-x-4 mt-2">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="/icons/facebook.svg" alt="Facebook" className="w-6 h-6" />
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src="/icons/twitter.svg" alt="Twitter" className="w-6 h-6" />
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="/icons/instagram.svg" alt="Instagram" className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div> */}

        <div className="mt-8 border-t border-gray-700 pt-6 text-center font-instSansN text-sm">
          <p>&copy; {new Date().getFullYear()} jeeneetpulse | All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
