import { Button, RedirectButton, CSS, Pages, NoteContainer, StorageAccess } from "./script.js";
import { Messages } from "../lang/en/user.js";
document.addEventListener("DOMContentLoaded", function (e) {
    new Content()
});

class Content {
    constructor() {
        const body = document.body;

        this.updatedAt = document.createElement("div");
        this.updatedAt.innerHTML = Messages.UPDATED_AT(this.getFormattedTime());
        body.appendChild(this.updatedAt);

        this.writerElement = document.createElement("div")
        this.writerContainer = new WriterNoteContainer(this.writerElement);
        body.appendChild(this.writerElement)

        this.writerContainer.addNotes();

        this.addButtonCntainer = document.createElement("div")
        body.append(this.addButtonCntainer)
        this.addButton = new Button(Messages.ADD, [], () => {
            this.writerContainer.addNote("", -1)
            StorageAccess.saveNotes(this.writerContainer.getAllTexts()) 
        })
        this.addButton.render(this.addButtonCntainer)

        const backButton = new RedirectButton(Messages.BACK, [], Pages.INDEX);
        backButton.render(body);

        this.startUpdatingTimestamp();
    }

    getFormattedTime() {
        return new Date().toLocaleTimeString();
    }

    update() {
        this.updatedAt.innerHTML = Messages.UPDATED_AT(this.getFormattedTime());
    }

    startUpdatingTimestamp() {
        setInterval(() => this.update(), 2000);
    }
}

class WriterNoteContainer extends NoteContainer {
    addNotes() {
        const notes = StorageAccess.loadNotes()
        this.loadNotes(notes)
    }

    addNote(text, index) {
        const note = super.addNote(text, index);

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.addEventListener("click", () => {
            this.notes = this.notes.filter(n => n !== note);
            note.container.remove();
            StorageAccess.saveNotes(this.getAllTexts())
        });

        note.container.appendChild(removeBtn);
        StorageAccess.saveNotes(this.getAllTexts())
        return note;
    }
}