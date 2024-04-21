import Link from 'next/link';
import styles from './navbar.module.css';
import Image from 'next/image';

export const NavBar = ({ children }) => {
  return (
    // Main Container that will hold the Navbar and the children components
    <div className={styles.mainContainer}>
      {/* Navbar container that will hold the logo and the links */}
      <nav className={styles.navbarContainer}>
        {/* Logo Area */}
        <div className={styles.logoContainer}>
          <Image
            src='/javascript.png'
            alt='JavaScript Logo'
            width={80}
            height={80}
          />
        </div>

        {/* Links Area */}
        <div className={styles.navbarLinks}>
          <Link href='/'>Home</Link>
          <Link href='/variables'>Variables</Link>
          <Link href='/data-types'>Data Types</Link>
          <Link href='/operators'>Operators</Link>
          <Link href='/control-structures'>Control Structures</Link>
          <Link href='/conditionals'>Conditionals</Link>
          <Link href='/loops'>Loops</Link>
          <Link href='/functions'>Functions</Link>
          <Link href='/arrays'>Arrays</Link>
          <Link href='/objects'>Objects</Link>
          <Link href='/classes'>Classes</Link>
          <Link href='/es6'>ES6</Link>
          <Link href='/dom'>DOM</Link>
          <Link href='/events'>Events</Link>
          <Link href='/ajax'>AJAX</Link>
          <Link href='/promises'>Promises</Link>
          <Link href='/async-await'>Async-Await</Link>
        </div>
      </nav>
      {children}
    </div>
  );
};
