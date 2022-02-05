// const fs = require('fs')
const notes = require('./notes.js')
// const chalk = require('chalk')
const yargs = require('yargs')

// import chalk from 'chalk'
// fs.appendFileSync("note.txt", "\n Hello my name is Mohammad")
// console.log(chalk.red.bold.inverse("Success"))
// console.log(fs())
// console.log(process.argv)
yargs.version('1.1.0')
yargs.command({
    command: 'add',
    describe: 'Add a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})
yargs.command({
    command: 'list',
    describe: 'Listing all notes',
    handler() {
        notes.listNotes()
    }
})
yargs.command({
    command: 'read',
    describe: 'read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse()