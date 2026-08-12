const categoryList = ["All", "Technical", "Cultural", "Sports", "Workshop"];

function FilterButtons({ activeFilter, dispatch }) {
  function selectCategory(category) {
    if (category === "All") {
      dispatch({ type: "CLEAR_FILTER" });
    } else {
      dispatch({ type: "FILTER_EVENTS", payload: category });
    }
  }

  return (
    <div className="filter-buttons">
      {categoryList.map((category) => {
        const isActive = category === activeFilter;
        return (
          <button
            key={category}
            className={isActive ? "active" : ""}
            onClick={() => selectCategory(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default FilterButtons;