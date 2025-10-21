"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import HamburgerMenu from "./HamburgerMenu";

export default function Navbar({ onHeightChange }: { onHeightChange: (h: number) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    }

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    }

    handleResize(); // initially set the width
    setIsMounted(true);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const height = scrolled ? 4 : 6; // compact vs normal height (in rem!)

  useEffect(() => {
    if (onHeightChange) onHeightChange(height);
  }, [height, onHeightChange])

  // notify parent
  useEffect(() => {
    if (onHeightChange) onHeightChange(height);
  }, [height, onHeightChange]);

  const isMobile = screenWidth < 764;

  return (
    <nav
      className={`fixed bg-[#121212] border-b top-0 w-full z-50 transition-all ease-in-out duration-[350ms] ${scrolled ? "border-[#2A2A2A]" : "border-transparent"}`}
      style={{ height: `${height}rem` }}
    >
      <div 
        className={`
          w-full md:max-w-6xl mx-auto flex justify-between px-4 h-full
          transition-opacity duration-700 ease-in-out
          ${isMounted ? 'opacity-100' : 'opacity-0'}
        `}>
        <div className="flex flex-1 items-center">
          <Link
            href="/"
            className="flex font-semibold gap-2 text-transparent bg-clip-text bg-gradient-to-b hover:from-[var(--primary)] hover:to-[var(--secondary)] from-[var(--foreground)] to-[var(--foreground)] transition-colors"
          >
            <Image
              src="/tolari-logo.svg"
              alt="TolariApp Logo"
              width={40}
              height={40}
            />
            <span className="flex items-center tracking-wide text-2xl">
              Tolari
            </span>
          </Link>

          {!isMobile && (
            <div className="flex ml-12 space-x-6 text-md font-medium">
              <Link
                href="/download"
                className={`hover:text-[var(--foreground)] hover:bg-[var(--backgroundSecondary)] px-4 py-2 rounded-md transition-colors ${pathname === '/download' ?
                  'bg-[var(--backgroundSecondary)] text-[var(--foreground)]' :
                  'text-[#a0a0a0]'
                  }`}
              >
                Download
              </Link>
            </div>
          )}
        </div>

        {!isMobile && (
          <div className="flex items-center">
            <Link
              href="https://github.com/dgrco/TolariApp/"
              className="hover:bg-[var(--backgroundSecondary)] px-4 py-2 rounded-md transition-colors font-semibold text-[#a0a0a0]"
            >
              GitHub
            </Link>
          </div>
        )}

        {isMobile && 
          <div className="flex items-center">
            <HamburgerMenu links={[
              {title: 'Download', url: '/download'},
              {title: 'GitHub', url: 'https://github.com/dgrco/TolariApp.git'},
            ]} />
          </div>
        }
      </div>
    </nav>
  )
}
