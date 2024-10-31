import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/public/logo.svg';

export default function Navbar() {
  return (
    <header className='w-full flex justify-between '>
      <Image
      src={Logo}
      alt='Logo'
      />
      <nav className='hidden lg:flex gap-5'>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}

