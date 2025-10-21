"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Head from "next/head";

export default function Download() {
  const router = useRouter();
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadAndRedirect = (event: React.MouseEvent, releaseURL: string, redirectURL: string) => {
    event.preventDefault();

    setIsDownloading(true);

    const a = document.createElement('a');
    a.href = releaseURL;
    a.download = 'Tolari'
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    setTimeout(() => {
      router.push(redirectURL);
      setIsDownloading(false);
    }, 800)
  }

  return (
    <>
      <title>Download | Tolari</title>
      <div className="flex flex-col items-center mt-20 text-center px-6">
        <h1 className="text-4xl font-bold mb-6">Download Tolari</h1>
        <p className="text-gray-400 mb-12 max-w-2xl">
          Choose your platform and start boosting your productivity today.
        </p>

        <div className="flex flex-col md:flex-row gap-6 text-lg">
          <button
            disabled={isDownloading}
            className="bg-[var(--primary)] text-white px-8 py-4 rounded-xl font-medium hover:bg-[var(--primaryHovered)] transition cursor-pointer"
            onClick={(e) => handleDownloadAndRedirect(e, "https://github.com/dgrco/TolariApp/releases/latest/download/Tolari-amd64-installer.exe", '/download/windows')}
          >
            Windows
          </button>

          <button
            disabled={isDownloading}
            className="bg-[var(--primary)] text-white px-8 py-4 rounded-xl font-medium hover:bg-[var(--primaryHovered)] transition cursor-pointer"
            onClick={(e) => handleDownloadAndRedirect(e, "https://github.com/dgrco/TolariApp/releases/latest/download/Tolari.tar.gz", '/download/linux')}
          >
            Linux
          </button>
          <button
            disabled
            className="bg-[var(--backgroundSecondary)] text-white px-8 py-4 rounded-xl font-medium transition disabled:opacity-70"
            title="Coming Soon!"
          >
            macOS (coming soon)
          </button>
        </div>

        <p className="text-gray-500 mt-12">
          Or get it from{" "}
          <Link
            href="https://github.com/dgrco/TolariApp/releases/latest"
            className="underline"
          >
            GitHub Releases
          </Link>
        </p>
      </div>
    </>
  )
}
