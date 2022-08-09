import "./App.css";
import { Sidebar } from "./Sidebar";
import { Main } from "./Main";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);

  const onAddNote = () => {
    const newNote = {
      id: uuidv4(),
      title: "untitled note",
      body: "",
      lastModified: Date.now(),
    };
    setNotes([newNote, ...notes]);
  };

  const onUpdateNote = (onUpdateNote) => {
    const undatedNotesArray = notes.map((note) => {
      if (note.id === activeNote) {
        return onUpdateNote;
      }
      return note;
    });
    setNotes(undatedNotesArray);
  };

  const onDeleteNote = (idToDelete) => {
    setNotes(notes.filter((note) => note.id !== idToDelete));
    // let newNote1 = [...notes].filter((item) => item.id !== idToDelete);
    // setNotes(newNote1);
  };

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };

  return (
    <div className="App">
      <Sidebar
        notes={notes}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
    </div>
  );
};

export default App;
