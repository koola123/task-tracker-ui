import { useState } from "react"

const AddNote = ({ onAdd }) => {

  const [text, setText] = useState("")
  const [day, setDay] = useState("")
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      alert("Bitte Notiz hinzufügen!")
      return
    }

    onAdd({ text, day, reminder })

    setText("")
    setDay("")
    setReminder(false)
  }


  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Notiz</label>
        <input type="text" placeholder="Notiz hinzufügen"
          value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <div className="form-control">
        <label>Tag & Uhrzeit</label>
        <input type="text" placeholder="Tag & Uhrzeit"
          value={day} onChange={(e) => setDay(e.target.value)} />
      </div>
      <div className="form-control form-control-check">
        <label>Reminder setzen</label>
        <input type="checkbox"
          checked={reminder}
          value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
      </div>

      <input type="submit" value="Notiz speichern" className="btn btn-block" />
    </form>
  )
}

export default AddNote