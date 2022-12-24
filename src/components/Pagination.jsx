import PropTypes from "prop-types";

const Pagination = ({
  totalcount,
  pageSize,
  onPageChange,
  currentPage = 1,
}) => {
  let pages = [];
  for (let i = 0; i < Math.ceil(totalcount / pageSize); i++) pages.push(i + 1);
  if (pages.length === 1) return null;
  console.log("first", pages);

  const buttonClass = (pagenumber) => {
    const unSelected =
      "px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white";
    const selected =
      "z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white";
    if (currentPage === pagenumber) return selected;
    else return unSelected;
  };

  return (
    <nav aria-label="Pagination of page">
      <ul className="inline-flex items-center mt-8">
        <li onClick={() => onPageChange("prev")}>
          <button className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            <span>Previous</span>
          </button>
        </li>
        <li className="md:hidden mx-2 text-stone-100">
          Showing {currentPage} of {pages.length}
        </li>
        {pages.map((pagenumber) => (
          <li
            onClick={() => onPageChange(pagenumber)}
            className="hidden md:block"
            key={pagenumber}
          >
            <button id={pagenumber} className={buttonClass(pagenumber)}>
              {pagenumber}
            </button>
          </li>
        ))}

        <li onClick={() => onPageChange("next")}>
          <button className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            <span>Next</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
Pagination.propTypes = {
  totalcount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};
