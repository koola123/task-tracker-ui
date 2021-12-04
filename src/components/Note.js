import { FaRegTrashAlt } from "react-icons/fa"

const Note = ({ note, onDelete, onToggle }) => {
  return (
    <div className={`note ${note.reminder ? "reminder" : ""}`} onDoubleClick={() => onToggle(note.id)}>
      <h3>{note.text} <FaRegTrashAlt style={{ color: "black", cursor: "pointer" }} onClick={() => onDelete(note.id)} /></h3>
      <p>{note.day}</p>
    </div>
  )
}

export default Note