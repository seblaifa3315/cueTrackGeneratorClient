import * as ActionTypes from "./ActionTypes";

export const TracksPersons = (
    state = {

        tracksPersons: [],
    },
    action
) => {
    switch (action.type) {
        case ActionTypes.TRACKS_PERSONS:
            return {
                ...state,
                tracksPersons: action.payload,
            };
        case ActionTypes.UPDATE_TRACKS_PERSONS:
            console.log(action.payload)
            const index = state.tracksPersons.findIndex(
                (pair) => pair.diver === action.payload.diver
            );
            const newArray = [...state.tracksPersons];
            newArray[index].track = action.payload.track
            return {
                ...state,
                tracksPersons : newArray
            };

        default:
            return state;
    }
};
