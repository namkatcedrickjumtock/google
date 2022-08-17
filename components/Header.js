import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import { XIcon, MicrophoneIcon, SearchIcon } from "@heroicons/react/solid";
import Avatar from "./Avatar";

const Header = () => {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const SearchFxn = (e) => {
    e.preventDefault();
    const term = searchRefinput.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  };
  return (
    <header className="sticky top-0">
      <div className="flex w-full p-6 items-center ">
        <Image
          src={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
          }
          height={50}
          width={120}
          onClick={() => router.push("/")}
          className="cursor-pointer"
        />

        <form className="flex border flex-grow px-6 py-3 ml-10 mr-5 border-gray-200 rounded-full shadow-lg max-w-3xl items-center ">
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow w-full focus:outline-none"
          />
          <XIcon
            onClick={() => (searchInputRef.current.value = "")}
            className="h-7 text-gray-500  sm:mr-3 cursor-pointer transistion duration-100 transform hover:scale-125"
          />
          <MicrophoneIcon className="h-6 mr-3idden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
          <SearchIcon className="h-6 px-2 hidden sm:inline-flex  text-blue-500" />
          <button hidden type="submit" onClick={() => SearchFxn}>
            search
          </button>
        </form>
        <Avatar
          className=" ml-10"
          url={
            "https://flyclipart.com/thumb2/user-icon-png-pnglogocom-133466.png"
          }
        />
      </div>
    </header>
  );
};

export default Header;
