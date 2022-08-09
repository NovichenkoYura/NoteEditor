import "./App.css";
import { Sidebar } from "./Sidebar";
import { Main } from "./Main";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [notes, setNotes] = useState([]);

  const onAddNote = () => {
    const newNote = {
      id: uuidv4(),
      title: "untitled note",
      body: "",
      lastModified: Date.now,
    };
    setNotes([newNote, ...notes]);
  };

  return (
    <div className="App">
      <Sidebar notes={notes} onAddNote={onAddNote} />
      <Main />
    </div>
  );
};

export default App;
