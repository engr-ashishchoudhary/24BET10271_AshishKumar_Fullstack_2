function SearchBar({ searchTerm, dispatch }) {
  function handleChange(e) {
    dispatch({ type: "SET_SEARCH_TERM", payload: e.target.value });
  }

  return (
    <div className="search-bar">
      Search:{" "}
      <input type="text" value={searchTerm} onChange={handleChange} />
    </div>
  );
}

export default SearchBar;