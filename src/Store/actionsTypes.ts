import { action } from 'typesafe-actions';

export class ActionsTypes {

    type?:any;
    doRequest?:any;
    requestSuccess?:any;
    requestFailure?:any;

    constructor(type:any) {
        this.type = type;

        this.doRequest = (slug: string) => action(this.type.LOAD_REQUEST, { slug });
        this.requestSuccess = (data: any) => action(this.type.LOAD_SUCCESS, { data });
        this.requestFailure = () => action(this.type.LOAD_FAILURE);
    }
}