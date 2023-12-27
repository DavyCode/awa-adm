import SearchBarIcon from "@/assets/icons/SearchBarIcon";

const SearchBar = () => {
  return (
    <div
      className="w-full sm:w-[314px] flex items-center py-[10px] px-4 gap-x-2 rounded-md bg-[#386138]
"
    >
      <SearchBarIcon />
      <input
        type="search"
        value=""
        className="w-full bg-transparent text-white outline-none"
        placeholder="Search"
        autoFocus
      />
    </div>
  );
};

export default SearchBar;
