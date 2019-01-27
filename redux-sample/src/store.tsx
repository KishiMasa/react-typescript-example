import { combineReducers, createStore } from "redux";
import { IState,reducer } from "./states/sampleState";

export type AppState = {
    state: IState
};

const store = createStore(
    combineReducers<AppState>({
        state: reducer
    })
);

export default store;