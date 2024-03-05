import Navbar from "../components/Navbar";
import BoardsList from "../components/BoardsSearch";
const SearchBar = () => (
  <>
    <Navbar />
    <div className="max-w-[700px] mx-auto">
      <div className="sticky top-[70px] bg-white">
        <div className="flex items-center max-w-[700px] my-3 mx-2 sm:mx-auto md:py-2 bg-black rounded border-none overflow-hidden">
          <input
            className="w-full text-white py-2 px-4 outline-none bg-black"
            type="text"
            placeholder="Search..."
          />
          <div className="p-2">
            <button className="text-white bg-black px-2 flex items-center focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1112 0A6 6 0 012 8z"
                  clipRule="evenodd"
                />
                <path d="M12.293 12.293a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414z" />
              </svg>
            </button>
          </div>
        </div>
        <h1 className="text-2xl font-bold mx-2 pb-2 px-1 md:mx-0">Available boards</h1>
      </div>
      <BoardsList />
    </div>
  </>
);

export default SearchBar;
