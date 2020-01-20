import styled from 'styled-components';
import { conditional, prop } from '@juan-utils/functions';

const PRIMARY = "primary";
const SECONDARY = "secondary";
const NEGATIVE = "negative";

const pickIdleColor = (Colors) => (props) => {
    return conditional([
        [ prop(PRIMARY), () => Colors.primary ],
        [ prop(SECONDARY), () => Colors.secondary ],
        [ prop(NEGATIVE),  () => Colors.negative ],
        [ True , () => Colors.default || Colors.primary ]
    ])(props)
}

const pickFocusColor = (Colors) => (props) => {
    return conditional([
        [ prop(PRIMARY), () => Colors.focus.primary ],
        [ prop(SECONDARY), () => Colors.focus.secondary ],
        [ prop(NEGATIVE),  () => Colors.focus.negative ],
        [ True , () => Colors.focus.default || Colors.focus.primary ]
    ])(props)
}

const Levels = {
    0: "none",
    1: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    2: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
    3: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
    4: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
    5: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)"
}

const Depth = (depth) => Levels[depth]

const Material = (Colors=DefaultColors) = {
    Button: styled.button`
        font-family: Roboto;
        font-size: 1.1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 13px;
        margin: 24px;
        border-radius: 7px;
        border: none;
        outline: none;
        background-color: ${pickIdleColor(Colors)};
        color: white;
        box-sizing: border-box;
        width: ${ props => props.fluid ? '100%' : 'initial'} ;
        box-shadow: ${Depth(1)};
        cursor: pointer;
        &:hover {
            background: ${pickFocusColor(Colors)};
            box-shadow: ${Depth(0)}
        }
    `,
    Label: styled.label`
        font-family: Roboto;
        margin: 15px;
    `
}

export default Material;