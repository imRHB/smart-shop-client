import { createAction } from "@reduxjs/toolkit";

export const apiCallBegan = createAction("api/callBegan");
export const apiCallSuccessed = createAction("api/callSuccessed");
export const apiCallFailed = createAction("api/callFailed");
