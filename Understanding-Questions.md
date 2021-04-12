# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* - The pressing of the 1 button action is processed. A new state is created. The Reducer sends this to the Dispatcher.
* - The component is re-rendered, with a new state loaded in.
* - User triggers a change to the state. Payload (our new state, with the currentNumber + 1) is sent to the Action Creator.
* - An action is created based on input. Action Creator sends this to the Dispatcher.
* - Current state and Action Object are passed by the Dispatcher to the Reducer.
...

* TotalDisplay shows the total plus 1.
