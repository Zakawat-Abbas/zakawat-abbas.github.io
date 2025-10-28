import React, { useEffect, useState } from 'react';
import { FiMail, FiGithub, FiPhoneCall, FiMenu, FiX, FiLinkedin } from 'react-icons/fi';
import { SiLinkedin, SiResearchgate } from 'react-icons/si';
// import ThemeToggle from './ThemeToggle';
import { navLinks } from '../constant';

const Navbar: React.FC<{ page: string }> = ({ page }) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-lg bg-white/70 dark:bg-gray-950/70 border-b border-gray-200/50 dark:border-gray-800/50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Social Links */}
        <div className="flex items-center gap-4 text-lg text-gray-600 dark:text-gray-400">
          <a
            href="mailto:zakawatabbas123@gmail.com"
            aria-label="Email"
            className="hover:text-blue-900 transition-colors"
          >
            <FiMail />
          </a>
          <a
            href="tel:+923423235676"
            aria-label="Phone"
            className="hover:text-blue-900 transition-colors"
          >
            <FiPhoneCall />
          </a>
          <a
            href="https://github.com/Zakawat-Abbas"
            target="_blank"
            aria-label="GitHub"
            className="hover:text-blue-900 transition-colors"
          >
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/zakawat-abbas/"
            target="_blank"
            aria-label="LinkedIn"
            className="hover:text-blue-900 transition-colors"
          >
            <FiLinkedin />
          </a>
          <a
            href="https://www.researchgate.net/profile/Zakawat-Abbas-2"
            target="_blank"
            aria-label="ResearchGate"
            className="hover:text-blue-900 transition-colors"
          >
            <SiResearchgate />
          </a>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700 dark:text-gray-300">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={`transition-colors hover:text-blue-900 ${page.replace(/\/$/, '').trim() === href.replace(/\/$/, '').trim()
                  ? 'text-blue-900 font-semibold'
                  : ''
                  }`}
              >
                {label},{page.trim()},{href.trim()}
              </a>
            </li>
            // console.log(page.trim(), href.trim())
          ))}
          {/* <li className="pl-2">
            <ThemeToggle />
          </li> */}
        </ul>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 md:hidden">
          {/* <ThemeToggle /> */}
          <button
            onClick={() => setOpen(!open)}
            className="text-2xl text-gray-700 dark:text-gray-300"
            aria-label="Menu"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
      >
        <ul className="flex flex-col gap-1 px-6 pb-6 pt-2 text-gray-700 dark:text-gray-300">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={`block w-full py-2 px-3 rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 ${page === href
                  ? 'text-indigo-600 dark:text-indigo-400 bg-gray-50 dark:bg-gray-900'
                  : ''
                  }`}
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
