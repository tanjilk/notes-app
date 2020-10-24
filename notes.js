const fs = require('fs');
const chalk = require('chalk');

const getNotes = function(){
    console.log('Your notes here...');
}

const addNote = function(title, body){
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function(note){
        return note.title === title;
        
    })
    if(duplicateNotes.length===0){
        notes.push({
            title: title,
            body: body
        })
    } else {
        console.log('This note already exists...');
    }
    console.log(notes);
    saveNotes(notes)
}

// Save to an file
const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch(e) {
        return []
    }
}

const removeNote = function(title){
    console.log(chalk.yellow(title) + " trying to be removed");
    const notes = loadNotes();
    const notesToKeep = notes.filter(function(note){
        return note.title !== title
    })
    if(notes.length > notesToKeep.length){
        console.log(chalk.green('Note removed!'));
        saveNotes(notesToKeep);
    } else{
        console.log(chalk.red('No note found!'));
    }
}
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}