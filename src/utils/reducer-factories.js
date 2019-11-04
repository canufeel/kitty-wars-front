
export const addItemsReducerFactory = ({
  initialState,
  addItemsActionType = null,
  itemsSelector,
  addItemActionType = null,
  itemSelector,
  idPropNameGenerator = null,
  wrappedReducer = null,
  attachTimeTag = false,
}) => (
  state = initialState,
  action,
) => {
  // Adding an array of items per action
  if (addItemsActionType && action.type === addItemsActionType) {
    const actionData = itemsSelector(action);
    return {
      ...state,
      ...actionData.reduce((acc, item) => {
        const actualId = idPropNameGenerator(item);
        acc[actualId] = item;
        return acc;
      }, {}),
      ...(attachTimeTag && {
        timeTag: Date.now(),
      }),
    };
  }
  // Adding one item per action
  if (addItemActionType && action.type === addItemActionType) {
    const item = itemSelector(action);
    const actualId = idPropNameGenerator(item);
    return {
      ...state,
      [actualId]: item,
      ...(attachTimeTag && {
        timeTag: Date.now(),
      }),
    };
  }
  return wrappedReducer ? wrappedReducer(state, action) : state;
};