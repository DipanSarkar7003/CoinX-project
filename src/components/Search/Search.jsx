import "./search.css";
const Search = () => {
  return (
    <div className="searchBox">
      {/* <label htmlFor="searchBar"> search for coins here </label> <br /> */}

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
