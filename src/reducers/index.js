import { ADD_ONE, APPLY_NUMBER, CHANGE_OPERATION, CLEAR_DISPLAY, MEMORY_OPERATION } from './../actions';

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

const memoryResult = (state, operation, target) => {
  // console.log(state, operation, target)
  // NOTE: we should never see this number
  const failNumber = 311;
  if (target === "memory"){
    switch(operation){
      case("M+"):
        return state.total;
      case("MR"):
        return state.memory;
      case("MC"):
        return 0;
    }
  }
  if (target === "total"){
    switch(operation){
      case("M+"):
        return state.total;
      case("MR"):
        return state.memory;
      case("MC"):
        return state.total;
    }
  }
  return failNumber;
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
          
      case(MEMORY_OPERATION):
        return({
          ...state,
          memory: memoryResult(state, action.payload, "memory"),
          total: memoryResult(state, action.payload, "total")
        })

      case(CLEAR_DISPLAY):
        return({
          ...state, 
          total: 0
        });

      default:
        return state;
  }
}

export default reducer;