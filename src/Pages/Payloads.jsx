import { useState, useCallback, useEffect } from "react";
import { fakePayload as payload } from "../fakedata";
import PayloadCards from "../components/PayloadCards";
import useDebounce from "../customHooks/useDebounce";
import Pagination from "../components/Pagination";

const Payloads = () => {
  // eslint-disable-next-line
  const [payloads, setPayloads] = useState([...payload]);
  const [filtered, setFiltered] = useState([...payload]);
  const [currentItems, setCurrentItems] = useState([...payload]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;

  //Searching the posts
  const handleSearch = (searchTerm) => {
    if (searchTerm === "") setFiltered(payloads);
    else {
      const array = payloads.filter((payload) =>
        payload.payload_id.toLowerCase().includes(searchTerm.toLowerCase())
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
      <section className="bg-gray-800  ">
        <div className="flex flex-col items-center justify-center bg-[rgba(0, 0, 0, 0.1)] py-10 lg:pt-10">
          <h1 className="font-bold text-white text-3xl md:text-4xl lg:text-6xl capitalize text-center mb-5">
            Payloads
          </h1>
          <input
            type="text"
            placeholder="Search"
            className="p-2 rounded-md outline-none w-2/3 sm:w-1/2 md:w-1/3 "
            onChange={(e) => debouncedSearch(e.target.value)}
          />
          <Pagination
            totalcount={filtered.length}
            pageSize={pageSize}
            onPageChange={handlePageChange}
            currentPage={currentPage}
          />
          <div className="px-5 lg:max-w-4xl lg:mx-auto xl:max-w-6xl 2xl:px-0 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-10 ">
            {currentItems.map((payload) => (
              <PayloadCards payload={payload} key={payload.payload_id} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Payloads;
