//importing redux and react-redux stuff
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

//importing reducers
import { Divers } from "./diversReducer";
import { Tracks } from "./tracksReducer";
import { TracksPersons } from "./tracksPersonsReducer";


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            // ADD REDUCERS HERE:
            divers: Divers,
            tracks: Tracks,
            tracksPersons: TracksPersons,
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
};