export const initialState = {
  events: [],
  filter: "All",
  searchTerm: "",
};

export function eventReducer(state, action) {
  if (action.type === "SET_EVENTS") {
    return { ...state, events: action.payload };
  }

  if (action.type === "ADD_FAVOURITE") {
    const updated = state.events.map((event) => {
      if (event.id === action.payload) {
        return { ...event, isFavourite: true };
      }
      return event;
    });
    return { ...state, events: updated };
  }

  if (action.type === "REMOVE_FAVOURITE") {
    const updated = state.events.map((event) => {
      if (event.id === action.payload) {
        return { ...event, isFavourite: false };
      }
      return event;
    });
    return { ...state, events: updated };
  }

  if (action.type === "FILTER_EVENTS") {
    return { ...state, filter: action.payload };
  }

  if (action.type === "CLEAR_FILTER") {
    return { ...state, filter: "All" };
  }

  if (action.type === "SET_SEARCH_TERM") {
    return { ...state, searchTerm: action.payload };
  }

  return state;
}