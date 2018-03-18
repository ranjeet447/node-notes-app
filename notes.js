const fs = require('fs');

var fetchNotes = () => {
  try{
    var notesString =fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);
    return notes;
  }catch(e){
    return [];
  }
};

var saveNotes = function(notes){
  fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};


// module.exports.addNote = function () {
var addNote = (title,body) => {
  var note = {
    title:title,
    body:body
  };
  var notes = fetchNotes();
  var duplicaeNotes = notes.filter((note) => note.title === title);
  if(duplicaeNotes.length ===0){
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var getAll = () => {
  return fetchNotes();
};

var getNote = (title) => {
  var notes = fetchNotes();
  var note = notes.filter((note) => note.title === title);
  return note[0];
};

var removeNote = (title) => {
  var notes = fetchNotes();
  var dnotes = notes.filter(function(note){return  note.title !== title});
  saveNotes(dnotes);
  return notes.length !== dnotes.length?true:false;
}
debugger;

var logNote= function(note){
  console.log('------------------------------------------------------------------------');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};
module.exports ={
    addNote,
    getAll,
    removeNote,
    getNote,
    logNote
}
