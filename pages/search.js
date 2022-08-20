import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../components/Header";
import MockResponse from "../MockResponse";
import SearchResults from "../components/SearchResults";

const Search = ({ results }) => {
  console.log(results);
  const router = useRouter();
  return (
    <div>
      <Head>
        {/* <title>{router.query.term.toString()(- Google Search)}</title> */}
      </Head>
      <Header />
      {/* search results */}
      <SearchResults results={results} />
    </div>
  );
};

export default Search;

export const getServerSideProps = async (context) => {
  // customized quota from Google search APi
  const startIndex = 0;

  // console.log(typeof startIndex);
  const useDumyData = false;
  const data = useDumyData
    ? MockResponse
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}
    `
        // &start=${startIndex}
      )
        .then((response) => response.json())

        .catch((error) => console.error(`error from server:${error}`));
  return {
    props: {
      results: data,
    },
  };
};
