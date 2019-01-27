import * as React from "react";
import { IState } from "../states/sampleState";
import { ActionCreatorsMapObject } from 'redux';

type Props = IState & ActionCreatorsMapObject;

export const Component: React.SFC<Props> = (props: Props) => {
    return (
        <div>
            <input
                type="text"
                placeholder="value"
                value={props.value}
                onChange={(e) => props.updateValue(e.target.value)}/><br/>
            {props.value}<br/>
        </div>
    );
};