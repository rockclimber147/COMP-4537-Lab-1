export class Messages {
    static READER = "reader"
    static WRITER = "writer"
    static BACK = "back"
    static ADD = "add"
    static REMOVE = "remove"

    static UPDATED_AT = (time) => `updated at ${time}`;
    static STORED_AT = (time) => `stored at ${time}`;
}
