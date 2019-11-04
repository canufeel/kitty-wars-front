
export const payloadActionCreator = type => data => ({
  type,
  data,
});

export const emptyActionCreator = type => () => ({
  type,
});
