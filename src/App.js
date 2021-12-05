import Header from "./components/Header"
import Notes from "./components/Notes"
import { useState } from "react"
import AddNote from "./components/AddNote"



const App = () => {
  const [showAddNote, setShowAddNote] = useState(false)
  const [notes, setNotes] = useState(
    [
      {
        id: 1,
        text: "Flugtickets buchen",
        day: "18.12.2021 / 10:00 Uhr",
        reminder: true,
      },
      {
        id: 2,
        text: "Christmas shopping",
        day: "18.12.2021 / 16:30 Uhr",
        reminder: false,
      },
      {
        id: 3,
        text: "Hotel buchen",
        day: "19.12.2021 / 11:00 Uhr",
        reminder: true,
      },
      {
        id: 4,
        text: "Mietwagen abholen",
        day: "10.01.2022 / 15:00 Uhr",
        reminder: true,
      }
    ]
  )


  // 😎 Add Note 🪄
  const addNote = (note) => {
    const id = Math.floor(Math.random() * 1000) + 1
    const newNote = { id, ...note }
    setNotes([...notes, newNote])
  }

  // 😎 Delete Note 🪄
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setNotes(notes.map((note) =>
      note.id === id ? {
        ...note, reminder:
          !note.reminder
      } : note))
  }



  return (
    <div className="container">
      <Header onAdd={() => setShowAddNote(!showAddNote)} showAdd={showAddNote} />
      {showAddNote && <AddNote onAdd={addNote} />}
      {notes.length > 0 ? (<Notes notes={notes}
        onDelete={deleteNote} onToggle={toggleReminder}
      />
      ) : ('Keine Notizen vorhanden.'
      )}
    </div >
  );
}



export default App;
