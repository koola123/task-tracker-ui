import PropTypes from "prop-types"


const Button = ({ text, color, onClick }) => {
  return (
    <div>
      <button onClick={onClick}
        className="btn">{text}</button>
    </div >
  )
}

Button.propTypes = {
  text: PropTypes.string,
}

export default Button