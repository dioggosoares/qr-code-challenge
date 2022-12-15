import { GithubLogo, InstagramLogo, LinkedinLogo, TwitchLogo, TwitterLogo } from 'phosphor-react'
import qrcode from './assets/image-qr-code.png'

export function App() {
  return (
    <main className="flex flex-col h-screen max-w-[90rem] mx-auto">
      <section className="flex-1 pt-40 2xl:pt-64 md:pt-28">
        <div className="flex flex-col w-full gap-4 max-w-[320px] mx-auto rounded-lg p-8 bg-[#FBFFFB]">
          <img src={qrcode} alt="" className="w-64 h-64 rounded-lg" />
          <div className="flex flex-col gap-4 text-center">
            <strong className="text-xl text-[#7b879d]">Improve your front-end skills by building projects</strong>
            <p className="text-sm text-[#d6e2f0]">
              Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
            </p>
          </div>
        </div>
      </section>
      <footer className="flex flex-col gap-4 items-center justify-center py-10">
        <div className="text-center">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
          Coded by <a href="#">Diogo Soares</a>.
        </div>
        <div className="flex space-x-2">
          <a href="https://github.com/dioggosoares" target="_blank" className="block bg-gray-200 p-2 rounded-md border border-gray-600 hover:border-gray-400 transition-all duration-150 ease-linear">
            <GithubLogo size={24} weight="bold" className="text-gray-600" />
          </a>
          <a href="https://twitter.com/dioggosoares" target="_blank" className="block bg-gray-200 p-2 rounded-md border border-gray-600 hover:border-sky-400 transition-all duration-150 ease-linear">
            <TwitterLogo size={24} weight="bold" className="text-sky-400" />
          </a>
          <a href="https://www.linkedin.com/in/diogo-soares-993022180" target="_blank" className="block bg-gray-200 p-2 rounded-md border border-gray-600 hover:border-fuchsia-600 transition-all duration-150 ease-linear">
            <LinkedinLogo size={24} weight="bold" className="text-fuchsia-600" />
          </a>
        </div>
      </footer>
    </main>
  )
}