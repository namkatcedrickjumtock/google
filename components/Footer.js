import { GlobeIcon } from "@heroicons/react/solid";

const Footer = () => {
  return (
    <footer className="grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-sm text-gray-500 mt-4">
      <div className="px-8 py-5">
        <p>Cameroon</p>
      </div>
      <div>
        <div className="grid grid-cols-1">
          <div className="flex  space-x-2 px-8 items-center">
            <GlobeIcon className="h-5 mr-1 text-gray-700" />
            Carbonsince 2022
          </div>
        </div>
        <div className="flex items-center justify-center space-x-5 whitespace-nowrap md:justify-self-start">
          <p>Advertisment</p>
          <p>Buisness</p>
          <p>How Search Works</p>
        </div>
        <div className="flex  justify-center space-x-5 md:ml-auto">
          <p>Privacy</p>
          <p>Terms</p>
          <p>Settings</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
