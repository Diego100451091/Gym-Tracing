import { useExerciseContext } from "../context/ExerciseContext";

export const Pagination = () => {
  const { currentPage, nextPage, previousPage, changePage, showedPages } =
    useExerciseContext();

  return (
    <ol className="flex justify-center gap-1 text-xs font-medium">
      <PaginationButton
        onClick={() => previousPage()}
      >
        <span className="sr-only">Prev Page</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
          />
        </svg>
      </PaginationButton>

      {showedPages.map((page) => (
        <PaginationButton
          key={page}
          highlighted={page == currentPage ? true : false}
          onClick={() => changePage(page)}
        >
          {page}
        </PaginationButton>
      ))}


      <PaginationButton onClick={() => nextPage()}>
        <span className="sr-only">Next Page</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          />
        </svg>
      </PaginationButton>
    </ol>
  );
};

const PaginationButton = ({ onClick, highlighted, children }) => {
  return (
    <li>
      <button
        className= {"inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100  rtl:rotate-180 " + (highlighted ? "bg-primary-light text-white" : "bg-white text-gray-900")}
        onClick={onClick}
      >
        {children}
      </button>
    </li>
  );
};
