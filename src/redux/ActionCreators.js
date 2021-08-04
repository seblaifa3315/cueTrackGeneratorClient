import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";

//DIVERS
export const fetchDivers = () => (dispatch) => {
    dispatch(diversLoading());

    return fetch(baseUrl + "divers")
        .then(
            (response) => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(
                        `Error ${response.status}: ${response.statusText}`
                    );
                    error.response = response;
                    throw error;
                }
            },
            (error) => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then((response) => response.json())
        .then((divers) => dispatch(addDivers(divers)))
        .catch((error) => dispatch(diversFailed(error.message)));
};

export const diversLoading = () => ({
    type: ActionTypes.DIVERS_LOADING,
});

export const diversFailed = (errMess) => ({
    type: ActionTypes.DIVERS_FAILED,
    payload: errMess,
});

export const addDivers = (divers) => ({
    type: ActionTypes.ADD_DIVERS,
    payload: divers,
});

export const presenceDivers = (diver) => ({
    type: ActionTypes.PRESENCE_DIVERS,
    payload: diver,
});

export const canDiveDivers = (diver) => ({
    type: ActionTypes.CAN_DIVE_DIVERS,
    payload: diver,
});

export const changeDiversStat = (newData) => ({
    type: ActionTypes.UPDATE_DIVERS_STAT,
    payload: newData
})

export const updateDiversStat = (newData) => (dispatch) => {
    const newObject = newData;
    console.log(newObject)
    return fetch(baseUrl + `divers`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newObject)
    })
    .then(
        (response) => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(
                    `Error ${response.status}: ${response.statusText}`
                );
                error.response = response;
                throw error;
            }
        },
        (error) => {
            throw error;
        }
    )
    .then((response) => response.json())
    .then(dispatch(changeDiversStat(newObject)))
    .catch((error) => {
        console.log("update divers stat", error.message);
        alert(
            "the divers statistics could not be updated \nError: " +
                error.message
        );
    });
}


//TRACKS
export const fetchTracks = () => (dispatch) => {
    dispatch(tracksLoading());

    return fetch(baseUrl + "tracks")
        .then(
            (response) => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(
                        `Error ${response.status}: ${response.statusText}`
                    );
                    error.response = response;
                    throw error;
                }
            },
            (error) => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then((response) => response.json())
        .then((tracks) => dispatch(addTracks(tracks)))
        .catch((error) => dispatch(tracksFailed(error.message)));
};

export const tracksLoading = () => ({
    type: ActionTypes.TRACKS_LOADING,
});

export const tracksFailed = (errMess) => ({
    type: ActionTypes.TRACKS_FAILED,
    payload: errMess,
});

export const addTracks = (tracks) => ({
    type: ActionTypes.ADD_TRACKS,
    payload: tracks
});

//TRACKS PERSONS

export const whoDoesWhat = (tracksPersons) => ({
    type: ActionTypes.TRACKS_PERSONS,
    payload: tracksPersons
})

export const updateTracksPersonsArrayFromStore = (diver, newValue) => ({
    type: ActionTypes.UPDATE_TRACKS_PERSONS,
    payload: {diver: diver, track: newValue}
})