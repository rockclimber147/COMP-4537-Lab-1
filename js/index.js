import { RedirectButton, CSS, Pages } from "./script.js";
import { Messages } from "../lang/en/user.js";
document.addEventListener("DOMContentLoaded", function (e) {
    new Content()
});

class Content {
    constructor() {
        const body = document.body
        const readButton = new RedirectButton(Messages.READER, [], Pages.READER)
        readButton.render(body)
        const writeButton = new RedirectButton(Messages.WRITER, [], Pages.WRITER)
        writeButton.render(body)
    }
}