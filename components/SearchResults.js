import PaginationButton from "./PaginationButton";

const SearchResults = ({ results }) => {
  return (
    <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-600 text-md mt-3 mb-3 ">
        About {results?.searchInformation?.totalResults} Results (
        {results?.searchInformation?.formattedSearchTime}) Seconds
      </p>

      {results?.items?.map((results) => (
        <div className="max-w-xl mb-8" key={results.link}>
          <div className="group">
            <a className="text-sm" href={results?.link}>
              {results?.formattedUrl}
            </a>
            <a href={results?.link}>
              <h2 className="truncate text-xl text-blue-800 font-medium group-hover:underline">
                {results.title}
              </h2>
            </a>
          </div>
          <p className="line-clamp-2 font-sans text-gray-700 text-sm">{results?.snippet}</p>
        </div>
      ))}

      {/* <PaginationButton /> */}
    </div>
  );
};

export default SearchResults;
