import { Nabla } from "next/font/google";
import Link from "next/link";
function Navbar(props) {
    return (
        <>
        <div className="w-full h-20 bg-emerald-800 sticky top-0">
          <div className="container mx-auto px-4 h-full">
            <div className="flex justify-between items-center h-full">
              
              <ul className="hidden md:flex gap-x-6 text-white">
                <li>
                  <Link href="/">
                    <p>About Us</p>
                  </Link>
                </li>
                <li>
                  <Link href="/login">
                    <p>Log In</p>
                  </Link>
                </li>
                <li>
                  <Link href="/signup">
                    <p>Sign Up</p>
                  </Link>
                </li>
              </ul>
              
            </div>
          </div>
        </div>
      </>
    )
}

export { Navbar }