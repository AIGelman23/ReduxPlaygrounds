const logger =  param => store => next => action => {
  console.log("Logging", param);
  next(action); 
  // before we didn't dispatch our action to the 
  // next function which in this case is our reducer function
};

export default logger;

// We will log every action that is dispatched
// much like Redux Dev Tools

// Currying
// N => 1 
// Currying need a bunch of functions 
// and each function should have a single
// parameter 

// There is another way to write this function with 
// object destructuing syntax 
// for example: const logger = ({ getState, dispatch }) => next => action...
