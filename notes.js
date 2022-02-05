const fs = require('fs')
const chalk = require('chalk')

const listNotes = function () {
    notes = loadNotes()
    console.log(chalk.yellow("Your notes are"))
    notes.forEach(note => {
        console.log(note.title)
    });
}
const addNote = function (title, body) {
    notes = loadNotes()
    const duplicatedNote = notes.find((note) => (note.title === title))
    if (!duplicatedNote.length) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green("Note has been saved successfully ! \n"))
    } else {
        console.log(chalk.red("Title is already taken ! \n"))
    }


}

const removeNote = function (title) {
    notes = loadNotes()
    const modifiedNotes = notes.filter((note) => (note.title !== title))

    if (modifiedNotes.length != notes.length) {
        saveNotes(modifiedNotes)
        console.log(chalk.green("Note \' " + title + " \' has been deleted !"))
    } else {
        console.log(chalk.red("Note \' " + title + " \' doesn't exisit !"))
    }
}

const saveNotes = function (notes) {
    const data = JSON.stringify(notes)
    fs.writeFileSync('notes.json', data)
}

const readNote = (title) => {
    notes = loadNotes()
    const noteToRead = notes.find((note) => title === note.title)
    if (noteToRead) {
        console.log(chalk.inverse(noteToRead.title))
        console.log(noteToRead.body)
    } else {
        console.log(chalk.red('Error ! no note found'))
    }
}
const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const notes = JSON.parse(dataBuffer.toString())
        return notes
    } catch (e) {
        return []
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}