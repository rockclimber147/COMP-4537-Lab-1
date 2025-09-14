class Entry {
    constructor(content) {
        this.content = content
    }
}

class Button {
  constructor(text, cssClasses = [], onClick = null) {
    this.element = document.createElement("button");
    this.element.textContent = text;
    this.element.classList.add(...cssClasses);
    if (onClick) {
      this.element.addEventListener("click", onClick);
    }
  }

  render(parent) {
    parent.appendChild(this.element);
  }
}

class EntryContainer {
    
}

class Entry {
  constructor(text = "", onRemove = null) {
    this.container = document.createElement("div");

    this.textarea = document.createElement("textarea");
    this.textarea.value = text;
    this.container.appendChild(this.textarea);

    this.removeBtn = new Button("Remove", ["btn", "btn-danger"], () => {
      this.container.remove();
      if (onRemove) onRemove(this);
    });
    this.removeBtn.render(this.container);
  }

  getText() {
    return this.textarea.value;
  }

  render(parent) {
    parent.appendChild(this.container);
  }
}

class StorageAccess {
    static set(item) {
        localStorage.setItem(item)
    }

    static get(key) {
        return localStorage.getItem(key)
    }

    
    static saveNotes(notesArray) {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(notesArray));
    }

    static loadNotes() {
        const raw = localStorage.getItem(this.STORAGE_KEY);
        return raw ? JSON.parse(raw) : [];
    }
}

class CSS {
    REMOVE_BUTTON = "remove-button"
    ADD_BUTTON = "add-button"
    TEXT_BOX = "text-box"
}
