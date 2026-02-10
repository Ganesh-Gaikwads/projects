const input = document.querySelector("#inputNotes");
const notes = document.querySelector("#notes");
const saveBtn = document.querySelector("button");

let noteData = [];

// save all notes
const allNotes = localStorage.getItem("noteData");

if (allNotes !== null) {
  noteData = JSON.parse(allNotes);
}

// display data on screen after refresh

noteData.forEach((element) => {
  renderNote(element.text);
});

saveBtn.addEventListener("click", function () {
  saveNotes();
});

// renderNote to screen

function renderNote(userNote) {
  let lis = document.createElement("li");
  lis.textContent = userNote;
  notes.appendChild(lis);
}

//saveNotes

function saveNotes() {
  const userNote = input.value.trim();

  // create object =>  store notes

  const note = { id: Date.now(), text: userNote };

  // push object into array

  noteData.push(note);

  // save to local starage

  localStorage.setItem("noteData", JSON.stringify(noteData));

  renderNote(userNote);
  input.value = "";
}
