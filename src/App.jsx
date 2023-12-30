import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Write from "./components/Routes/Write.jsx";
import List from "./components/Routes/List/List.jsx";
import Favorites from "./components/Routes/Favorites.jsx";
import Edit from "./components/Routes/Edit.jsx";
import { useState } from "react";

function App() {
  const [Notes, setNotes] = useState([]);
  function AddNote(title, text) {
    var obj = {
      id: Notes.length + 1,
      title: title.current.innerText,
      text: text.current.innerHTML,
      type: "normal",
    };
    setNotes((current) => [...current, obj]);
  }
  function DeleteNote(id) {
    setNotes((current) => current.filter((note) => note.id !== id));
    console.log(Notes)
  }
  function setFavorite(currentType,id) {
    if (currentType =="normal") {
      setNotes((current) =>
        current.map((note) =>
          note.id == id
            ? { ...note, title: note.title, text: note.text, type: "favorite" }
            : note
        )
      );
    } else {
      setNotes((current) =>
        current.map((note) =>
          note.id == id
            ? { ...note, title: note.title, text: note.text, type: "normal" }
            : note
        )
      );
    }
  }
  function UpdateNote(id, newTitle, newText) {
    setNotes((current) =>
      current.map((note) =>
        note.id == id
          ? {
              ...note,
              title: newTitle.current.innerText,
              text: newText.current.innerHTML,
              type: note.type,
            }
          : note
      )
    );
  }

  return (
    <Router>
      <Nav />
      <div className="app-content">
        <Routes>
          <Route
            path="/"
            element={
              <List
                itens={Notes}
                DeleteNote={DeleteNote}
                setFavorite={setFavorite}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <Favorites
                itens={Notes}
                DeleteNote={DeleteNote}
                setFavorite={setFavorite}
              />
            }
          />
          <Route
            path="/write"
            element={<Write Notes={Notes} addNote={AddNote} />}
          />
          <Route
            path="/edit/:id"
            element={<Edit Notes={Notes} UpdateNote={UpdateNote} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
