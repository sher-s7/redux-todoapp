export const SHOW_ALL = "SHOW_ALL";
export const SHOW_ACTIVE = "SHOW_ACTIVE";
export const SHOW_COMPLETE = "SHOW_COMPLETE";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

export const setVisibilityFilter = (filter) => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter,
  };
};
