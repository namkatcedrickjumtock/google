import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import { XIcon, MicrophoneIcon, SearchIcon } from "@heroicons/react/outline";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

const Header = () => {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  };
  return (
    <header className="stickytop-0 bg-white justify-between">
      <div className="flex w-full p-6 items-center">
        <Image
          src={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
          }
          height={50}
          width={120}
          onClick={() => router.push("/")}
          className="cursor-pointer"
        />

        <form className="flex border  flex-grow px-6 py-3 ml-10 mr-5 border-gray-200 rounded-full shadow-lg max-w-3xl items-center ">
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow w-full focus:outline-none"
          />
          <XIcon
            onClick={() => (searchInputRef.current.value = "")}
            className="h-7 text-gray-500  sm:mr-3 cursor-pointer transistion duration-100 transform hover:scale-125"
          />
          <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
          <SearchIcon className="h-6 px-2 hidden sm:inline-flex  text-blue-500" />
          <button hidden type="submit" onClick={search}>
            search
          </button>
        </form>
        <Avatar
          url={
            "https://media-exp1.licdn.com/dms/image/C4D03AQHDJ4-kDSrfEg/profile-displayphoto-shrink_800_800/0/1620789468883?e=1666224000&v=beta&t=9d7u6SvGNArrbV8eeLBb2Jn7WaADZlhgzvbzK-9eZv4"
          }
          className={"ml-auto"}
        />
      </div>

      {/* header options */}
      <HeaderOptions />
    </header>
  );
};

export default Header;
