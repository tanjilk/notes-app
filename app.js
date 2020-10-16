const chalk = require('chalk');
const { demand } = require('yargs');
const yargs = require('yargs');
const getNotes = require('./notes.js');

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title: {
            describe: 'Note title',
            demandOption : true,
            type: 'string'
        }
    },
    handler : function(argv){
        console.log('Adding a new note...');
        console.log(chalk.green(argv.title + ' succesful added!'));
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove an note',
    handler : function(){
        console.log('Removing the note...');
        console.log(chalk.green('Removed!'))
    }
})

console.log(yargs.argv);