import React from "react";
import "./index.scss";

function Paginatation({ totalItems, itemsPerPage, paginate, currentPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  function prevPage() {
    if (currentPage === 1) return;
    paginate(currentPage - 1);
  }

  function nextPage() {
    if (currentPage === pageNumbers.length) return;
    paginate(currentPage + 1);
  }

  return (
    <div className="Pagination">
      {currentPage !== 1 ? (
        <span className="Pagination__prev" onClick={prevPage}>
          {" "}
          ‹
        </span>
      ) : null}

      {pageNumbers.map((number) => (
        <span
          className={
            currentPage === number
              ? "Pagination__button Pagination__button--active"
              : "Pagination__button"
          }
          key={number}
          onClick={() => {
            paginate(number);
          }}
        >
          {number}
        </span>
      ))}
      {currentPage !== pageNumbers.length ? (
        <span className="Pagination__next" onClick={nextPage}>
          ›
        </span>
      ) : null}
    </div>
  );
}

export default Paginatation;
