// Get the required npm modules

const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');

// Create the add command
yargs.command({
    command: 'add',

    // Description of the command

    describe: 'Add a new note',

    // Additional arguments
    builder:{
        // Add title argument

        title: {
            describe: 'Note title',
            demandOption : true,
            type: 'string'
        },
        // Add body argument

        body: {
            describe: 'The content of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler : function(argv){
        console.log(chalk.yellow('Informations about the note...'));
        console.log('Title: ' + argv.title);
        console.log('Body: ' + argv.body);
    }
})

// Create the remove command
yargs.command({
    command: 'remove',
    describe: 'Remove an note',
    handler : function(){
        console.log('Removing the note...');
        console.log(chalk.green('Removed!'))
    }
})

console.log(yargs.argv);