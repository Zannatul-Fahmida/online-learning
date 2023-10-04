import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import styles from "../../styles/Home.module.css";

export default function Navbar() {
  return (
    <div className={`${styles.darkTealBg} navbar text-white md:px-12`}>
      <div className="navbar-start w-full md:w-1/2">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className={`${styles.tealBg} menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52`}
          >
            <li>
              <p>Categories</p>
              <ul className="p-2">
                <li>
                  <Link href="/">Submenu 1</Link>
                </li>
                <li>
                  <Link href="/">Submenu 2</Link>
                </li>
                <li>
                  <Link href="/">Submenu 1</Link>
                </li>
                <li>
                  <Link href="/">Submenu 2</Link>
                </li>
                <li>
                  <Link href="/">Submenu 1</Link>
                </li>
                <li>
                  <Link href="/">Submenu 2</Link>
                </li>
                <li>
                  <Link href="/">Submenu 1</Link>
                </li>
                <li>
                  <Link href="/">Submenu 2</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                href="/"
                className="btn btn-ghost hover:bg-teal-900 hover:text-white"
              >
                Sign In
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className={`btn btn-ghost hover:bg-teal-900 hover:text-white`}
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
        <Link className="normal-case text-2xl" href="/">
          Online Learning
        </Link>
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li tabIndex={0}>
              <details>
                <summary className="hover:text-white">Categories</summary>
                <ul
                  style={{ backgroundColor: "#0f959cbb" }}
                  className="grid grid-cols-2 gap-4 w-96"
                >
                  <li>
                    <Link href="/">Link 1</Link>
                  </li>
                  <li>
                    <Link href="/">Link 2</Link>
                  </li>
                  <li>
                    <Link href="/">Link 2</Link>
                  </li>
                  <li>
                    <Link href="/">Link 2</Link>
                  </li>
                  <li>
                    <Link href="/">Link 2</Link>
                  </li>
                  <li>
                    <Link href="/">Link 2</Link>
                  </li>
                  <li>
                    <Link href="/">Link 2</Link>
                  </li>
                  <li>
                    <Link href="/">Link 2</Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
      <div className="relative">
          <input
            type="text"
            placeholder="Search your courses...."
            className={`${styles.tealBg} py-1 rounded-full pl-10 w-96`}
          />
          <BiSearch
            className="absolute left-3 top-2 text-gray-500"
            style={{ pointerEvents: "none" }}
          />
        </div>  
      </div>
      <div className="navbar-end hidden lg:flex">
        
        <Link href="/" className="btn btn-ghost">
          Sign In
        </Link>
        <Link
          href="/"
          className={`${styles.tealBg} btn text-white border-0 rounded-md hover:bg-teal-900 ml-3`}
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
