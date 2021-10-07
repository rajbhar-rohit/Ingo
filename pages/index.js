import Head from 'next/head'
import { useEffect } from 'react'
import Image from 'next/image'
import Avatar from '../components/Avatar'
import { MicrophoneIcon, SearchIcon, ViewGridIcon } from "@heroicons/react/solid"
import Footer from '../components/Footer'
import { useRef } from "react";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag"

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);
  useEffect(() => {
    const handlerRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handlerRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handlerRouteChange)
    }
  },  [router.events])



  const search = e => {
    e.preventDefault();
    const q = searchInputRef.current.value;

    if (!q) return;

    router.push(`/search?q=${q}`)
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Ingo - The Search Engine</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      {/* Header */}
      <header className="flex w-full p-5 justify-between 
      text-sm text-gray-700">
        {/* Left */}
        <div className="flex space-x-4 items-center">
          <p className="link"></p>
          <p className="link"></p>
        </div>

        {/* Right */}
        <div className="flex space-x-4 items-center">
          <a className="link" href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">Gmail</a>
          <a className="link">Images</a>

          {/* Icon */}
          <ViewGridIcon className="h-10 w-10 p-2 
          rounded-full hover:bg-gray-100 cursor-pointer" />

          {/* Avatar */}
          <Avatar url={'https://icon-library.com/images/person-icon-svg/person-icon-svg-2.jpg'} />
        </div>
      </header>

      {/* Body */}
      <form className="flex flex-col items-center mt-10 flex-grow w-4/5 ">
        <Image 
          src="https://logos.textgiraffe.com/logos/logo-name/Ingo-designstyle-boots-m.png"
          height={150}
          width={220}
          alt="Ingo Logo"
          />
          <div className="flex w-full mt-5 hover:shadow-lg 
          focus-within:shadow-lg max-w-md rounded-full border 
          border-gray-200 px-4 py-3 items-center 
          sm:max-w-l lg:max-w-xl">
            <SearchIcon className="h-6 mr-3 text-gray-500" />
            <input 
              ref={searchInputRef} 
              type="text"
              placeholder="Search or type a URL"
              className="flex-grow focus:outline-none" 
            />
            <MicrophoneIcon className="h-6 cursor-pointer hidden" />
          </div>

          <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0
          sm:flex-row sm:space-x-4">
            <button className="btn" onClick={search}>Ingo Search</button>
          </div>
      </form>

      <Footer />
    </div>
  )
}
