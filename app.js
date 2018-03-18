
console.log('starting app.js.');

const fs = require('fs');
// const os = require('os');
const _  = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

var titleCommand={
  describe:'Title of note',
  demand:true,
  alias:'t'
};
var bodyCommand={
  describe:'Body of note',
  demand:true,
  alias:'b'
};

const argv = yargs
  .command('add','Add a new note.',{
    title:titleCommand,
    boby:bodyCommand
  })
  .command('list','List all notes')
  .command('read','Read a note',{
    title:titleCommand
  })
  .command('remove','Delete a note',{
    title:titleCommand
  })
  .help()
  .argv;


var command =argv._[0];
if(command === 'add'){
console.log('Adding note');
   var note = notes.addNote(argv.title,argv.body);
   if(note){
     console.log('Note created');
      notes.logNote(note);
   }else{
     console.log('Title already taken.');
   }
}else if(command === 'list'){
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s)`);
  allNotes.forEach(function(note) {
    notes.logNote(note);
  });
}else if(command === 'read'){
  console.log('Fetching note');
  var note = notes.getNote(argv.title);
  if(note){
    notes.logNote(note);
  }else{
    console.log('Note not found');
  }
}else if(command === 'remove'){
   var noteRemoved = notes.removeNote(argv.title);
   var message = noteRemoved ? 'Note was removed' : 'Note not found';
   console.log(message);
}else {
console.log('command not recognized');
}
