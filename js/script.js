class Entry {
    constructor(content) {
        this.content = content
    }
}

class Button {
    constructor(buttontext) {
        this.buttonElement = document.createElement("button");
        this.buttonElement.innerHTML = buttontext
    }

    onClick() {

    }
}

class AddButton extends Button {
    constructor(buttontext) {
        super(buttontext)
        this.buttonElement.classList.add(CSS.ADD_BUTTON)
    }

}

class RemoveButton extends Button {
    constructor(buttontext) {
        super(buttontext)
        this.buttonElement.classList.add(CSS.REMOVE_BUTTON)
    }
}

class RedirectButton extends Button {
    constructor(buttontext, redirectTarget) {
        super(buttontext)
        this.redirectTarget = redirectTarget
        this.buttonElement.classList.add(CSS.ADD_BUTTON)
    }

    onClick() {
        window.location.href(this.redirectTarget)
    }
}

class StorageAccess {
    static set(item) {
        localStorage.setItem(item)
    }

    static get(key) {
        return localStorage.getItem(key)
    }
}

class CSS {
    REMOVE_BUTTON = "remove-button"
    ADD_BUTTON = "add-button"
    TEXT_BOX = "text-box"
}
