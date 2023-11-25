export default function SearchBar() {
  return (
    <form className="col-span-11 pr-4">
      <form className="flex items-center ">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <input
            type="text"
            id="search"
            className="border text-sm rounded-l block w-full ps-10 p-2.5"
            placeholder="Buscar"
          />
        </div>
        <button
          type="submit"
          className="p-2.5 ms-2 text-sm font-medium text-white bg-red-700 rounded-lg border"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </form>
    </form>
  );
}
