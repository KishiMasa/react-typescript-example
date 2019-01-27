import actionCreatorFactory from "typescript-fsa";

const actionCreator = actionCreatorFactory();

export const actions = {
    updateValue: actionCreator<string>('ACTION_UPDATE_VALUE')
};