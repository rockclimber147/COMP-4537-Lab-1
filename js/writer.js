import { RedirectButton, CSS, Pages, NoteContainer, StorageAccess } from "./script.js";
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

        this.writerContainer = new WriterNoteContainer(body);

        const backButton = new RedirectButton(Messages.BACK, [], Pages.INDEX);
        backButton.render(body);

        this.startUpdatingTimestamp();
    }

    getFormattedTime() {
        return new Date().toLocaleTimeString();
    }

    update() {
        this.updatedAt.innerHTML = Messages.UPDATED_AT(this.getFormattedTime());
        this.writerContainer.clear()
        this.writerContainer.addNotes()
    }

    startUpdatingTimestamp() {
        setInterval(() => this.update(), 2000);
    }
}

class WriterNoteContainer extends NoteContainer {
    addNotes() {
        const notes = StorageAccess.loadNotes()
        console.log(notes)
        this.loadNotes(notes)
    }

    addNote(text, index) {
        const note = super.addNote(text, index);

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.addEventListener("click", () => {
        this.notes = this.notes.filter(n => n !== note);
        note.container.remove();
        });

        note.container.appendChild(removeBtn);
        return note;
    }
}