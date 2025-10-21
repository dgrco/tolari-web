export default function LinuxDownloadInfo() {
  return (
    <>
      <title>Thank You | Tolari</title>
      <div className="relative h-screen">
        <div className="flex flex-col items-center px-6 mt-20 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Thanks for Downloading Tolari!
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mb-10">
            Tolari is currently in <strong>Beta</strong> and we can't wait to hear your valuable feedback! Feature Requests and bug encounters can be submitted on <a className="text-[var(--secondary)]" href="https://github.com/dgrco/TolariApp/issues">GitHub issues</a>.
          </p>
          <div className="text-md w-[95%] max-w-2xl mt-12 mb-4 border-4 border-[var(--primary)] rounded-lg py-6 px-8">
            <h2 className="text-2xl font-bold mb-6">
              Installation Instructions for Linux Users
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl text-left leading-relaxed">
              Tolari uses your system webview to minimize its bundle size (a common pitfall of developmental frameworks like Electron).
              <br />
              <br />
              It's also distributed as an <strong>AppImage</strong> file to maximize compatibility and ease of installation.
            </p>
            <div className="bg-gray-800 p-6 rounded-lg mt-8">
              <h1 className="text-3xl font-bold mb-4">Tolari Dependencies</h1>
              <p className="mb-6 text-left">
                To run Tolari, you will need the following dependencies: <span className="font-semibold">GTK3</span>, <span className="font-semibold">WebKitGTK</span>, and <span className="font-semibold">fuse2</span> (for AppImage execution).
              </p>


              <h2 className="text-2xl font-semibold mt-8 mb-2">Ubuntu / Debian / Linux Mint</h2>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded mb-6 text-sm overflow-x-auto">
                sudo apt-get update && sudo apt-get install libfuse2 libgtk-3-0 libwebkit2gtk-4.0-37 -y
              </pre>


              <h2 className="text-2xl font-semibold mt-8 mb-2">Arch / Manjaro</h2>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded mb-6 text-sm overflow-x-auto">
                sudo pacman -Syu --noconfirm && sudo pacman -S --needed gtk3 webkit2gtk fuse2
              </pre>


              <h2 className="text-2xl font-semibold mt-8 mb-2">Fedora / CentOS / RHEL</h2>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded mb-6 text-sm overflow-x-auto">
                sudo dnf install fuse-libs gtk3 webkit2gtk3 -y
              </pre>


              <h2 className="text-2xl font-semibold mt-8 mb-2">openSUSE</h2>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded mb-6 text-sm overflow-x-auto">
                sudo zypper refresh && sudo zypper install libfuse2 libgtk-3-0 libwebkit2gtk-4_0-37 -y
              </pre>
            </div>
            <div>
              <h2 className="text-3xl font-semibold mb-2 mt-8">Installation</h2>
              <span className="text-left text-lg">
                <ol type="1" className="list-decimal">
                  <li className="p-2">Extract the compressed archive with
                    <pre className="bg-[var(--backgroundSecondary)] p-4 rounded text-sm overflow-x-auto my-1">
                      tar -xzf Tolari.tar.gz
                    </pre>
                  </li>
                  <li className="p-2">Go into the new Tolari directory
                    <pre className="bg-[var(--backgroundSecondary)] p-4 rounded text-sm overflow-x-auto my-1">
                      cd Tolari
                    </pre>
                  </li>
                  <li className="p-2">
                    Now you have two choices:
                    <ol type="1" className="list-decimal">
                      <li className="my-2">
                        <strong>Install Tolari (Recommended)</strong>
                        <pre className="bg-[var(--backgroundSecondary)] p-4 rounded text-sm overflow-x-auto my-1">
                          chmod +x install.sh<br />
                          ./install.sh
                        </pre>
                        This sets up a desktop entry so your app launcher detects it.
                      </li>
                      <li className="mt-2">
                        <strong>Run the AppImage directly</strong>
                        <pre className="bg-[var(--backgroundSecondary)] p-4 rounded text-sm overflow-x-auto mt-1">
                          ./Tolari-x86_64.AppImage
                        </pre>
                      </li>
                    </ol>
                  </li>
                </ol>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
