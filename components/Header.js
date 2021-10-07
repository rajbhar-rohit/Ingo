import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {
    const router = useRouter();
    const searchInputRef = useRef(null);

    const search = e => {
        e.preventDefault();
         const q = searchInputRef.current.value;

        if (!q) return;

        router.push(`/search?q=${q}`);
    }

    return (
        <header className="sticky top-0 bg-white">
            <div className="flex w-full flex-grow p-4 items-center">
                <Image 
                    src="https://logos.textgiraffe.com/logos/logo-name/Ingo-designstyle-boots-m.png"
                    height={100}
                    width={100}
                    onClick={() => router.push("/")}
                    className= "flex cursor-pointer"
                    alt="Ingo Logo"
                />
                <form className="flex flex-grow px-6 py-3 ml-5 mr-2 border
                border-gray-200 rounded-full shadow-lg max-w-l items-center">
                    <input 
                        ref={searchInputRef} 
                        className="flex-grow w-full focus:outline-none" 
                        type="text"
                        defaultValue={router.query.q} 
                    />
                    <XIcon 
                        className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition
                        duration-100 transfrom hover:scale-125" 
                        onClick={() => (searchInputRef.current.value = "")}
                    />
                    <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex
                    text-blue-500 border-l-2 pl-4 border-gray-300" />
                    <SearchIcon className="h-6
                    text-blue-500 hidden sm:inline-flex" />
                    <button hidden type="submit" onClick=
                    {search}>
                        Search
                    </button>
                </form>
                <Avatar className="mr-auto" url="https://icon-library.com/images/person-icon-svg/person-icon-svg-2.jpg" />
            </div>

            {/* HeaderOptios */}
            <HeaderOptions />

        </header>
    )
}

export default Header
