import Card from "./shared/Card"
import PropTypes from 'prop-types'
import { FaTimes, FaEdit } from "react-icons/fa"
import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"

function FeedbackItem({item}) {
  
  const {deleteFeedback, editFeedback} = useContext(FeedbackContext);

  return (
    <Card reverse={true}>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => deleteFeedback(item.id)}>
        <FaTimes color="#fff"></FaTimes>
      </button>
      <button className="edit" onClick={() => editFeedback(item)}>
        <FaEdit color="white"></FaEdit>
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem