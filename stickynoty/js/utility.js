export const alert = document.getElementById("alert")
export const addNoteBtn = document.getElementById("add-note")
export const clearAllBtn = document.getElementById("clear-all")
export const notesContainer = document.querySelector(".notes")
export const noteFunctions = notesContainer.querySelectorAll('.note-header img')

export const loadFromStorage = () => {
    const noteApp = localStorage.getItem('note-app')
    notesContainer.innerHTML = noteApp
}

export const updateStorage = () => localStorage.setItem('note-app', notesContainer.innerHTML)

export const addNoteEvent = () => {
    const note = document.createElement("div")
    note.classList.add('note')
    note.innerHTML =
        `<div class="note-header">
        <img src="./assets/icons/copy.png" alt="copy" title="copy" class="active">
        <img src="./assets/icons/paste.png" alt="paste" title="paste">
        <img src="./assets/icons/save.png" alt="save" title="save">
        <img src="./assets/icons/delete.png" alt="delete" title="delete">
        </div>
        <div class="note-textarea">
        <textarea name="my-note" class="my-note" title="note" placeholder="write something" rows="8"></textarea>
        </div>`

    notesContainer.insertBefore(note, notesContainer.firstChild);
    updateStorage()

    notification('New Note Added')

    const noteButtons = note.querySelectorAll('.note-header img');
    noteFunctionsEvent(noteButtons)
}

export const noteFunctionsEvent = (noteFunctions) => {
    noteFunctions.forEach(ftnButton => {
        ftnButton.addEventListener("click", () => {
            const btnTitle = ftnButton.getAttribute('title')
            const text = ftnButton.parentElement.parentElement.querySelector(".my-note")
            if (btnTitle === 'delete') {
                ftnButton.parentElement.parentElement.remove()
                setTimeout(() => {
                    if (notesContainer.querySelectorAll(".note").length === 0) addNoteEvent()
                    notification("Note deleted")
                }, 100)
            }
            else if (btnTitle === 'save') {
                text.innerHTML = text.value
                notification("Note Save")
            }
            else if (btnTitle === 'copy') {
                navigator.clipboard.writeText(text.value)
                notification("Copy to Clipboard")
            }
            else if (btnTitle === 'paste') {
                navigator.clipboard.readText()
                    .then(clipboardText => {
                        text.innerHTML += clipboardText;
                    })
                    .catch(err => {
                        console.error('Failed to read clipboard contents: ', err);
                        text.innerHTML += '';
                    });
                notification("Pasted")
            }
            updateStorage()
        })
    })
}

export const clearAllEvent = () => {
    alert.classList.toggle("none")

    const alertButtons = document.querySelectorAll("#alert button")
    alertButtons.forEach(button => {
        button.addEventListener("click", () => {
            const alertResponse = button.getAttribute("alertResponse")
            if (alertResponse == 1) {
                notesContainer.innerHTML = ''
                addNoteEvent()
            }
            alert.classList.add("none")
            notification("All Notes Successfully deleted")
        })
    })
}

export const notification = (alertNote) => {
    const notificationBox = document.querySelector(".notification")
    notificationBox.innerHTML = alertNote;
    notificationBox.style.opacity = "1"
    setTimeout(() => {
        notificationBox.style.opacity = "0"
    }, 2000)
}