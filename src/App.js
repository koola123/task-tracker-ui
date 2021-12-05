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
        text: "Book flight tickets",
        day: "Dec 18th at 2:30pm",
        reminder: true,
      },
      {
        id: 2,
        text: "Christmas shopping",
        day: "Dec 20th at 4:30pm",
        reminder: false,
      },
      {
        id: 3,
        text: "Hotel booking",
        day: "Dec 9th at 11:00am",
        reminder: true,
      },
      {
        id: 4,
        text: "Go to Hertz rental station",
        day: "Jan 1st at 10:00am",
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
