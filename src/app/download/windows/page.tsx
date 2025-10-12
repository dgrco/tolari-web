export default function WindowsDownloadInfo() {
  return (
    <>
      <title>Thank You | Tolari</title>
      <div className="relative">
        <div className="flex flex-col items-center px-6 mt-20 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Thanks for Downloading Tolari!
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mb-10">
            Tolari is currently in <strong>Beta</strong> and we can't wait to hear your valuable feedback! Feature Requests and bug encounters can be submitted on <a className="text-[var(--secondary)]" href="https://github.com/dgrco/TolariApp/issues">GitHub issues</a>.
          </p>
          <div className="text-md max-w-2xl mt-12 border-4 border-[var(--primary)] rounded-lg py-6 px-8">
            <h2 className="text-2xl font-bold mb-6">
              Important Information For Windows Users
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mb-10 text-left leading-relaxed">
              As an independent developer, the current annual cost for an official <strong>Code Signing Certificate</strong> is prohibitively expensive. This means that when you run the installer, Windows may display a <strong>"Windows protected your PC"</strong> or <strong>"Unknown Publisher"</strong> warning. This is expected behavior and <strong>does not</strong> mean the file is unsafe. You can safely click <strong>"More Info"</strong> and then <strong>"Run anyway"</strong> to proceed with the installation.
            </p>

            <p className="text-lg text-gray-400 max-w-2xl text-left border-l-4 border-[var(--secondary)] pl-4">
              <span className="block text-lg font-black">Your Security is Paramount</span>
              Tolari is a fully <strong>open-source</strong> project, and the entire source code is available on <a className="text-[var(--secondary)]" href="https://github.com/dgrco/TolariApp">GitHub</a> for public inspection. We always encourage users to verify the integrity of the downloaded file themselves by running the installer through a free service like <a className="text-[var(--secondary)]" href="https://www.virustotal.com/" target="_blank" rel="noopener noreferrer">VirusTotal</a>.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
