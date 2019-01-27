import { reducerWithInitialState } from "typescript-fsa-reducers";
import { actions } from "../actions/updateValueAction";

export interface IState {
    value: string;
}

const intialState: IState = {
    value: '',
};

export const reducer = reducerWithInitialState(intialState)
.case(actions.updateValue, (state, value) => {
    return Object.assign({}, state, {value});
});