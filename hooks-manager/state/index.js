import initialState from './initial-state';

function stateReducer(state, action) {
  console.log(`Updating ${action.type} with value `, action.value);
  return {
    ...state,
    [action.type]: action.value,
  };
}

export function initState(
  useReducer,
  useCallback,
) {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  const setState = useCallback(
    (stateField, value) => {
      dispatch({
        type: stateField,
        value,
      });
    },
    [dispatch],
  );

  return [state, setState];
}
