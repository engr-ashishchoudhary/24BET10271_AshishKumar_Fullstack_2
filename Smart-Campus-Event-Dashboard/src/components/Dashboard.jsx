import { useEffect, useReducer } from "react";
import { eventReducer, initialState } from "../reducer/eventReducer";
import Header from "./Header";
import FavouriteCount from "./FavouriteCount";
import FilterButtons from "./FilterButtons";
import SearchBar from "./SearchBar";
import EventList from "./EventList";

const categoryOptions = ["Technical", "Cultural", "Sports", "Workshop"];

const campusTitles = [
    "Tech Talk: Intro to React",
    "Annual Cultural Fest",
    "Inter-College Football Match",
    "Resume Building Workshop",
    "AI & Machine Learning Seminar",
    "Dance Competition Finals",
    "Basketball Tournament",
    "Public Speaking Workshop",
    "Hackathon 2026",
    "Music Night",
    "Cricket Championship",
    "Career Guidance Session",
];

function Dashboard() {
    const [state, dispatch] = useReducer(eventReducer, initialState);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=12")
            .then((res) => res.json())
            .then((data) => {
                const events = data.map((item, index) => {
                    return {
                        id: item.id,
                        title: campusTitles[index % campusTitles.length],
                        category: categoryOptions[item.id % categoryOptions.length],
                        description: item.body.slice(0, 45) + "...",
                        isFavourite: false,
                    };
                });
                dispatch({ type: "SET_EVENTS", payload: events });
            });
    }, []);

    let favouriteCount = 0;
    for (const event of state.events) {
        if (event.isFavourite) favouriteCount++;
    }

    return (
        <div>
            <Header />
            <FavouriteCount count={favouriteCount} />
            <FilterButtons activeFilter={state.filter} dispatch={dispatch} />
            <SearchBar searchTerm={state.searchTerm} dispatch={dispatch} />
            <EventList
                events={state.events}
                filter={state.filter}
                searchTerm={state.searchTerm}
                dispatch={dispatch}
            />
        </div>
    );
}

export default Dashboard;