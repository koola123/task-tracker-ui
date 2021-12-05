import PropTypes from "prop-types"
import Button from "./Button"

const Header = ({ text, onAdd, showAdd }) => {
  return (
    <div className="header">
      <h1 style={{ cborderBottom: "5px solid green" }}>{text}</h1>
      <Button className="btn" color={showAdd ? "red" : "green"} text={showAdd ? "Schließen" : "Hinzufügen"} onClick={onAdd} />
    </div>
  )
}

// Default Props for Header
Header.defaultProps = {
  text: "Task Tracker"
}

// Prop Types for Header
Header.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func
}

export default Header