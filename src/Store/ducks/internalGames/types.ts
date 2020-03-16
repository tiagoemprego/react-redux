//
// action Types
//
export enum InternalTypes {
    LOAD_REQUEST = '@internal/LOAD_REQUEST',
    LOAD_SUCCESS = '@internal/LOAD_SUCCESS',
    LOAD_FAILURE = '@internal/LOAD_FAILURE'
}

//
// Data Types
//
export interface Internal {
    slug: string
    name: string
    description: string,
    released: string
    background: string
}

//
// State Types
//
export interface InternalState {
    readonly data: Internal,
    readonly loading: boolean,
    readonly error: boolean
}
