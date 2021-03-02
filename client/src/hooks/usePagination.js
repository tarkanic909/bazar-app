import { useState } from "react";

function usePagination(items, itemsPerPage) {
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  let currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  function paginate(number) {
    setCurrentPage(number);
  }

  return { currentItems, currentPage, paginate };
}

export default usePagination;
