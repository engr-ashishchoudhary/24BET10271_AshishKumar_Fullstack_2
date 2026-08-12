import EventCard from "./EventCard";

function EventList({ events, filter, searchTerm, dispatch }) {
  function matchesFilter(event) {
    if (filter === "All") return true;
    return event.category === filter;
  }

  function matchesSearch(event) {
    const term = searchTerm.toLowerCase();
    if (term === "") return true;
    const inTitle = event.title.toLowerCase().includes(term);
    const inDescription = event.description.toLowerCase().includes(term);
    return inTitle || inDescription;
  }

  const visibleEvents = events.filter((event) => matchesFilter(event) && matchesSearch(event));

  function toggleFavourite(id, isFavourite) {
    if (isFavourite) {
      dispatch({ type: "REMOVE_FAVOURITE", payload: id });
    } else {
      dispatch({ type: "ADD_FAVOURITE", payload: id });
    }
  }

  if (visibleEvents.length === 0) {
    return <p>No events found.</p>;
  }

  return (
    <div className="event-list">
      {visibleEvents.map((event) => (
        <EventCard
          key={event.id}
          id={event.id}
          title={event.title}
          category={event.category}
          description={event.description}
          isFavourite={event.isFavourite}
          onToggleFavourite={toggleFavourite}
        />
      ))}
    </div>
  );
}

export default EventList;