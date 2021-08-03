import * as ActionTypes from "./ActionTypes";

export const Divers = (
    state = {
        isLoading: true,
        errMess: null,
        divers: [],
    },
    action
) => {
    switch (action.type) {
        case ActionTypes.ADD_DIVERS:
            return {
                ...state,
                isLoading: false,
                errMess: null,
                divers: action.payload,
            };
        case ActionTypes.DIVERS_LOADING:
            return { ...state, isLoading: true, errMess: null, divers: [] };
        case ActionTypes.DIVERS_FAILED:
            return { ...state, isLoading: false, errMess: action.payload };
        case ActionTypes.PRESENCE_DIVERS:
            const index = state.divers.findIndex(
                (diver) => diver.surname === action.payload.surname
            );
            const newArray = [...state.divers];

            newArray[index].night = !newArray[index].night;

            return {
                ...state,
                isLoading: false,
                errMess: null,
                divers: newArray,
            };
            case ActionTypes.UPDATE_DIVERS_STAT:
                const newObject = action.payload;
                const i = state.divers.findIndex(
                    (diver) => diver.surname === action.payload.surname
                );
                const newArr = [...state.divers];
                newArr.splice(i, 1, newObject);
                return { ...state, errMess: null, divers: newArr };
        default:
            return state;
    }
};
