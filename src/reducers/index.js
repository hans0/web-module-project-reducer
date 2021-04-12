import { 
    ADD_ONE, 
    APPLY_NUMBER, 
    CHANGE_OPERATION, 
    CLEAR_DISPLAY,
    MEMORY } 
from './../actions';

export const initialState = {
    total: 0,
    operation: "+",
    memory: 0
}

const calculateResult = (num1, num2, operation) => {
    switch(operation) {
        case("+"):
            return num1 + num2;
        case("*"):
            return num1 * num2;
        case("-"):
            return num1 - num2;
    }
}

const memory = (num, operation) => {
    switch(operation) {
        case('+'):
            return num;
        case('R'):
            return num;
        case('C'):
            return 0;
    }
}

const reducer = (state, action) => {
    switch(action.type) {
        case(ADD_ONE):
            return({
                ...state,
                total: state.total + 1
            });

        case(APPLY_NUMBER):
            return ({ 
                ...state, 
                total: calculateResult(state.total, action.payload, state.operation)
            });
        
        case(CHANGE_OPERATION):
            return ({
                ...state,
                operation: action.payload
            });
            
        case(CLEAR_DISPLAY):
            return ({
                ...state,
                total: 0
                // memory: memory(state.total, action.payload)
            })

        case(MEMORY):
            return ({
                ...state,
                total: memory(state.memory, action.payload),
                memory: memory(state.total, action.payload)
            })
        default:
            return state;
    }
}

export default reducer;