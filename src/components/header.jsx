import PropTypes from 'prop-types'

function Header({text, bgcolor, textcolor}) {

  const headerStyle = { backgroundColor: bgcolor, color: textcolor};

  return (
    <header style={headerStyle}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text: "Feedback UI",
  bgcolor: 'rgba(0,0,0,0.4)',
  textcolor: 'white',
}

Header.propTypes = {
  text: PropTypes.string,
  bgcolor: PropTypes.string,
  textcolor: PropTypes.string,
}

export default Header