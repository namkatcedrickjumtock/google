import Image from "next/image";

const Avatar = ({ url, className }) => {
  return (
    <Image
      className={`h-10 rounded-full cursor-pointer  transition duration-150 transform hover:scale-110 ${className}`}
      loading="lazy"
      src={url}
      height={50}
      width={60}
    />
  );
};

export default Avatar;
