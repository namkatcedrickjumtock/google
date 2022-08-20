import HeaderOption from "./HeaderOption";
import {
  SearchIcon,
  MapIcon,
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,
  DotsVerticalIcon,
} from "@heroicons/react/outline";

function HeaderOptions() {
  return (
    <div className="flex w-full justify-evenly items-center text-gray-700 text-sm md:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b">
      {/* left section */}
      <div className="flex space-x-6">
        <HeaderOption Icon={SearchIcon} title={"All"} selected />
        <HeaderOption Icon={PhotographIcon} title={"Images"} />
        <HeaderOption Icon={PlayIcon} title={"Videos"} />
        <HeaderOption Icon={NewspaperIcon} title={"News"} />
        <HeaderOption Icon={MapIcon} title={"Maps"} />
        <HeaderOption Icon={DotsVerticalIcon} title={"More"} />
      </div>

      {/* right section */}
      <div className="flex space-x-4 text-sm">
        <div className="links">Settings</div>
        <div className="links">Tools</div>
      </div>
    </div>
  );
}

export default HeaderOptions;
