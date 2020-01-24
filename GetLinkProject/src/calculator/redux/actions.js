const ACTION_HANDLE_INPUT = '[CALCULATOR] ACTION_HANDLE_INPUT';
const handleInput = payload => {
  return {
    type: ACTION_HANDLE_INPUT,
    payload,
  };
};

export { ACTION_HANDLE_INPUT, handleInput };
