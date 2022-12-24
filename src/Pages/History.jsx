import { fakeHistory } from "./../fakeHistory";
import { useCallback, useEffect, useState } from "react";
import useDebounce from "./../customHooks/useDebounce";
import Pagination from "./../components/Pagination";

const History = () => {
  const [history, setHistory] = useState([...fakeHistory]);
  const [filtered, setFiltered] = useState([...fakeHistory]);
  const [currentItems, setCurrentItems] = useState([...fakeHistory]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  //Searching the posts
  const handleSearch = (searchTerm) => {
    if (searchTerm === "") setFiltered(history);
    else {
      const array = history.filter((history) =>
        history.title.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setFiltered(array);
    }
    setCurrentPage(1);
  };
  //handle the pageChange
  const handlePageChange = (item) => {
    let totalPages = Math.ceil(filtered.length / pageSize);
    if (item === "prev" && currentPage !== 1)
      setCurrentPage(() => currentPage - 1);
    else if (item === "next" && currentPage !== totalPages)
      setCurrentPage(() => currentPage + 1);
    else if (typeof item === "number") setCurrentPage(item);
  };

  // eslint-disable-next-line
  const debouncedSearch = useCallback(useDebounce(handleSearch, 500), [
    useDebounce,
  ]);

  useEffect(() => {
    const indexOfLastPost = currentPage * pageSize;
    const indexOfFirstPost = indexOfLastPost - pageSize;
    const currentPosts = filtered.slice(indexOfFirstPost, indexOfLastPost);
    setCurrentItems(currentPosts);
  }, [currentPage, filtered]);

  return (
    <>
      <section className="bg-gray-800 ">
        <div className="flex flex-col  bg-[rgba(0, 0, 0, 0.1)] py-10 lg:pt-10">
          <h1 className="font-bold text-white text-3xl md:text-4xl lg:text-6xl capitalize text-center mb-5">
            Space X Launch History
          </h1>
          <div className="flex flex-col md:flex-row justify-between items-center mx-auto md:mx-20">
            <input
              type="text"
              placeholder="Search"
              className="h-fit mt-8 p-2 rounded-md outline-none w-2/3 sm:w-1/2 md:w-1/4 "
              onChange={(e) => debouncedSearch(e.target.value)}
            />
            <Pagination
              totalcount={filtered.length}
              pageSize={pageSize}
              onPageChange={handlePageChange}
              currentPage={currentPage}
            />
          </div>

          <div className="md:px-20 px-10  flex flex-col gap-4 mt-5">
            {currentItems.map((history) => (
              <article className="bg-neutral-900 p-5 ">
                <div className="flex flex-col items-center">
                  <h2 className="text-white font-bold text-xl my-1">
                    {history.title}
                  </h2>
                  <span className="text-gray-400">
                    <time dateTime={history.event_date_utc}>
                      {new Date(history.event_date_utc).toDateString()}
                    </time>
                  </span>
                </div>
                <span className="text-sm text-stone-400">
                  # Flight Number : {history.flight_number || "-"}
                </span>
                <p className="text-stone-200 my-6"> {history.details}</p>
                <span className="flex gap-4 text-stone-200">
                  <button>Read more : </button>
                  {Object.keys(history.links).map(
                    (key) =>
                      history.links[key] && (
                        <a
                          key={key}
                          className="underline first-letter:uppercase"
                          href={history.links[key]}
                          rel="noreferrer"
                          target="_blank"
                        >
                          {key}
                        </a>
                      )
                  )}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default History;
