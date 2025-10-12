"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar({ onHeightChange }: { onHeightChange: (h: number) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const height = scrolled ? 4 : 6; // compact vs normal height (in rem!)

  useEffect(() => {
    if (onHeightChange) onHeightChange(height);
  }, [height, onHeightChange])

  // notify parent
  useEffect(() => {
    if (onHeightChange) onHeightChange(height);
  }, [height, onHeightChange]);
  return (
    <nav
      className={`fixed bg-[#121212] border-b top-0 w-full z-50 transition-all ease-in-out duration-[350ms] ${scrolled ? "border-[#2A2A2A]" : "border-transparent"}`}
      style={{ height: `${height}rem` }}
    >
      <div className="max-w-6xl mx-auto flex justify-between px-4 h-full">
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

          <div className="flex ml-12 space-x-6 text-md font-medium">
            <Link
              href="/download"
              className={`hover:text-[var(--foreground)] hover:bg-[var(--background-secondary)] px-4 py-2 rounded-md transition-colors ${pathname === '/download' ?
                'bg-[var(--background-secondary)] text-[var(--foreground)]' :
                'text-[#a0a0a0]'
                }`}
            >
              Download
            </Link>
          </div>
        </div>

        <div className="flex items-center">
          <Link
            href="https://github.com/dgrco/TolariApp/"
            className="hover:bg-[var(--background-secondary)] px-4 py-2 rounded-md transition-colors font-semibold text-[#a0a0a0]"
          >
            GitHub
          </Link>
        </div>
      </div>
    </nav>
  )
}
