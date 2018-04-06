const app = (state = {}, action) => {

  const nextState = Object.assign({}, state);

  switch (action.type) {
    case "UPDATE_TIME":
        nextState.time = action.time;
        return nextState
    default:
      return nextState;
  }
}

export default app
