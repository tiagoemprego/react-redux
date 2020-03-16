import { action } from "typesafe-actions";
import { HomeTypes, Home } from "./types";

export const loadRequest =() => action(HomeTypes.LOAD_REQUEST);
export const loadSuccess = (data: { background: any; name: any; id: any; slug: any | string; released: any | string }) => action(HomeTypes.LOAD_SUCCESS, {data});
export const loadFailure =() => action(HomeTypes.LOAD_FAILURE);
