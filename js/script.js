class Entry {
    constructor(content) {
        this.content = content
    }
}

class Button {
    constructor() {
        this.buttonElement = document.createElement("button");

    }

    onClick() {

    }
}

class AddButton extends Button {

}

class RemoveButton extends Button {

}

class StorageAccess {
    static set(item) {
        localStorage.setItem(item)
    }

    static get(key) {
        return localStorage.getItem(key)
    }
}
