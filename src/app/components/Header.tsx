import Image from "next/image";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { HeaderLogo, RightArrow } from '../../index';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            // Check if the page has been scrolled beyond a certain point
            const scrolled = window.scrollY > 0;
            setIsScrolled(scrolled);
        };

        // Add event listener for scroll
        window.addEventListener('scroll', handleScroll);

        // Remove event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
      <header className={`flex text-white justify-between items-center py-[25px] w-full z-50 bg-transparent ${isScrolled ? 'fixed top-0 left-0 bg-[#000c2c]' : 'absolute'}`}>
            <div className="container mx-auto flex justify-between items-center">
                <div className="logo lmd:w-auto md:w-[120px]">
                    <Image src={HeaderLogo} alt="Gradient-Tick" />
                </div>
                <nav className="hidden md:flex">
                    <ul className="flex">
                        <li><Link href="#" className="px-3 lmd:text-[18px] md:text-[13px] CircularStdBook-normal">Home</Link></li>
                        <li><Link href="#" className="px-3 lmd:text-[18px] md:text-[13px] CircularStdBook-normal">About</Link></li>
                        <li><Link href="#" className="px-3 lmd:text-[18px] md:text-[13px] CircularStdBook-normal">Services</Link></li>
                        <li><Link href="#" className="px-3 lmd:text-[18px] md:text-[13px] CircularStdBook-normal">Success Stories</Link></li>
                        <li><Link href="#" className="px-3 lmd:text-[18px] md:text-[13px] CircularStdBook-normal">Contact</Link></li>
                    </ul>
                </nav>
                <a href="#" className="hidden md:flex rounded-[50px] lmd:px-[30px] md:px-[20px] px-[20px] items-center border lmd:leading-[58px] md:leading-[50px]">Free Consultation <Image src={RightArrow} className="ms-2" alt="Right Arrow" /></a>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div className={`fixed h-svh inset-0 z-20 bg-black bg-opacity-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={closeMenu}></div>
            <div className={`fixed top-0 h-svh w-64 bg-white text-black shadow-lg transition-all ${isOpen ? 'right-0' : '-right-full'} transition-transform duration-300 ease-in-out z-30 md:hidden`}>
                <div className="flex justify-end p-4">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <nav className="flex flex-col space-y-4 px-4">
                    <Link href="#" className="px-3 text-[18px] CircularStdBook-normal" onClick={closeMenu}>Home</Link>
                    <Link href="#" className="px-3 text-[18px] CircularStdBook-normal" onClick={closeMenu}>About</Link>
                    <Link href="#" className="px-3 text-[18px] CircularStdBook-normal" onClick={closeMenu}>Services</Link>
                    <Link href="#" className="px-3 text-[18px] CircularStdBook-normal" onClick={closeMenu}>Success Stories</Link>
                    <Link href="#" className="px-3 text-[18px] CircularStdBook-normal" onClick={closeMenu}>Contact</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
