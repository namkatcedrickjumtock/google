import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";


function PaginationButton() {
  const router = useRouter();
  const startIndex = Number(router.query.start);
  return (
    <div className=" container flex mx-auto w-8/12 mb-5
    ">
      {startIndex >= 10 && (
        <Link
          href={`/search?term=${router.query.term}&start=${startIndex - 10}`}
        >
          <div className="flex flex-grow space-x-2 text-blue-500 items-center cursor-pointer ">
            <ChevronLeftIcon className="h-5 text-gray-500" /> <p>Previous</p>
          </div>
        </Link>
      )}
      <Link
        href={`/search?term=${router.query.term}&start=${startIndex + 10}`}>
        <div className="flex flex-grow space-x-2  text-blue-500 items-center cursor-pointer ">
          <p>Next</p>
          <ChevronRightIcon className="h-4  text-gray-500" />
        </div>
      </Link>
    </div>
  );
}

export default PaginationButton;
