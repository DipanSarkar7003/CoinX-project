import "./search.css";
const Search = () => {
  return (
    <div className="searchBox">
      <input
        type="text"
        id="searchBar"
        placeholder="search for coin or exchanges ..."
      />
      <button className="search-Btn">Get the result</button>
    </div>
  );
};

export default Search;
