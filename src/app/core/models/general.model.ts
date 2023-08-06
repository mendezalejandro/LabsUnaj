/**
 * Interface represents data operations
 */
export enum Operation{
    Add,
    Edit,
    Delete,
    Search
}

/**
 * Interface represents message types
 */
 export enum MessageTypes{
    Info='primary',
    Error='warn'
}


export enum MessageActions{
    Confirm='confirm',
    Cancel='cancel',
    Close='close'
}