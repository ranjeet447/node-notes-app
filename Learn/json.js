// var obj = {
//   'name': "Ranjeet"
// };
// var objString = JSON.stringify(obj);
// console.log(typeof objString);
// console.log(objString);
//
// var strObj = '{"Name":"Ranjeet","age":20}';
// var str = JSON.parse(strObj);
// console.log(typeof str);
// console.log(str);

const fs  = require('fs');
var originalNote ={
  title:'some title',
  body:'body of the note'
};

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json',originalNoteString);

var noteString =fs.readFileSync('notes.json');
var note = JSON.parse(noteString);

console.log(note.title);
console.log(note.body);
