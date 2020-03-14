//
// action Types
//
export enum HomeTypes {
    LOAD_REQUEST = '@home/LOAD_REQUEST',
    LOAD_SUCCESS = '@home/LOAD_SUCCESS',
    LOAD_FAILURE = '@home/LOAD_FAILURE'
}

//
// Data Types
//
export interface Home {
    id: number
    slug: string
    name: string
    released: string
    background: string
    clip: string
}

//
// State Types
//
export interface HomeState {
    readonly data: Home[],
    readonly loading: boolean,
    readonly error: boolean
}
