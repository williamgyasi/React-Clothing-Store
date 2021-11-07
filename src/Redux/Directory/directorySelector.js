import { createSelector } from "reselect";

const selectDirectory=state=>state.DIRECTORY_REDUCER;

export const selectSections=createSelector(
    [selectDirectory],
    (directory)=>directory.sections
)