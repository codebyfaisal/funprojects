import * as utility from './utility.js'

// load data From Storage
utility.loadFromStorage();

// define variables must in parent script or after loading data
const notes = document.querySelectorAll(".note")
const noteFunctions = utility.notesContainer.querySelectorAll('.note-header img')

// add one note at refresh if noteContainer is empty
if (notes.length === 0) utility.addNoteEvent()

// add functions on note buttons
utility.noteFunctionsEvent(noteFunctions)

// create new note event
utility.addNoteBtn.addEventListener("click", () => {
    utility.addNoteEvent()
})

// clear all notes
utility.clearAllBtn.addEventListener("click", utility.clearAllEvent)