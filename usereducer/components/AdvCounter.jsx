import React, {useReducer} from "react"


const init={
    count1:0
}
const reducer=(state, action)=>
{
    switch(action.type)
    {
        case 'INC_ONE':
            return {...state, count1:state.count1+1};
        case 'DEC_ONE':
            return {...state, count1:state.count1-1};
        case 'RESET':
            return {...state, ...init};
        default:
            return state;

    }
}
const AdvCounter=()=>{
    const [state, dispatch]=useReducer(reducer,init)
    return(
        <div>
            <h2>'Counter ::${state.count1}'</h2>
            <button onClick={() => dispatch({ type: 'INC_ONE' })}>+</button>
            <button onClick={() => dispatch({ type: 'DEC_ONE' })}>-</button>
            <button onClick={() => dispatch({ type: 'RESET' })}>RESET</button>
        </div>
    )

    }

export default AdvCounter;
