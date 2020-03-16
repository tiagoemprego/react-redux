// @ts-ignore
import {ActionsTypes} from "../../actionsTypes";
import { InternalTypes } from "./types";

const actions = new ActionsTypes(InternalTypes);

export const doRequest = actions.doRequest;
export const requestSuccess = actions.requestSuccess;
export const requestFailure = actions.requestFailure;
