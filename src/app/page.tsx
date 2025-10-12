"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface DownloadData {
  osName: string;
  downloadURL: string;
  relativeRedirectPath: string; // e.g. /download/windows
}

export default function Home() {
  const router = useRouter();
  const [downloadData, setDownloadData] = useState<DownloadData | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const getOS = () => {
    const userAgent = window.navigator.userAgent;
    let os = "Unknown";

    if (userAgent.indexOf("Win") !== -1) os = "Windows";
    else if (userAgent.indexOf("Mac") !== -1) os = "macOS";
    else if (userAgent.indexOf("Linux") !== -1 && userAgent.indexOf("Android") === -1) os = "Linux";

    return os;
  }

  useEffect(() => {
    const os = getOS();
    switch (os) {
      case "Windows": {
        setDownloadData({
          osName: os,
          downloadURL: "https://github.com/dgrco/TolariApp/releases/latest/download/Tolari-amd64-installer.exe",
          relativeRedirectPath: '/download/windows',
        });
        break;
      }
      case "Linux": {
        setDownloadData({
          osName: os,
          downloadURL: "https://github.com/dgrco/TolariApp/releases/latest/download/Tolari.tar.gz",
          relativeRedirectPath: '/download/linux',
        });
        break;
      }
      case "macOS": {
        // TODO: change to actual data when ready
        setDownloadData(null);
        break;
      }
      default:
        setDownloadData(null);
    }
  }, [])

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
      <title>Tolari - Study Smarter</title>
      <div className="relative min-h-screen">
        <div className="flex flex-col items-center px-6 mt-20 text-center">
          {/* Hero */}
          <h1 className="text-5xl font-bold mb-6">
            Study Smarter. Stay Focused. Get More Done.
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mb-10">
            Tolari is your all-in-one study companion — combining flashcards,
            spaced-repetition review, task management, and a pomodoro timer.
            Everything you need to learn effectively, all in
            one place.
          </p>
          <div className="flex flex-col gap-4 items-center">
            <button
              disabled={downloadData === null || isDownloading}
              className={`text-white px-8 py-3 rounded-2xl text-lg font-medium transition cursor-pointer ${downloadData === null ?
                'bg-[var(--background-secondary)] opacity-85' :
                'bg-[var(--primary)] hover:bg-[var(--primary-hovered)]'
                }`}
              onClick={(e) => {
                if (downloadData) {
                  handleDownloadAndRedirect(e, downloadData.downloadURL, downloadData.relativeRedirectPath)
                }
              }}
            >
              Download {downloadData ? `for ${downloadData.osName}` : " Available on a Computer"}
            </button>
            <Link href="/download" className="text-gray-500 opacity-85 text-sm underline">
              See all download options
            </Link>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 gap-16 mt-16 max-w-5xl w-full">
            {/* Dashboard */}
            <div className="flex flex-col items-center">
              <div className="rounded-xl bg-gradient-to-b from-purple-500 to-cyan-500 p-2">
                <Image
                  src="/flashcard-home.png"
                  alt="Flashcards with SM2 review"
                  width={1484}
                  height={1049}
                  className="rounded-lg"
                />
              </div>
              <h2 className="text-2xl font-semibold mt-4">Your Study Hub</h2>
              <p className="text-gray-400 mt-2 max-w-md">
                Start with flashcards and easily jump to the planning board or the pomodoro timer.
                The dashboard gives you access to every tool you need, distraction-free.
              </p>
            </div>

            {/* Flashcards */}
            <div className="flex flex-col items-center">
              <div className="rounded-xl bg-gradient-to-b from-cyan-500 to-purple-500 p-2">
                <Image
                  src="/flashcard-review.png"
                  alt="Flashcards with SM2 review"
                  width={1484}
                  height={1049}
                  className="rounded-lg"
                />
              </div>
              <h2 className="text-2xl font-semibold mt-4">Flashcards That Stick</h2>
              <p className="text-gray-400 mt-2 max-w-md">
                Memorize faster with spaced repetition powered by the SM2 algorithm.
                Whether it’s vocab, formulas, or key concepts, Tolari helps you
                remember what matters most.
              </p>
            </div>

            {/* Kanban */}
            <div className="flex flex-col items-center">
              <div className="rounded-xl bg-gradient-to-b from-cyan-500 to-purple-500 p-2">
                <Image
                  src="/kanban.png"
                  alt="Flashcards with SM2 review"
                  width={1484}
                  height={1049}
                  className="rounded-lg"
                />
              </div>
              <h2 className="text-2xl font-semibold mt-4">Stay on Top of Tasks</h2>
              <p className="text-gray-400 mt-2 max-w-md">
                Plan assignments and break down big projects with a
                simple drag-and-drop planning board. Stay organized without the chaos.
              </p>
            </div>

            {/* Pomodoro Timer */}
            <div className="flex flex-col items-center">
              <div className="rounded-xl bg-gradient-to-b from-purple-500 to-cyan-500 p-2">
                <Image
                  src="/timer.png"
                  alt="Flashcards with SM2 review"
                  width={1484}
                  height={1049}
                  className="rounded-lg"
                />
              </div>
              <h2 className="text-2xl font-semibold mt-4">Focus Without Burnout</h2>
              <p className="text-gray-400 mt-2 max-w-md">
                Beat procrastination and avoid burnout with built-in pomodoro
                sessions. Study in focused bursts, recharge with breaks, and keep
                your energy steady.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-24 mb-8">
            <Link href="/download">
              <button className="bg-[var(--primary)] text-white px-10 py-3 rounded-2xl text-xl font-semibold hover:bg-[var(--primary-hovered)] transition cursor-pointer">
                Get Tolari Free
              </button>
            </Link>
            <p className="text-gray-500 mt-4">
              Available for Windows and Linux (and soon for macOS)
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
